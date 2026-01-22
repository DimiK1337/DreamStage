create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_role text;
  v_display_name text;
begin
  -- pull from user metadata if provided
  v_role := coalesce(new.raw_user_meta_data->>'role', 'artist');
  v_display_name := new.raw_user_meta_data->>'display_name';

  -- enforce allowed roles
  if v_role not in ('artist', 'venue') then
    v_role := 'artist';
  end if;

  insert into public.profiles (id, role, display_name)
  values (new.id, v_role, v_display_name)
  on conflict (id) do update
    set role = excluded.role,
        display_name = excluded.display_name;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

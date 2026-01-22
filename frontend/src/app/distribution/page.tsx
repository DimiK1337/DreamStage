//frontend/src/app/distribution/page.tsx

import { VStack } from '@chakra-ui/react'
import { AppShell } from '@/components/layout/AppShell'
import { getMockDistributionData } from '@/lib/data/distribution'
import { DistributionHeader } from '@/components/distribution/DistributionHeader'
import { ReleaseCard } from '@/components/distribution/ReleaseCard'
import { UploadCtaCard } from '@/components/distribution/UploadCtaCard'

export default function DistributionPage() {
  const data = getMockDistributionData()

  return (
    <AppShell title="Distribution" subtitle="Manage your releases across platforms">
      <DistributionHeader platforms={data.connectedPlatforms} moreCount={data.moreCount} />

      <VStack align="stretch" gap={4}>
        {data.releases.map((r) => (
          <ReleaseCard key={r.id} release={r} />
        ))}
      </VStack>

      <UploadCtaCard />
    </AppShell>
  )
}

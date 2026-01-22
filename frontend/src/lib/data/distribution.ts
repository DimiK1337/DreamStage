//frontend/src/lib/data/distribution.ts

export type PlatformStatus = 'ok' | 'processing' | 'warning'

export type PlatformMetric = {
  platform: string
  streamsLabel: string // e.g. "1.2M"
  status: PlatformStatus
}

export type ReleaseType = 'Single' | 'Album' | 'EP'

export type ReleaseCardData = {
  id: string
  title: string
  type: ReleaseType
  trackCount?: number // Album/EP
  releasedLabel: string // e.g. "Released Jan 10, 2026"
  totalStreamsLabel: string // e.g. "2.4M"
  revenueLabel: string // e.g. "$4,320"
  platforms: PlatformMetric[]
}

export type ConnectedPlatform = {
  key: string
  label: string // e.g. "Spotify"
  short: string // e.g. "S"
  color: string // Chakra token e.g. "green.400"
}

export type DistributionData = {
  connectedPlatforms: ConnectedPlatform[]
  moreCount: number
  releases: ReleaseCardData[]
}

export function getMockDistributionData(): DistributionData {
  return {
    connectedPlatforms: [
      { key: 'spotify', label: 'Spotify', short: 'S', color: 'green.400' },
      { key: 'apple', label: 'Apple Music', short: 'A', color: 'pink.400' },
      { key: 'youtube', label: 'YouTube', short: 'Y', color: 'red.400' },
      { key: 'amazon', label: 'Amazon', short: 'Am', color: 'blue.400' },
      { key: 'tidal', label: 'Tidal', short: 'T', color: 'gray.300' },
    ],
    moreCount: 3,
    releases: [
      {
        id: 'r1',
        title: 'Midnight Dreams',
        type: 'Single',
        releasedLabel: 'Released Jan 10, 2026',
        totalStreamsLabel: '2.4M',
        revenueLabel: '$4,320',
        platforms: [
          { platform: 'Spotify', streamsLabel: '1.2M', status: 'ok' },
          { platform: 'Apple Music', streamsLabel: '680K', status: 'ok' },
          { platform: 'YouTube Music', streamsLabel: '520K', status: 'ok' },
          { platform: 'Amazon Music', streamsLabel: 'Processing…', status: 'processing' },
          { platform: 'Tidal', streamsLabel: '45K', status: 'ok' },
        ],
      },
      {
        id: 'r2',
        title: 'Electric Soul',
        type: 'Album',
        trackCount: 12,
        releasedLabel: 'Released Dec 15, 2025',
        totalStreamsLabel: '8.1M',
        revenueLabel: '$12,850',
        platforms: [
          { platform: 'Spotify', streamsLabel: '4.8M', status: 'ok' },
          { platform: 'Apple Music', streamsLabel: '2.1M', status: 'ok' },
          { platform: 'YouTube Music', streamsLabel: '890K', status: 'ok' },
          { platform: 'Amazon Music', streamsLabel: '220K', status: 'ok' },
          { platform: 'Tidal', streamsLabel: '90K', status: 'ok' },
        ],
      },
      {
        id: 'r3',
        title: 'Summer Vibes EP',
        type: 'EP',
        trackCount: 5,
        releasedLabel: 'Released Nov 28, 2025',
        totalStreamsLabel: '1.2M',
        revenueLabel: '$2,180',
        platforms: [
          { platform: 'Spotify', streamsLabel: '720K', status: 'ok' },
          { platform: 'Apple Music', streamsLabel: '340K', status: 'ok' },
          { platform: 'Deezer', streamsLabel: '140K', status: 'ok' },
        ],
      },
    ],
  }
}

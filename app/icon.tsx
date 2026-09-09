import { ImageResponse } from 'next/og'

export function generateImageMetadata() {
  return [
    { contentType: 'image/png', size: { width: 16, height: 16 }, id: '16' },
    { contentType: 'image/png', size: { width: 32, height: 32 }, id: '32' },
    { contentType: 'image/png', size: { width: 48, height: 48 }, id: '48' },
    { contentType: 'image/png', size: { width: 192, height: 192 }, id: '192' },
    { contentType: 'image/png', size: { width: 512, height: 512 }, id: '512' },
  ]
}

export default function Icon({ id }: { id: string }) {
  const size = parseInt(id, 10);
  const fontSize = Math.floor(size * 0.55);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
          fontSize: fontSize,
          fontWeight: 700,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        MS
      </div>
    ),
    { width: size, height: size }
  )
}

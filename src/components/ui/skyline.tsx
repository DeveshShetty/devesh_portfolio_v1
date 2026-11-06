// Authored artwork: a quiet night skyline built from a seeded generator so server and client render the same city.

function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const W = 1600
const H = 260

interface Building {
  x: number
  w: number
  h: number
  /** Antenna height, 0 for a flat roof */
  mast: number
}
interface Win {
  x: number
  y: number
}

function city(seed: number, minH: number, maxH: number, lit: number) {
  const rnd = mulberry32(seed)
  const buildings: Building[] = []
  const windows: Win[] = []
  let x = -12
  while (x < W) {
    const w = 30 + Math.floor(rnd() * 58)
    const tall = rnd() > 0.82
    const h = minH + Math.floor(rnd() * (tall ? maxH - minH : (maxH - minH) * 0.55))
    const mast = tall && rnd() > 0.4 ? 18 + Math.floor(rnd() * 26) : 0
    buildings.push({ x, w, h, mast })
    const cols = Math.floor((w - 12) / 12)
    const rows = Math.floor((h - 16) / 16)
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (rnd() < lit) windows.push({ x: x + 8 + c * 12, y: H - h + 10 + r * 16 })
      }
    }
    x += w - (rnd() < 0.3 ? 8 : 0)
  }
  return { buildings, windows }
}

const BACK = city(11, 60, 190, 0)
const FRONT = city(7, 46, 170, 0.04)

function Layer({ data, className }: { data: ReturnType<typeof city>; className: string }) {
  return (
    <g className={className}>
      {data.buildings.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={H - b.h} width={b.w} height={b.h} />
          {b.mast > 0 && <rect x={b.x + b.w / 2 - 1} y={H - b.h - b.mast} width={2} height={b.mast} />}
        </g>
      ))}
    </g>
  )
}

export function Skyline({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <Layer data={BACK} className="fill-[hsl(var(--sky-back))]" />
      <Layer data={FRONT} className="fill-[hsl(var(--sky-front))]" />
      <g>
        {FRONT.windows.map((w, i) => (
          <rect key={i} className="win" x={w.x} y={w.y} width={5} height={8} />
        ))}
      </g>
    </svg>
  )
}

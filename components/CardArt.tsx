/**
 * CardArt — Renaissance-style SVG illustrations for the 22 Major Arcana.
 * Line-art aesthetic with gold strokes on dark background,
 * inspired by Medieval/Renaissance woodcut & engraving style.
 */

type Props = { id: number; className?: string };

export default function CardArt({ id, className }: Props) {
  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Common background glow */}
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="rgba(212,175,55,0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id={`gold-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A88B2A" />
        </linearGradient>
      </defs>
      <rect width="200" height="260" fill={`url(#glow-${id})`} />
      {renderCard(id)}
    </svg>
  );
}

function renderCard(id: number) {
  const s = { stroke: "#D4AF37", strokeWidth: 1.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  const sDim = { ...s, strokeWidth: 0.8, opacity: 0.5 };
  const sFill = { fill: "rgba(212,175,55,0.1)", stroke: "#D4AF37", strokeWidth: 0.8 };

  switch (id) {
    // ── 0  THE FOOL ──────────────────────────────
    case 0:
      return (
        <g>
          {/* Cliff edge */}
          <path d="M 0 220 Q 60 210 80 230 L 80 260 L 0 260 Z" {...sFill} />
          <path d="M 80 230 Q 100 215 140 225 Q 170 230 200 220 L 200 260 L 80 260 Z" {...sDim} />
          {/* Figure - walking pose */}
          <circle cx="72" cy="90" r="12" {...s} />
          {/* Hair flowing */}
          <path d="M 64 82 Q 55 70 50 75" {...sDim} />
          <path d="M 60 85 Q 48 78 46 82" {...sDim} />
          {/* Body */}
          <path d="M 72 102 L 72 155" {...s} />
          {/* Arms spread wide - carefree */}
          <path d="M 72 118 Q 50 105 38 110" {...s} />
          <path d="M 72 118 Q 95 108 105 115" {...s} />
          {/* Bundle on stick in right hand */}
          <line x1="105" y1="115" x2="115" y2="85" {...s} />
          <circle cx="118" cy="80" r="8" {...sFill} />
          {/* Legs - walking toward edge */}
          <path d="M 72 155 L 58 195 L 52 210" {...s} />
          <path d="M 72 155 L 85 190 L 80 210" {...s} />
          {/* Small dog */}
          <ellipse cx="48" cy="195" rx="10" ry="6" {...s} />
          <circle cx="40" cy="190" r="4" {...s} />
          <path d="M 37 188 L 34 184" {...sDim} />
          <path d="M 42 188 L 41 184" {...sDim} />
          <path d="M 58 195 L 62 200" {...sDim} />
          {/* Sun rays */}
          <circle cx="155" cy="45" r="18" {...s} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
            const r1 = 22, r2 = 32;
            const rad = (a * Math.PI) / 180;
            return <line key={a} x1={155 + r1 * Math.cos(rad)} y1={45 + r1 * Math.sin(rad)} x2={155 + r2 * Math.cos(rad)} y2={45 + r2 * Math.sin(rad)} {...sDim} />;
          })}
          {/* Flowers at cliff */}
          <circle cx="30" cy="215" r="3" {...sDim} />
          <circle cx="45" cy="220" r="2.5" {...sDim} />
          <circle cx="65" cy="222" r="3" {...sDim} />
        </g>
      );

    // ── 1  THE MAGICIAN ──────────────────────────
    case 1:
      return (
        <g>
          {/* Infinity above head */}
          <path d="M 88 42 Q 100 30 112 42 Q 124 54 112 42" {...s} />
          <path d="M 88 42 Q 100 54 112 42" {...s} />
          {/* Head */}
          <circle cx="100" cy="65" r="14" {...s} />
          {/* Right arm pointing up */}
          <path d="M 100 79 L 100 140" {...s} />
          <path d="M 100 100 L 130 72" {...s} />
          {/* Wand in right hand */}
          <line x1="130" y1="72" x2="138" y2="48" {...s} />
          <circle cx="138" cy="45" r="3" {...sFill} />
          {/* Left arm pointing down */}
          <path d="M 100 100 L 68 135" {...s} />
          {/* Robes */}
          <path d="M 100 140 Q 85 170 70 210 Q 65 225 55 240" {...s} />
          <path d="M 100 140 Q 115 170 130 210 Q 135 225 145 240" {...s} />
          <path d="M 55 240 Q 100 235 145 240" {...s} />
          {/* Belt */}
          <path d="M 82 145 Q 100 148 118 145" {...s} />
          {/* Table */}
          <path d="M 25 235 L 175 235" {...s} />
          <line x1="35" y1="235" x2="35" y2="255" {...sDim} />
          <line x1="165" y1="235" x2="165" y2="255" {...sDim} />
          {/* 4 elements on table */}
          {/* Cup */}
          <path d="M 45 225 L 42 235 L 55 235 L 52 225 Z" {...sFill} />
          {/* Pentacle */}
          <circle cx="80" cy="229" r="5" {...sFill} />
          <circle cx="80" cy="229" r="3" {...sDim} />
          {/* Sword */}
          <line x1="115" y1="220" x2="115" y2="235" {...s} />
          <line x1="110" y1="225" x2="120" y2="225" {...s} />
          {/* Wand */}
          <line x1="145" y1="220" x2="145" y2="235" {...s} />
          <circle cx="145" cy="218" r="2" {...sFill} />
          {/* Flower garland overhead */}
          <path d="M 30 25 Q 60 15 100 20 Q 140 15 170 25" {...sDim} />
          <circle cx="60" cy="18" r="3" {...sDim} />
          <circle cx="100" cy="16" r="3" {...sDim} />
          <circle cx="140" cy="18" r="3" {...sDim} />
        </g>
      );

    // ── 2  THE HIGH PRIESTESS ────────────────────
    case 2:
      return (
        <g>
          {/* Two pillars */}
          <rect x="30" y="50" width="18" height="200" rx="3" {...sFill} />
          <rect x="152" y="50" width="18" height="200" rx="3" {...sFill} />
          <text x="37" y="100" fill="#D4AF37" fontSize="14" fontWeight="bold" opacity="0.7">B</text>
          <text x="157" y="100" fill="#D4AF37" fontSize="14" fontWeight="bold" opacity="0.7">J</text>
          {/* Veil between pillars */}
          <path d="M 48 50 Q 70 55 100 52 Q 130 55 152 50" {...sDim} />
          <path d="M 48 60 Q 70 65 100 62 Q 130 65 152 60" {...sDim} />
          {/* Crescent crown */}
          <path d="M 88 38 Q 100 28 112 38" {...s} />
          <circle cx="100" cy="36" r="5" {...sFill} />
          {/* Head */}
          <circle cx="100" cy="58" r="12" {...s} />
          {/* Flowing veil from head */}
          <path d="M 88 55 Q 75 65 72 90" {...sDim} />
          <path d="M 112 55 Q 125 65 128 90" {...sDim} />
          {/* Body - seated */}
          <path d="M 100 70 L 100 140" {...s} />
          {/* Arms holding scroll */}
          <path d="M 100 95 L 78 110" {...s} />
          <path d="M 100 95 L 122 110" {...s} />
          {/* Torah scroll */}
          <rect x="82" y="108" width="36" height="24" rx="2" {...sFill} />
          <text x="92" y="124" fill="#D4AF37" fontSize="8" opacity="0.6">TORA</text>
          {/* Seated robe */}
          <path d="M 100 140 Q 75 160 65 200 L 60 240" {...s} />
          <path d="M 100 140 Q 125 160 135 200 L 140 240" {...s} />
          <path d="M 60 240 Q 100 245 140 240" {...s} />
          {/* Cross on chest */}
          <line x1="100" y1="78" x2="100" y2="90" {...s} />
          <line x1="94" y1="84" x2="106" y2="84" {...s} />
          {/* Moon at feet */}
          <path d="M 90 238 Q 100 228 110 238" {...sDim} />
        </g>
      );

    // ── 3  THE EMPRESS ───────────────────────────
    case 3:
      return (
        <g>
          {/* Stars crown (12 stars) */}
          {Array.from({ length: 7 }).map((_, i) => {
            const angle = -Math.PI / 2 + (i * Math.PI) / 6 - Math.PI / 6;
            return <circle key={i} cx={100 + 25 * Math.cos(angle)} cy={35 + 18 * Math.sin(angle)} r="2" {...sFill} />;
          })}
          {/* Head */}
          <circle cx="100" cy="55" r="13" {...s} />
          {/* Hair flowing */}
          <path d="M 87 50 Q 75 55 70 70 Q 68 85 72 100" {...sDim} />
          <path d="M 113 50 Q 125 55 130 70 Q 132 85 128 100" {...sDim} />
          {/* Body */}
          <path d="M 100 68 L 100 130" {...s} />
          {/* Scepter in right hand */}
          <path d="M 100 90 L 135 75" {...s} />
          <line x1="135" y1="75" x2="140" y2="40" {...s} />
          <circle cx="140" cy="36" r="5" {...sFill} />
          {/* Left arm resting */}
          <path d="M 100 95 L 70 115" {...s} />
          {/* Throne/cushion */}
          <path d="M 60 130 Q 100 125 140 130 L 150 240 Q 100 245 50 240 Z" {...sFill} />
          {/* Robe draping */}
          <path d="M 100 130 Q 80 160 70 200 L 65 240" {...s} />
          <path d="M 100 130 Q 120 160 130 200 L 135 240" {...s} />
          {/* Venus symbol on shield */}
          <circle cx="68" cy="170" r="8" {...s} />
          <line x1="68" y1="178" x2="68" y2="190" {...s} />
          <line x1="63" y1="185" x2="73" y2="185" {...s} />
          {/* Wheat / Nature */}
          <path d="M 150 200 Q 155 180 160 160" {...sDim} />
          <path d="M 155 175 Q 162 170 158 165" {...sDim} />
          <path d="M 155 185 Q 162 180 158 175" {...sDim} />
          <path d="M 40 200 Q 35 180 30 165" {...sDim} />
          <path d="M 35 175 Q 28 170 32 165" {...sDim} />
          {/* Stream at bottom */}
          <path d="M 0 250 Q 50 245 100 250 Q 150 255 200 250" {...sDim} />
        </g>
      );

    // ── 4  THE EMPEROR ───────────────────────────
    case 4:
      return (
        <g>
          {/* Crown */}
          <path d="M 85 30 L 82 42 L 90 36 L 100 44 L 110 36 L 118 42 L 115 30 Z" {...sFill} />
          {/* Head - bearded */}
          <circle cx="100" cy="58" r="13" {...s} />
          <path d="M 92 65 Q 100 78 108 65" {...sDim} />
          {/* Body - armored */}
          <path d="M 100 71 L 100 135" {...s} />
          <path d="M 88 75 L 112 75" {...s} />
          <path d="M 85 80 L 115 80 L 115 110 L 85 110 Z" {...sDim} />
          {/* Ram symbols on armor */}
          <path d="M 94 90 Q 100 85 106 90 Q 100 95 94 90" {...sDim} />
          {/* Right arm - scepter (ankh) */}
          <path d="M 100 90 L 140 80" {...s} />
          <line x1="140" y1="80" x2="145" y2="45" {...s} />
          <circle cx="145" cy="40" r="5" {...s} />
          <line x1="140" y1="55" x2="150" y2="55" {...s} />
          {/* Left arm - orb */}
          <path d="M 100 95 L 65 105" {...s} />
          <circle cx="58" cy="105" r="8" {...sFill} />
          <line x1="58" y1="97" x2="58" y2="113" {...sDim} />
          <line x1="50" y1="105" x2="66" y2="105" {...sDim} />
          {/* Stone throne */}
          <rect x="55" y="135" width="90" height="110" rx="4" {...sFill} />
          {/* Throne rams */}
          <path d="M 60 145 Q 50 140 48 150 Q 45 160 55 155" {...s} />
          <path d="M 140 145 Q 150 140 152 150 Q 155 160 145 155" {...s} />
          {/* Legs */}
          <path d="M 90 135 L 85 190 L 80 220" {...s} />
          <path d="M 110 135 L 115 190 L 120 220" {...s} />
          {/* Mountain backdrop */}
          <path d="M 0 200 L 20 160 L 40 190" {...sDim} />
          <path d="M 160 190 L 180 155 L 200 200" {...sDim} />
        </g>
      );

    // ── 5  THE HIEROPHANT ────────────────────────
    case 5:
      return (
        <g>
          {/* Triple crown */}
          <path d="M 88 22 L 100 12 L 112 22" {...s} />
          <path d="M 86 30 L 114 30" {...s} />
          <path d="M 86 25 L 114 25" {...sDim} />
          <path d="M 88 35 L 112 35" {...s} />
          {/* Head */}
          <circle cx="100" cy="50" r="13" {...s} />
          {/* Beard */}
          <path d="M 92 58 Q 100 72 108 58" {...sDim} />
          {/* Body & vestments */}
          <path d="M 100 63 L 100 140" {...s} />
          <path d="M 100 140 Q 70 180 55 240" {...s} />
          <path d="M 100 140 Q 130 180 145 240" {...s} />
          <path d="M 55 240 Q 100 250 145 240" {...s} />
          {/* Blessing right hand raised */}
          <path d="M 100 85 L 135 65" {...s} />
          <line x1="135" y1="65" x2="138" y2="58" {...s} />
          <line x1="135" y1="65" x2="140" y2="60" {...s} />
          {/* Staff in left hand (triple cross) */}
          <path d="M 100 90 L 60 100" {...s} />
          <line x1="60" y1="100" x2="55" y2="35" {...s} />
          <line x1="48" y1="45" x2="62" y2="45" {...s} />
          <line x1="50" y1="55" x2="60" y2="55" {...s} />
          <line x1="52" y1="65" x2="58" y2="65" {...s} />
          {/* Crossed keys at feet */}
          <path d="M 85 230 L 105 215" {...sDim} />
          <path d="M 115 230 L 95 215" {...sDim} />
          <circle cx="85" cy="232" r="3" {...sDim} />
          <circle cx="115" cy="232" r="3" {...sDim} />
          {/* Two pillars */}
          <rect x="22" y="60" width="12" height="195" rx="2" {...sDim} />
          <rect x="166" y="60" width="12" height="195" rx="2" {...sDim} />
          {/* Two kneeling followers */}
          <circle cx="42" cy="195" r="6" {...sDim} />
          <path d="M 42 201 L 42 220 L 38 235" {...sDim} />
          <circle cx="158" cy="195" r="6" {...sDim} />
          <path d="M 158 201 L 158 220 L 162 235" {...sDim} />
        </g>
      );

    // ── 6  THE LOVERS ────────────────────────────
    case 6:
      return (
        <g>
          {/* Angel above */}
          <circle cx="100" cy="42" r="10" {...s} />
          {/* Wings */}
          <path d="M 90 48 Q 60 30 40 45 Q 55 38 70 42" {...s} />
          <path d="M 110 48 Q 140 30 160 45 Q 145 38 130 42" {...s} />
          {/* Angel body */}
          <path d="M 100 52 L 100 80" {...s} />
          {/* Radiant light from angel */}
          {[0, 30, 60, 120, 150, 180].map(a => {
            const rad = ((a - 90) * Math.PI) / 180;
            return <line key={a} x1={100 + 14 * Math.cos(rad)} y1={42 + 14 * Math.sin(rad)} x2={100 + 22 * Math.cos(rad)} y2={42 + 22 * Math.sin(rad)} {...sDim} />;
          })}
          {/* Cloud */}
          <path d="M 55 80 Q 70 72 100 75 Q 130 72 145 80" {...sDim} />
          {/* Male figure (right) */}
          <circle cx="140" cy="120" r="10" {...s} />
          <path d="M 140 130 L 140 190" {...s} />
          <path d="M 140 145 L 155 160" {...s} />
          <path d="M 140 145 L 125 155" {...s} />
          <path d="M 140 190 L 130 230" {...s} />
          <path d="M 140 190 L 150 230" {...s} />
          {/* Female figure (left) */}
          <circle cx="60" cy="120" r="10" {...s} />
          <path d="M 60 130 L 60 190" {...s} />
          <path d="M 60 145 L 45 160" {...s} />
          <path d="M 60 145 L 75 155" {...s} />
          <path d="M 60 190 L 50 230" {...s} />
          <path d="M 60 190 L 70 230" {...s} />
          {/* Tree of Knowledge (behind female) */}
          <line x1="35" y1="100" x2="35" y2="240" {...sDim} />
          <path d="M 35 105 Q 20 90 25 80 Q 35 75 40 85 Q 50 75 48 88 Q 35 95 35 105" {...sDim} />
          <circle cx="30" cy="92" r="2" {...sFill} />
          {/* Tree of Life (behind male) */}
          <line x1="165" y1="100" x2="165" y2="240" {...sDim} />
          <path d="M 162 105 Q 155 95 158 85" {...sDim} />
          <path d="M 168 105 Q 175 95 172 85" {...sDim} />
          <path d="M 158 85 Q 165 75 172 85" {...sDim} />
          {/* Mountain between */}
          <path d="M 85 240 L 100 180 L 115 240" {...sDim} />
        </g>
      );

    // ── 7  THE CHARIOT ───────────────────────────
    case 7:
      return (
        <g>
          {/* Stars canopy */}
          <path d="M 40 40 L 40 25 L 160 25 L 160 40" {...s} />
          <path d="M 40 25 Q 100 15 160 25" {...sDim} />
          {[60, 80, 100, 120, 140].map(x => <circle key={x} cx={x} cy="20" r="2" {...sFill} />)}
          {/* Head with crown */}
          <circle cx="100" cy="55" r="12" {...s} />
          <path d="M 90 43 L 100 35 L 110 43" {...sFill} />
          {/* Body - armored */}
          <path d="M 100 67 L 100 120" {...s} />
          <rect x="84" y="72" width="32" height="35" rx="2" {...sDim} />
          {/* Winged symbol on armor */}
          <path d="M 95 88 Q 100 82 105 88" {...sDim} />
          {/* Arms holding scepter */}
          <path d="M 100 80 L 80 95" {...s} />
          <path d="M 100 80 L 120 95" {...s} />
          {/* Chariot body */}
          <rect x="45" y="120" width="110" height="60" rx="6" {...sFill} />
          <path d="M 45 120 L 45 180 Q 100 185 155 180 L 155 120" {...s} />
          {/* Winged disc on chariot */}
          <circle cx="100" cy="150" r="10" {...s} />
          <path d="M 90 148 Q 70 140 55 145" {...sDim} />
          <path d="M 110 148 Q 130 140 145 145" {...sDim} />
          {/* Two sphinxes */}
          {/* Left sphinx (dark) */}
          <ellipse cx="55" cy="210" rx="20" ry="12" {...s} />
          <circle cx="42" cy="200" r="7" {...s} />
          <path d="M 38 195 L 35 190" {...sDim} />
          {/* Right sphinx (light) */}
          <ellipse cx="145" cy="210" rx="20" ry="12" {...s} />
          <circle cx="158" cy="200" r="7" {...s} />
          <path d="M 162 195 L 165 190" {...sDim} />
          {/* Wheels */}
          <circle cx="50" cy="235" r="15" {...s} />
          <circle cx="50" cy="235" r="5" {...sDim} />
          <circle cx="150" cy="235" r="15" {...s} />
          <circle cx="150" cy="235" r="5" {...sDim} />
        </g>
      );

    // ── 8  STRENGTH ──────────────────────────────
    case 8:
      return (
        <g>
          {/* Infinity above head */}
          <path d="M 78 38 Q 90 26 102 38 Q 114 50 102 38" {...s} />
          <path d="M 78 38 Q 90 50 102 38" {...s} />
          {/* Female head with flower crown */}
          <circle cx="90" cy="60" r="13" {...s} />
          <circle cx="82" cy="48" r="3" {...sFill} />
          <circle cx="90" cy="45" r="3" {...sFill} />
          <circle cx="98" cy="48" r="3" {...sFill} />
          {/* Hair flowing */}
          <path d="M 77 58 Q 65 70 60 90 Q 58 110 62 130" {...sDim} />
          {/* Body - gentle pose */}
          <path d="M 90 73 L 88 140" {...s} />
          {/* Arms reaching to lion's mouth */}
          <path d="M 88 95 Q 100 85 115 90" {...s} />
          <path d="M 88 100 Q 105 105 120 95" {...s} />
          {/* White robe */}
          <path d="M 88 140 Q 75 180 65 230" {...s} />
          <path d="M 88 140 Q 100 180 105 230" {...s} />
          <path d="M 65 230 Q 85 235 105 230" {...s} />
          {/* Belt of flowers */}
          <path d="M 78 142 Q 88 145 98 142" {...sDim} />
          {/* Lion */}
          <circle cx="135" cy="100" r="15" {...s} />
          {/* Mane */}
          <path d="M 122 88 Q 115 80 120 72 Q 130 65 140 70 Q 150 65 155 75 Q 152 85 148 88" {...s} />
          {/* Lion body */}
          <ellipse cx="145" cy="140" rx="25" ry="18" {...s} />
          {/* Lion legs */}
          <path d="M 125 155 L 120 195 L 118 210" {...s} />
          <path d="M 135 158 L 132 195 L 130 210" {...s} />
          <path d="M 155 158 L 158 195 L 160 210" {...s} />
          <path d="M 165 155 L 170 195 L 172 210" {...s} />
          {/* Lion tail */}
          <path d="M 170 135 Q 180 120 175 110" {...sDim} />
          {/* Open mouth (being held gently) */}
          <path d="M 125 100 L 118 95" {...s} />
          <path d="M 125 105 L 118 110" {...s} />
          {/* Ground / flowers */}
          <path d="M 0 230 Q 50 225 100 230 Q 150 235 200 230" {...sDim} />
        </g>
      );

    // ── 9  THE HERMIT ────────────────────────────
    case 9:
      return (
        <g>
          {/* Mountain peak */}
          <path d="M 50 260 L 105 100 L 160 260" {...sDim} />
          <path d="M 70 260 L 105 140 L 140 260" {...sDim} />
          {/* Lantern */}
          <path d="M 130 55 L 125 45 L 145 45 L 140 55 Z" {...sFill} />
          <line x1="135" y1="45" x2="135" y2="38" {...s} />
          {/* Star inside lantern */}
          <polygon points="135,48 133,52 137,52" {...sFill} />
          {/* Light rays from lantern */}
          {[200, 220, 240, 260, 280, 300, 320, 340].map(a => {
            const rad = (a * Math.PI) / 180;
            return <line key={a} x1={135 + 8 * Math.cos(rad)} y1={50 + 8 * Math.sin(rad)} x2={135 + 16 * Math.cos(rad)} y2={50 + 16 * Math.sin(rad)} {...sDim} />;
          })}
          {/* Hooded head */}
          <path d="M 82 68 Q 100 50 118 68 Q 120 85 100 90 Q 80 85 82 68" {...s} />
          <circle cx="100" cy="78" r="8" {...sDim} />
          {/* Body cloaked */}
          <path d="M 85 85 L 100 90 L 115 85" {...s} />
          <path d="M 85 85 Q 75 130 65 200 Q 60 230 55 250" {...s} />
          <path d="M 115 85 Q 125 130 135 200 Q 140 230 145 250" {...s} />
          <path d="M 55 250 Q 100 255 145 250" {...s} />
          {/* Right arm holding lantern up */}
          <path d="M 110 100 Q 125 80 130 55" {...s} />
          {/* Staff in left hand */}
          <path d="M 90 100 L 75 110" {...s} />
          <line x1="75" y1="110" x2="70" y2="250" {...s} />
          {/* Snow/stars in sky */}
          <circle cx="30" cy="30" r="1.5" {...sFill} />
          <circle cx="170" cy="25" r="1.5" {...sFill} />
          <circle cx="55" cy="15" r="1" {...sFill} />
          <circle cx="160" cy="50" r="1" {...sFill} />
        </g>
      );

    // ── 10  WHEEL OF FORTUNE ─────────────────────
    case 10:
      return (
        <g>
          {/* Main wheel */}
          <circle cx="100" cy="130" r="65" {...s} />
          <circle cx="100" cy="130" r="45" {...s} />
          <circle cx="100" cy="130" r="15" {...sFill} />
          {/* Spokes */}
          {[0, 45, 90, 135].map(a => {
            const rad = (a * Math.PI) / 180;
            return <line key={a} x1={100 + 15 * Math.cos(rad)} y1={130 + 15 * Math.sin(rad)} x2={100 + 65 * Math.cos(rad)} y2={130 + 65 * Math.sin(rad)} {...sDim} />;
          })}
          {/* TARO letters on wheel */}
          <text x="96" y="88" fill="#D4AF37" fontSize="10" opacity="0.6">T</text>
          <text x="148" y="134" fill="#D4AF37" fontSize="10" opacity="0.6">A</text>
          <text x="96" y="180" fill="#D4AF37" fontSize="10" opacity="0.6">R</text>
          <text x="46" y="134" fill="#D4AF37" fontSize="10" opacity="0.6">O</text>
          {/* Alchemical symbols */}
          <text x="110" y="96" fill="#D4AF37" fontSize="8" opacity="0.4">☿</text>
          <text x="140" y="148" fill="#D4AF37" fontSize="8" opacity="0.4">♁</text>
          <text x="110" y="172" fill="#D4AF37" fontSize="8" opacity="0.4">♒</text>
          <text x="56" y="148" fill="#D4AF37" fontSize="8" opacity="0.4">♈</text>
          {/* Snake descending left */}
          <path d="M 50 95 Q 42 110 38 130 Q 35 150 40 165" {...s} />
          <path d="M 40 165 L 36 170" {...sDim} />
          {/* Anubis ascending right */}
          <circle cx="160" cy="112" r="7" {...s} />
          <path d="M 160 119 L 158 140" {...s} />
          <path d="M 164 108 L 170 102" {...sDim} />
          {/* Sphinx on top */}
          <ellipse cx="100" cy="62" rx="16" ry="8" {...s} />
          <circle cx="100" cy="50" r="7" {...s} />
          <path d="M 94 46 L 90 42" {...sDim} />
          <path d="M 106 46 L 110 42" {...sDim} />
          {/* Sword */}
          <line x1="100" y1="40" x2="100" y2="25" {...s} />
          <line x1="96" y1="35" x2="104" y2="35" {...s} />
          {/* 4 corner creatures */}
          <circle cx="25" cy="25" r="10" {...sDim} />
          <circle cx="175" cy="25" r="10" {...sDim} />
          <circle cx="25" cy="235" r="10" {...sDim} />
          <circle cx="175" cy="235" r="10" {...sDim} />
          {/* Clouds */}
          <path d="M 10 215 Q 25 210 35 215" {...sDim} />
          <path d="M 165 215 Q 175 210 190 215" {...sDim} />
        </g>
      );

    // ── 11  JUSTICE ──────────────────────────────
    case 11:
      return (
        <g>
          {/* Crown */}
          <path d="M 88 32 L 95 22 L 100 30 L 105 22 L 112 32" {...sFill} />
          {/* Head */}
          <circle cx="100" cy="48" r="13" {...s} />
          {/* Body */}
          <path d="M 100 61 L 100 140" {...s} />
          {/* Robe */}
          <path d="M 100 140 Q 75 180 60 240" {...s} />
          <path d="M 100 140 Q 125 180 140 240" {...s} />
          <path d="M 60 240 Q 100 248 140 240" {...s} />
          {/* Cape */}
          <path d="M 88 65 Q 60 80 50 120 Q 45 160 50 200" {...sDim} />
          <path d="M 112 65 Q 140 80 150 120 Q 155 160 150 200" {...sDim} />
          {/* Right hand - sword raised */}
          <path d="M 100 85 L 130 75" {...s} />
          <line x1="130" y1="75" x2="135" y2="20" {...s} />
          <line x1="128" y1="70" x2="142" y2="70" {...s} />
          {/* Left hand - scales */}
          <path d="M 100 85 L 65 80" {...s} />
          <line x1="65" y1="80" x2="65" y2="70" {...s} />
          <line x1="45" y1="70" x2="85" y2="70" {...s} />
          {/* Scale pans */}
          <path d="M 45 70 L 38 90 Q 45 95 52 90 Z" {...s} />
          <path d="M 85 70 L 78 90 Q 85 95 92 90 Z" {...s} />
          {/* Chains */}
          <line x1="45" y1="70" x2="45" y2="90" {...sDim} />
          <line x1="85" y1="70" x2="85" y2="90" {...sDim} />
          {/* Pillars */}
          <rect x="18" y="30" width="10" height="225" rx="2" {...sDim} />
          <rect x="172" y="30" width="10" height="225" rx="2" {...sDim} />
          {/* Veil */}
          <path d="M 28 30 Q 100 22 172 30" {...sDim} />
        </g>
      );

    // ── 12  THE HANGED MAN ───────────────────────
    case 12:
      return (
        <g>
          {/* T-shaped gallows/tree */}
          <line x1="40" y1="25" x2="160" y2="25" {...s} />
          <line x1="40" y1="25" x2="40" y2="260" {...s} />
          <line x1="160" y1="25" x2="160" y2="260" {...s} />
          {/* Leaves on tree */}
          <circle cx="35" cy="50" r="4" {...sDim} />
          <circle cx="30" cy="70" r="3" {...sDim} />
          <circle cx="165" cy="45" r="4" {...sDim} />
          <circle cx="170" cy="65" r="3" {...sDim} />
          {/* Rope */}
          <line x1="100" y1="25" x2="100" y2="55" {...s} />
          {/* Right foot tied (hangs by one foot) */}
          <path d="M 100 55 L 100 70" {...s} />
          {/* Left leg crossed behind right */}
          <path d="M 100 70 L 85 85 Q 80 90 88 95" {...s} />
          {/* Body (upside down) */}
          <path d="M 100 70 L 100 145" {...s} />
          {/* Arms relaxed, forming triangle */}
          <path d="M 100 110 L 70 135 L 65 140" {...s} />
          <path d="M 100 110 L 130 135 L 135 140" {...s} />
          {/* Head at bottom with halo */}
          <circle cx="100" cy="165" r="14" {...s} />
          <circle cx="100" cy="165" r="22" {...sDim} />
          {/* Serene expression */}
          <path d="M 95 168 Q 100 172 105 168" {...sDim} />
          {/* Hair hanging down */}
          <path d="M 90 175 Q 85 190 88 200" {...sDim} />
          <path d="M 110 175 Q 115 190 112 200" {...sDim} />
          <path d="M 100 179 Q 100 195 100 205" {...sDim} />
        </g>
      );

    // ── 13  DEATH ────────────────────────────────
    case 13:
      return (
        <g>
          {/* Black banner with rose */}
          <line x1="130" y1="25" x2="130" y2="85" {...s} />
          <rect x="130" y="25" width="40" height="30" rx="1" {...sFill} />
          <circle cx="150" cy="40" r="6" {...s} />
          <circle cx="150" cy="40" r="3" {...sDim} />
          {/* Skeleton head (on horse) */}
          <circle cx="105" cy="55" r="12" {...s} />
          <circle cx="100" cy="52" r="2.5" {...sDim} />
          <circle cx="110" cy="52" r="2.5" {...sDim} />
          <path d="M 99 60 L 105 58 L 111 60" {...sDim} />
          {/* Helmet/crown */}
          <path d="M 93 48 L 100 38 L 117 48" {...sDim} />
          {/* Skeleton body - armored */}
          <path d="M 105 67 L 100 95" {...s} />
          <path d="M 92 72 L 112 72" {...sDim} />
          {/* Arms */}
          <path d="M 100 80 L 128 75" {...s} />
          <path d="M 100 80 L 78 88" {...s} />
          {/* Horse */}
          <ellipse cx="95" cy="130" rx="40" ry="25" {...s} />
          {/* Horse head */}
          <path d="M 55 120 Q 40 100 35 85 Q 32 75 38 70" {...s} />
          <circle cx="40" cy="78" r="3" {...sDim} />
          {/* Horse ears */}
          <path d="M 36 68 L 33 60" {...sDim} />
          <path d="M 42 68 L 44 60" {...sDim} />
          {/* Horse legs */}
          <path d="M 65 152 L 55 210 L 50 230" {...s} />
          <path d="M 80 155 L 72 210 L 68 230" {...s} />
          <path d="M 110 155 L 118 210 L 122 230" {...s} />
          <path d="M 125 152 L 135 210 L 140 230" {...s} />
          {/* Fallen figures */}
          <path d="M 15 220 Q 20 210 25 220" {...sDim} />
          <circle cx="20" cy="205" r="5" {...sDim} />
          {/* Rising sun */}
          <path d="M 155 250 Q 170 230 185 250" {...sDim} />
          {[0, 20, 40, 60, 80, 100].map(a => {
            const rad = ((a - 50) * Math.PI) / 180;
            return <line key={a} x1={170 + 10 * Math.cos(rad)} y1={250 + 10 * Math.sin(rad)} x2={170 + 18 * Math.cos(rad)} y2={250 + 18 * Math.sin(rad)} {...sDim} />;
          })}
        </g>
      );

    // ── 14  TEMPERANCE ───────────────────────────
    case 14:
      return (
        <g>
          {/* Angel head */}
          <circle cx="100" cy="48" r="13" {...s} />
          {/* Sun symbol on forehead */}
          <circle cx="100" cy="42" r="3" {...sFill} />
          {/* Wings */}
          <path d="M 85 65 Q 50 40 25 55 Q 40 45 55 50 Q 60 55 70 58" {...s} />
          <path d="M 115 65 Q 150 40 175 55 Q 160 45 145 50 Q 140 55 130 58" {...s} />
          {/* Body */}
          <path d="M 100 61 L 100 150" {...s} />
          {/* Robe */}
          <path d="M 100 150 Q 75 190 60 240" {...s} />
          <path d="M 100 150 Q 125 190 140 240" {...s} />
          <path d="M 60 240 Q 100 248 140 240" {...s} />
          {/* Triangle on chest */}
          <polygon points="100,80 92,95 108,95" {...sDim} />
          {/* Right arm - cup pouring */}
          <path d="M 100 90 L 135 100" {...s} />
          <path d="M 130 95 L 128 88 L 140 88 L 138 95 Z" {...sFill} />
          {/* Left arm - cup receiving */}
          <path d="M 100 95 L 65 120" {...s} />
          <path d="M 60 115 L 58 108 L 70 108 L 68 115 Z" {...sFill} />
          {/* Water flowing between cups */}
          <path d="M 132 95 Q 110 110 65 115" {...s} strokeDasharray="4 3" />
          {/* One foot on land, one in water */}
          <path d="M 80 235 L 70 240 Q 60 260 50 260" {...sDim} />
          {/* Path to mountains */}
          <path d="M 100 240 Q 120 230 140 220 Q 160 210 170 190" {...sDim} />
          {/* Mountains */}
          <path d="M 155 190 L 170 150 L 185 190" {...sDim} />
          {/* Sun/crown between peaks */}
          <circle cx="170" cy="140" r="8" {...sDim} />
          {/* Irises at feet */}
          <path d="M 55 230 Q 50 220 55 215" {...sDim} />
          <path d="M 60 232 Q 55 222 60 217" {...sDim} />
        </g>
      );

    // ── 15  THE DEVIL ────────────────────────────
    case 15:
      return (
        <g>
          {/* Inverted pentagram */}
          <circle cx="100" cy="28" r="14" {...sDim} />
          <polygon points="100,42 91,22 107,32 93,32 109,22" {...s} />
          {/* Devil horns */}
          <path d="M 82 52 L 75 35" {...s} />
          <path d="M 118 52 L 125 35" {...s} />
          {/* Head */}
          <circle cx="100" cy="62" r="14" {...s} />
          {/* Goat face */}
          <circle cx="94" cy="58" r="2" {...sFill} />
          <circle cx="106" cy="58" r="2" {...sFill} />
          <path d="M 96 66 Q 100 70 104 66" {...sDim} />
          {/* Bat wings */}
          <path d="M 85 80 Q 55 60 30 75 Q 40 65 50 70 L 55 60 Q 60 65 65 75" {...s} />
          <path d="M 115 80 Q 145 60 170 75 Q 160 65 150 70 L 145 60 Q 140 65 135 75" {...s} />
          {/* Body - seated */}
          <path d="M 100 76 L 100 130" {...s} />
          {/* Arms raised */}
          <path d="M 100 95 L 70 80" {...s} />
          <path d="M 100 95 L 130 80" {...s} />
          {/* Torch in right hand (inverted) */}
          <line x1="130" y1="80" x2="140" y2="95" {...s} />
          <path d="M 138 95 Q 140 105 142 95" {...sDim} />
          {/* Pedestal */}
          <rect x="65" y="130" width="70" height="25" rx="3" {...sFill} />
          {/* Two chained figures */}
          {/* Left figure */}
          <circle cx="55" cy="175" r="8" {...s} />
          <path d="M 55 183 L 55 215" {...s} />
          <path d="M 55 215 L 48 240" {...s} />
          <path d="M 55 215 L 62 240" {...s} />
          {/* Horns on left */}
          <path d="M 50 169 L 47 163" {...sDim} />
          <path d="M 60 169 L 63 163" {...sDim} />
          {/* Tail */}
          <path d="M 55 210 Q 45 220 42 215" {...sDim} />
          {/* Right figure */}
          <circle cx="145" cy="175" r="8" {...s} />
          <path d="M 145 183 L 145 215" {...s} />
          <path d="M 145 215 L 138 240" {...s} />
          <path d="M 145 215 L 152 240" {...s} />
          {/* Horns on right */}
          <path d="M 140 169 L 137 163" {...sDim} />
          <path d="M 150 169 L 153 163" {...sDim} />
          {/* Chains */}
          <path d="M 65 155 Q 58 165 55 170" {...s} strokeDasharray="3 2" />
          <path d="M 135 155 Q 142 165 145 170" {...s} strokeDasharray="3 2" />
        </g>
      );

    // ── 16  THE TOWER ────────────────────────────
    case 16:
      return (
        <g>
          {/* Tower */}
          <path d="M 70 260 L 75 80 L 125 80 L 130 260" {...s} />
          <rect x="75" y="80" width="50" height="180" rx="0" {...sFill} />
          {/* Crown/battlement blown off */}
          <path d="M 72 80 L 72 65 L 80 65 L 80 72 L 90 72 L 90 65 L 100 65 L 100 72 L 110 72 L 110 65 L 120 65 L 120 72 L 128 72 L 128 80" {...s} />
          {/* Crown displaced */}
          <path d="M 120 55 Q 140 40 155 50 L 145 45 L 150 55" {...sDim} />
          {/* Lightning bolt from sky */}
          <path d="M 140 15 L 115 45 L 125 45 L 100 75" {...s} strokeWidth={1.8} />
          {/* Window/door */}
          <path d="M 90 120 Q 100 112 110 120 L 110 140 L 90 140 Z" {...sDim} />
          <path d="M 90 170 Q 100 162 110 170 L 110 190 L 90 190 Z" {...sDim} />
          {/* Bricks */}
          {[95, 110, 125, 145, 160, 200, 215, 230].map(y => (
            <line key={y} x1="75" y1={y} x2="125" y2={y} {...sDim} />
          ))}
          {/* Falling figure left */}
          <circle cx="45" cy="130" r="6" {...s} />
          <path d="M 45 136 L 42 155" {...s} />
          <path d="M 42 142 L 35 138" {...s} />
          <path d="M 42 142 L 50 140" {...s} />
          <path d="M 42 155 L 35 170" {...s} />
          <path d="M 42 155 L 48 168" {...s} />
          {/* Falling figure right */}
          <circle cx="155" cy="150" r="6" {...s} />
          <path d="M 155 156 L 158 175" {...s} />
          <path d="M 158 162 L 165 158" {...s} />
          <path d="M 158 162 L 150 160" {...s} />
          <path d="M 158 175 L 165 190" {...s} />
          <path d="M 158 175 L 152 188" {...s} />
          {/* Debris / sparks */}
          {[
            [55, 95], [40, 110], [35, 80], [160, 100], [170, 85], [150, 75],
            [60, 60], [130, 55], [45, 150], [165, 130]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.5" {...sFill} />
          ))}
          {/* Rocky base */}
          <path d="M 50 260 Q 60 250 70 260" {...sDim} />
          <path d="M 130 260 Q 140 250 150 260" {...sDim} />
        </g>
      );

    // ── 17  THE STAR ─────────────────────────────
    case 17:
      return (
        <g>
          {/* Large central star (8-pointed) */}
          <polygon points="100,15 105,35 125,25 110,40 130,45 110,50 120,68 105,55 100,75 95,55 80,68 90,50 70,45 90,40 75,25 95,35" {...sFill} />
          {/* 7 smaller stars */}
          {[[50, 25], [150, 30], [35, 55], [165, 55], [45, 80], [155, 80], [100, 95]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" {...sFill} />
          ))}
          {/* Kneeling figure */}
          <circle cx="95" cy="118" r="11" {...s} />
          {/* Hair flowing */}
          <path d="M 84 115 Q 72 120 68 135 Q 66 150 70 165" {...sDim} />
          {/* Body kneeling */}
          <path d="M 95 129 L 92 165" {...s} />
          {/* Kneeling leg */}
          <path d="M 92 165 Q 80 180 75 190 Q 70 200 85 200" {...s} />
          <path d="M 92 165 Q 105 180 110 195 L 115 200" {...s} />
          {/* Right arm pouring into water */}
          <path d="M 92 140 L 120 155" {...s} />
          {/* Left arm pouring onto land */}
          <path d="M 92 145 L 65 165" {...s} />
          {/* Pitcher in each hand */}
          <path d="M 118 150 L 125 158" {...sFill} />
          <path d="M 63 160 L 58 170" {...sFill} />
          {/* Water stream pouring */}
          <path d="M 125 158 Q 130 175 135 195 Q 140 210 145 230" {...s} strokeDasharray="4 3" />
          <path d="M 58 170 Q 50 185 48 200 Q 45 215 50 230" {...s} strokeDasharray="4 3" />
          {/* Five streams branch out */}
          <path d="M 50 220 Q 40 225 35 235" {...sDim} />
          <path d="M 50 220 Q 55 225 60 235" {...sDim} />
          {/* Pool of water */}
          <path d="M 100 230 Q 140 225 180 235 Q 200 240 200 250" {...sDim} />
          {/* Land */}
          <path d="M 0 230 Q 40 225 80 230" {...sDim} />
          {/* Bird on tree */}
          <line x1="170" y1="180" x2="170" y2="240" {...sDim} />
          <path d="M 165 185 Q 170 175 175 185" {...sDim} />
          <circle cx="172" cy="178" r="3" {...sDim} />
        </g>
      );

    // ── 18  THE MOON ─────────────────────────────
    case 18:
      return (
        <g>
          {/* Moon with face */}
          <circle cx="100" cy="45" r="24" {...s} />
          <circle cx="100" cy="45" r="18" {...sDim} />
          {/* Moon face profile */}
          <circle cx="95" cy="40" r="2" {...sFill} />
          <path d="M 93 48 Q 97 50 100 48" {...sDim} />
          {/* Rays */}
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * 22.5 * Math.PI) / 180;
            const inner = i % 2 === 0 ? 28 : 26;
            const outer = i % 2 === 0 ? 36 : 32;
            return <line key={i} x1={100 + inner * Math.cos(a)} y1={45 + inner * Math.sin(a)} x2={100 + outer * Math.cos(a)} y2={45 + outer * Math.sin(a)} {...sDim} />;
          })}
          {/* Drops falling from moon */}
          {[[85, 75], [100, 78], [115, 75]].map(([x, y], i) => (
            <path key={i} d={`M ${x} ${y} Q ${x + 2} ${y + 5} ${x} ${y + 8}`} {...sDim} />
          ))}
          {/* Path winding to horizon */}
          <path d="M 90 260 Q 80 240 85 220 Q 95 200 100 185 Q 105 170 100 155 Q 95 140 100 125" {...s} />
          {/* Two towers */}
          <rect x="25" y="130" width="25" height="80" rx="2" {...sFill} />
          <path d="M 25 130 L 30 120 L 37 130 L 44 120 L 50 130" {...sDim} />
          <rect x="150" y="130" width="25" height="80" rx="2" {...sFill} />
          <path d="M 150 130 L 155 120 L 162 130 L 169 120 L 175 130" {...sDim} />
          {/* Dog (left) */}
          <ellipse cx="55" cy="215" rx="14" ry="8" {...s} />
          <circle cx="45" cy="208" r="6" {...s} />
          <path d="M 41 204 L 38 198" {...sDim} />
          <path d="M 47 204 L 49 198" {...sDim} />
          {/* Wolf (right) */}
          <ellipse cx="145" cy="215" rx="14" ry="8" {...s} />
          <circle cx="155" cy="208" r="6" {...s} />
          <path d="M 152 203 L 150 196" {...sDim} />
          <path d="M 158 203 L 161 196" {...sDim} />
          {/* Both howling up */}
          <path d="M 45 202 L 42 195" {...sDim} />
          <path d="M 155 202 L 158 195" {...sDim} />
          {/* Crayfish from pool */}
          <ellipse cx="100" cy="245" rx="12" ry="8" {...s} />
          <path d="M 92 240 L 85 235" {...s} />
          <path d="M 108 240 L 115 235" {...s} />
          {/* Water */}
          <path d="M 0 250 Q 50 240 100 245 Q 150 250 200 245" {...sDim} />
        </g>
      );

    // ── 19  THE SUN ──────────────────────────────
    case 19:
      return (
        <g>
          {/* Large sun with face */}
          <circle cx="100" cy="50" r="28" {...s} />
          {/* Sun face */}
          <circle cx="92" cy="45" r="3" {...sFill} />
          <circle cx="108" cy="45" r="3" {...sFill} />
          <path d="M 92 56 Q 100 62 108 56" {...s} />
          {/* Straight and wavy rays alternating */}
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * 22.5 * Math.PI) / 180;
            const r1 = 32, r2 = 48;
            return <line key={i} x1={100 + r1 * Math.cos(a)} y1={50 + r1 * Math.sin(a)} x2={100 + r2 * Math.cos(a)} y2={50 + r2 * Math.sin(a)} {...(i % 2 === 0 ? s : sDim)} />;
          })}
          {/* Child on horse */}
          <circle cx="95" cy="128" r="10" {...s} />
          {/* Wreath on child's head */}
          <path d="M 85 124 Q 95 118 105 124" {...sDim} />
          {/* Child body */}
          <path d="M 95 138 L 93 165" {...s} />
          {/* Arms spread joyfully */}
          <path d="M 93 148 L 75 138" {...s} />
          <path d="M 93 148 L 115 140" {...s} />
          {/* Red banner in hand */}
          <path d="M 115 140 L 118 125 L 135 130 L 118 135" {...sDim} />
          {/* Horse */}
          <ellipse cx="90" cy="185" rx="30" ry="18" {...s} />
          {/* Horse head */}
          <path d="M 60 178 Q 48 160 42 148 Q 40 140 46 135" {...s} />
          <circle cx="46" cy="142" r="3" {...sDim} />
          {/* Horse mane */}
          <path d="M 50 150 Q 55 145 52 140" {...sDim} />
          <path d="M 55 155 Q 60 150 57 145" {...sDim} />
          {/* Horse legs */}
          <path d="M 68 200 L 60 235" {...s} />
          <path d="M 78 202 L 72 235" {...s} />
          <path d="M 102 202 L 108 235" {...s} />
          <path d="M 112 200 L 120 235" {...s} />
          {/* Horse tail */}
          <path d="M 120 180 Q 135 175 140 185" {...sDim} />
          {/* Wall with sunflowers */}
          <path d="M 0 240 L 200 240" {...sDim} />
          {/* Sunflowers */}
          {[25, 55, 145, 175].map(x => (
            <g key={x}>
              <line x1={x} y1="240" x2={x} y2="220" {...sDim} />
              <circle cx={x} cy="216" r="5" {...sDim} />
              <circle cx={x} cy="216" r="2.5" {...sFill} />
            </g>
          ))}
        </g>
      );

    // ── 20  JUDGEMENT ─────────────────────────────
    case 20:
      return (
        <g>
          {/* Angel in clouds */}
          <circle cx="100" cy="38" r="10" {...s} />
          {/* Wings */}
          <path d="M 90 45 Q 60 28 35 40 Q 50 32 65 38" {...s} />
          <path d="M 110 45 Q 140 28 165 40 Q 150 32 135 38" {...s} />
          {/* Body (half visible) */}
          <path d="M 100 48 L 100 75" {...s} />
          {/* Arms spread holding trumpet */}
          <path d="M 100 55 L 75 60" {...s} />
          <path d="M 100 55 L 125 60" {...s} />
          {/* Trumpet */}
          <path d="M 100 60 L 100 85" {...s} />
          <path d="M 95 85 L 100 80 L 105 85 Q 100 90 95 85" {...sFill} />
          {/* Cross on banner */}
          <rect x="85" y="58" width="30" height="15" rx="1" {...sDim} />
          <line x1="100" y1="58" x2="100" y2="73" {...sDim} />
          <line x1="85" y1="66" x2="115" y2="66" {...sDim} />
          {/* Clouds */}
          <path d="M 20 80 Q 40 72 60 78 Q 80 72 100 78 Q 120 72 140 78 Q 160 72 180 80" {...sDim} />
          {/* Sound waves from trumpet */}
          <path d="M 92 90 Q 85 95 80 90" {...sDim} />
          <path d="M 108 90 Q 115 95 120 90" {...sDim} />
          {/* Rising figures from coffins */}
          {/* Center figure */}
          <circle cx="100" cy="150" r="8" {...s} />
          <path d="M 100 158 L 100 190" {...s} />
          <path d="M 100 165 L 88 155" {...s} />
          <path d="M 100 165 L 112 155" {...s} />
          {/* Coffin */}
          <rect x="88" y="190" width="24" height="55" rx="2" {...sFill} />
          {/* Left figure */}
          <circle cx="45" cy="160" r="7" {...s} />
          <path d="M 45 167 L 45 195" {...s} />
          <path d="M 45 175 L 55 165" {...s} />
          <rect x="35" y="195" width="20" height="50" rx="2" {...sFill} />
          {/* Right figure */}
          <circle cx="155" cy="160" r="7" {...s} />
          <path d="M 155 167 L 155 195" {...s} />
          <path d="M 155 175 L 145 165" {...s} />
          <rect x="145" y="195" width="20" height="50" rx="2" {...sFill} />
          {/* Sea / Mountains */}
          <path d="M 0 240 Q 50 235 100 240 Q 150 245 200 240" {...sDim} />
          <path d="M 160 240 L 175 220 L 190 240" {...sDim} />
        </g>
      );

    // ── 21  THE WORLD ────────────────────────────
    case 21:
      return (
        <g>
          {/* Laurel wreath (oval) */}
          <ellipse cx="100" cy="130" rx="60" ry="80" {...s} />
          {/* Wreath details (leaf pattern) */}
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * 15 * Math.PI) / 180;
            const x = 100 + 58 * Math.cos(a);
            const y = 130 + 78 * Math.sin(a);
            return <circle key={i} cx={x} cy={y} r="2" {...sDim} />;
          })}
          {/* Ribbons at top and bottom */}
          <path d="M 85 52 Q 78 48 72 52" {...sFill} />
          <path d="M 115 52 Q 122 48 128 52" {...sFill} />
          <path d="M 85 208 Q 78 212 72 208" {...sFill} />
          <path d="M 115 208 Q 122 212 128 208" {...sFill} />
          {/* Dancing figure */}
          <circle cx="100" cy="85" r="10" {...s} />
          {/* Flowing hair */}
          <path d="M 92 80 Q 82 75 78 82" {...sDim} />
          <path d="M 108 80 Q 118 75 122 82" {...sDim} />
          {/* Body - dancing pose */}
          <path d="M 100 95 L 98 145" {...s} />
          {/* Right arm raised */}
          <path d="M 98 110 L 120 95" {...s} />
          {/* Wand in right hand */}
          <line x1="120" y1="95" x2="128" y2="82" {...s} />
          {/* Left arm down */}
          <path d="M 98 115 L 78 125" {...s} />
          {/* Wand in left hand */}
          <line x1="78" y1="125" x2="72" y2="138" {...s} />
          {/* Flowing sash */}
          <path d="M 90 100 Q 75 110 80 130 Q 85 150 95 160 Q 105 150 115 145 Q 125 130 120 110 Q 110 100 100 95" {...sDim} />
          {/* Right leg crossed */}
          <path d="M 98 145 L 110 175 Q 115 185 108 190" {...s} />
          {/* Left leg straight */}
          <path d="M 98 145 L 88 180 L 85 195" {...s} />
          {/* 4 corners - fixed creatures */}
          {/* Eagle (top-right) */}
          <circle cx="170" cy="30" r="12" {...sDim} />
          <path d="M 165 25 Q 170 18 175 25" {...sDim} />
          {/* Lion (bottom-right) */}
          <circle cx="170" cy="230" r="12" {...sDim} />
          <path d="M 162 222 Q 158 215 165 212 Q 170 212 175 215 Q 180 218 178 222" {...sDim} />
          {/* Angel (top-left) */}
          <circle cx="30" cy="30" r="12" {...sDim} />
          <path d="M 22 38 Q 18 30 22 25" {...sDim} />
          <path d="M 38 38 Q 42 30 38 25" {...sDim} />
          {/* Bull (bottom-left) */}
          <circle cx="30" cy="230" r="12" {...sDim} />
          <path d="M 22 222 L 18 216" {...sDim} />
          <path d="M 38 222 L 42 216" {...sDim} />
        </g>
      );

    default:
      return (
        <g>
          <circle cx="100" cy="130" r="40" {...s} />
          <text x="85" y="140" fill="#D4AF37" fontSize="24">?</text>
        </g>
      );
  }
}

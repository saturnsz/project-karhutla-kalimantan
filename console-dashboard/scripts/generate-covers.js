/* ═══════════════════════════════════════════════════════════════
   SVG COVER ART GENERATOR
   Generates high-quality game cover SVGs for tiles
   ═══════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');

const coversDir = path.join(__dirname, '..', 'assets', 'covers');

// Ensure directory exists
fs.mkdirSync(coversDir, { recursive: true });

const covers = [
  {
    name: 'shadow_realm',
    title: 'SR',
    bg: ['#1a0a2e', '#3b1d6e', '#6d28d9'],
    accent: '#a78bfa',
    icon: `<circle cx="128" cy="90" r="35" fill="none" stroke="#a78bfa" stroke-width="2" opacity="0.7"/>
           <path d="M128 55 L128 30" stroke="#a78bfa" stroke-width="1.5" opacity="0.5"/>
           <path d="M128 125 L128 180 L108 210 M128 180 L148 210" stroke="#c4b5fd" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
           <path d="M100 150 Q80 130 90 110" stroke="#a78bfa" stroke-width="2" fill="none" opacity="0.6"/>
           <path d="M156 150 Q176 130 166 110" stroke="#a78bfa" stroke-width="2" fill="none" opacity="0.6"/>
           <circle cx="60" cy="60" r="2" fill="#a78bfa" opacity="0.4"/>
           <circle cx="190" cy="80" r="1.5" fill="#c4b5fd" opacity="0.3"/>
           <circle cx="80" cy="200" r="1" fill="#a78bfa" opacity="0.5"/>
           <circle cx="170" cy="190" r="2" fill="#7c3aed" opacity="0.4"/>`,
  },
  {
    name: 'neon_circuit',
    title: 'NC',
    bg: ['#0a0520', '#0e3b5e', '#06b6d4'],
    accent: '#22d3ee',
    icon: `<rect x="85" y="100" width="86" height="40" rx="6" fill="none" stroke="#22d3ee" stroke-width="2" opacity="0.8"/>
           <circle cx="102" cy="140" r="12" fill="none" stroke="#22d3ee" stroke-width="2" opacity="0.7"/>
           <circle cx="154" cy="140" r="12" fill="none" stroke="#22d3ee" stroke-width="2" opacity="0.7"/>
           <path d="M85 110 L60 90" stroke="#06b6d4" stroke-width="1.5" opacity="0.5"/>
           <path d="M171 110 L196 90" stroke="#06b6d4" stroke-width="1.5" opacity="0.5"/>
           <line x1="40" y1="160" x2="216" y2="160" stroke="#0e7490" stroke-width="1" opacity="0.3"/>
           <line x1="30" y1="170" x2="226" y2="170" stroke="#0e7490" stroke-width="0.5" opacity="0.2"/>
           <path d="M70 160 L50 180 L30 180" stroke="#22d3ee" stroke-width="1" opacity="0.3"/>
           <path d="M186 160 L206 180 L226 180" stroke="#22d3ee" stroke-width="1" opacity="0.3"/>`,
  },
  {
    name: 'celestial_drift',
    title: 'CD',
    bg: ['#020617', '#0a2a4a', '#1e40af'],
    accent: '#60a5fa',
    icon: `<circle cx="128" cy="110" r="45" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity="0.4"/>
           <circle cx="128" cy="110" r="30" fill="none" stroke="#60a5fa" stroke-width="1" opacity="0.6"/>
           <ellipse cx="128" cy="110" rx="55" ry="12" fill="none" stroke="#60a5fa" stroke-width="1" opacity="0.3" transform="rotate(-20 128 110)"/>
           <circle cx="90" cy="60" r="3" fill="#fbbf24" opacity="0.7"/>
           <circle cx="180" cy="70" r="2" fill="#60a5fa" opacity="0.5"/>
           <circle cx="70" cy="150" r="1.5" fill="#93c5fd" opacity="0.4"/>
           <circle cx="200" cy="140" r="1" fill="#60a5fa" opacity="0.6"/>
           <circle cx="128" cy="110" r="8" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1" opacity="0.8"/>
           <circle cx="150" cy="50" r="1" fill="white" opacity="0.3"/>
           <circle cx="60" cy="90" r="0.8" fill="white" opacity="0.2"/>`,
  },
  {
    name: 'iron_vanguard',
    title: 'IV',
    bg: ['#1a0800', '#4a2000', '#b45309'],
    accent: '#f59e0b',
    icon: `<rect x="108" y="70" width="40" height="55" rx="4" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0.7"/>
           <rect x="115" y="80" width="26" height="15" rx="2" fill="#f59e0b" opacity="0.3"/>
           <rect x="98" y="85" width="10" height="30" rx="2" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.6"/>
           <rect x="148" y="85" width="10" height="30" rx="2" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.6"/>
           <rect x="112" y="125" width="14" height="35" rx="2" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.6"/>
           <rect x="130" y="125" width="14" height="35" rx="2" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.6"/>
           <circle cx="128" cy="87" r="4" fill="#f59e0b" opacity="0.5"/>
           <line x1="80" y1="170" x2="176" y2="170" stroke="#92400e" stroke-width="1" opacity="0.3"/>`,
  },
  {
    name: 'whisper_wild',
    title: 'WW',
    bg: ['#052e16', '#0a3a1a', '#15803d'],
    accent: '#22c55e',
    icon: `<path d="M128 180 L128 100" stroke="#166534" stroke-width="3" opacity="0.6"/>
           <path d="M128 100 Q110 80 100 60 Q95 45 110 50 Q120 55 128 70 Q136 55 146 50 Q161 45 156 60 Q146 80 128 100Z" fill="#22c55e" opacity="0.4" stroke="#22c55e" stroke-width="1"/>
           <path d="M128 130 Q145 120 160 125 Q170 130 165 140 Q155 145 128 135Z" fill="#16a34a" opacity="0.3"/>
           <path d="M128 130 Q111 120 96 125 Q86 130 91 140 Q101 145 128 135Z" fill="#16a34a" opacity="0.3"/>
           <circle cx="80" cy="50" r="1.5" fill="#4ade80" opacity="0.4"/>
           <circle cx="190" cy="70" r="1" fill="#22c55e" opacity="0.3"/>
           <path d="M60 190 Q90 175 128 180 Q166 175 196 190" stroke="#166534" stroke-width="1.5" fill="none" opacity="0.3"/>`,
  },
  {
    name: 'crimson_depths',
    title: 'CR',
    bg: ['#1a0510', '#3a0a1a', '#dc2626'],
    accent: '#ef4444',
    icon: `<ellipse cx="128" cy="120" rx="50" ry="35" fill="none" stroke="#ef4444" stroke-width="1.5" opacity="0.4"/>
           <path d="M90 100 Q100 80 128 75 Q156 80 166 100" stroke="#f87171" stroke-width="2" fill="none" opacity="0.5"/>
           <circle cx="110" cy="110" r="5" fill="#ef4444" opacity="0.5"/>
           <circle cx="146" cy="110" r="5" fill="#ef4444" opacity="0.5"/>
           <path d="M108 130 Q128 145 148 130" stroke="#ef4444" stroke-width="1.5" fill="none" opacity="0.4"/>
           <path d="M70 140 Q60 160 65 180" stroke="#dc2626" stroke-width="1" opacity="0.3"/>
           <path d="M186 140 Q196 160 191 180" stroke="#dc2626" stroke-width="1" opacity="0.3"/>
           <circle cx="75" cy="70" r="2" fill="#f87171" opacity="0.2"/>
           <circle cx="185" cy="160" r="1.5" fill="#fca5a5" opacity="0.2"/>
           <path d="M50 190 Q90 200 128 195 Q166 200 206 190" stroke="#7f1d1d" stroke-width="1" fill="none" opacity="0.3"/>`,
  },
  {
    name: 'starfall_legacy',
    title: 'SL',
    bg: ['#020420', '#0a1a3a', '#4338ca'],
    accent: '#818cf8',
    icon: `<polygon points="128,50 135,80 165,80 140,100 150,130 128,112 106,130 116,100 91,80 121,80" fill="none" stroke="#818cf8" stroke-width="2" opacity="0.7"/>
           <circle cx="128" cy="90" r="12" fill="#4338ca" opacity="0.5" stroke="#818cf8" stroke-width="1"/>
           <path d="M128 130 L128 175" stroke="#818cf8" stroke-width="1.5" opacity="0.4"/>
           <path d="M110 175 L146 175" stroke="#818cf8" stroke-width="1" opacity="0.3"/>
           <circle cx="80" cy="60" r="1" fill="#c7d2fe" opacity="0.4"/>
           <circle cx="175" cy="55" r="1.5" fill="#818cf8" opacity="0.3"/>
           <circle cx="65" cy="130" r="0.8" fill="white" opacity="0.2"/>
           <circle cx="195" cy="120" r="1" fill="#a5b4fc" opacity="0.3"/>
           <path d="M60 45 L65 55 L55 55Z" fill="#818cf8" opacity="0.2"/>
           <path d="M190 150 L193 156 L187 156Z" fill="#818cf8" opacity="0.15"/>`,
  },
  {
    name: 'phantom_edge',
    title: 'PE',
    bg: ['#0a0a15', '#1a1a2e', '#475569'],
    accent: '#94a3b8',
    icon: `<path d="M128 60 L128 80" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
           <circle cx="128" cy="90" r="15" fill="none" stroke="#94a3b8" stroke-width="1.5" opacity="0.5"/>
           <path d="M128 105 L128 150" stroke="#94a3b8" stroke-width="2.5" opacity="0.5"/>
           <path d="M128 115 L105 135" stroke="#94a3b8" stroke-width="2" opacity="0.4"/>
           <path d="M128 115 L151 135" stroke="#94a3b8" stroke-width="2" opacity="0.4"/>
           <path d="M128 150 L115 185" stroke="#94a3b8" stroke-width="2" opacity="0.4"/>
           <path d="M128 150 L141 185" stroke="#94a3b8" stroke-width="2" opacity="0.4"/>
           <path d="M155 75 Q180 85 185 100" stroke="#64748b" stroke-width="1" fill="none" opacity="0.3"/>
           <path d="M101 75 Q76 85 71 100" stroke="#64748b" stroke-width="1" fill="none" opacity="0.3"/>
           <rect x="50" y="180" width="156" height="2" rx="1" fill="#334155" opacity="0.3"/>
           <circle cx="85" cy="60" r="1" fill="#94a3b8" opacity="0.3"/>
           <circle cx="170" cy="65" r="0.8" fill="#cbd5e1" opacity="0.2"/>`,
  },
];

covers.forEach(cover => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="512" height="512">
  <defs>
    <radialGradient id="bg" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="${cover.bg[2]}" stop-opacity="0.4"/>
      <stop offset="50%" stop-color="${cover.bg[1]}"/>
      <stop offset="100%" stop-color="${cover.bg[0]}"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="40%">
      <stop offset="0%" stop-color="${cover.accent}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${cover.accent}" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur">
      <feGaussianBlur stdDeviation="1"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="256" height="256" fill="url(#bg)"/>
  
  <!-- Ambient glow -->
  <rect width="256" height="256" fill="url(#glow)"/>
  
  <!-- Noise texture overlay -->
  <rect width="256" height="256" fill="${cover.bg[0]}" opacity="0.1"/>
  
  <!-- Icon artwork -->
  <g filter="url(#blur)" opacity="0.3">
    ${cover.icon}
  </g>
  <g>
    ${cover.icon}
  </g>
  
  <!-- Bottom gradient -->
  <rect y="180" width="256" height="76" fill="url(#bg)" opacity="0.5"/>
  
  <!-- Subtle border -->
  <rect x="0.5" y="0.5" width="255" height="255" rx="4" fill="none" stroke="${cover.accent}" stroke-width="0.5" opacity="0.15"/>
</svg>`;

  const filePath = path.join(coversDir, `${cover.name}.svg`);
  fs.writeFileSync(filePath, svg.trim());
  console.log(`✓ Created ${cover.name}.svg`);
});

console.log(`\n✅ All ${covers.length} covers generated in ${coversDir}`);

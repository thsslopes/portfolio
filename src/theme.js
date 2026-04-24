/**
 * Design tokens extraídos da tela Figma: portfolio-2026 (node 11:272)
 *
 * Processo de normalização:
 * — Pinks (#ffb5e8, #f9a8d4, #f4adb3) → consolidados em pink.DEFAULT (#ffb5e8)
 *   #f9a8d4 e #f4adb3 eram tons de hover/variação sem uso semântico distinto
 * — Textos claros (#f8f6f0, #f2f2f4) → consolidados em text.DEFAULT (#f8f6f0)
 *   diferença imperceptível (~4 de luminosidade), sem papel semântico diferente
 * — Blues (#3b82f6, #336bb7) → #336bb7 era decorativo (Retro2), mantido como blue.deep
 * — Yellows (#fde047, #ffba03) → #ffba03 era decorativo (Earth Tone), mantido como yellow.deep
 */

export const colors = {
  // ── PRIMARY — fundos e superfícies ──────────────────────────────────────────
  primary: {
    bg:      '#161618',   // fundo principal (Woodsmoke)
    surface: '#1e1e20',   // superfícies elevadas (cards, modais)
    logo:    '#1a1a1a',   // fundo do logo T (Cod Gray)
  },

  // ── SECONDARY — texto e bordas ───────────────────────────────────────────────
  secondary: {
    text:    '#f8f6f0',          // texto principal claro (Athens Gray) ← normaliza #f2f2f4
    muted:   '#4b5563',          // texto secundário (River Bed — links nav)
    subtle:  'rgba(248,246,240,0.6)', // texto dimmed
    border:  'rgba(255,255,255,0.08)', // bordas sutis em fundo escuro
    photoBorder: '#e1e1e1',      // bordas dos photo cards
  },

  // ── ACCENT — ações e destaques ───────────────────────────────────────────────
  accent: {
    blue:    '#3b82f6',          // "strategy" badge + CTA (Dodger Blue)
    blueDeep:'#336bb7',          // variação decorativa escura (Retro2)
    blueGlow:'rgba(59,130,246,0.3)',  // sombra/glow do badge azul
    yellow:  '#fde047',          // botão "View Resume" (Bright Sun)
    yellowDeep: '#ffba03',       // variação decorativa quente (Earth Tone)
    pink:    '#ffb5e8',          // saudação "Hello, I'm Thaís!" ← normaliza #f9a8d4, #f4adb3
    orange:  '#fb923c',          // elemento decorativo (Neon Carrot)
    purple:  '#a855f7',          // elemento decorativo (Heliotrope)
  },

  // ── NEUTRALS ─────────────────────────────────────────────────────────────────
  neutral: {
    white:   '#ffffff',
    navBg:   'rgba(255,255,255,0.8)',
    navBorder:'rgba(255,255,255,0.5)',
  },
}

/**
 * Escalas tipográficas extraídas do Figma
 * Fonte primária: Outfit (400/500/600/700)
 * Fonte decorativa: Shantell Sans (scroll indicator)
 * Fonte logo: Playfair Display Bold
 */
export const typography = {
  fonts: {
    ui:     "'Outfit', sans-serif",
    doodle: "'Shantell Sans', cursive",
    logo:   "'Playfair Display', serif",
  },

  scale: {
    // Headings principais
    hero:    { size: '96px',   weight: 600, lineHeight: '100.8px', letterSpacing: '-2.4px' }, // "simplifying complexity through"
    section: { size: '88px',   weight: 600, lineHeight: '88px',    letterSpacing: '-2.2px' }, // "work i'm proud of"

    // UI / Corpo
    greeting:{ size: '24px',   weight: 500, lineHeight: '24px',    letterSpacing: '0' },      // "Hello, I'm Thaís!"
    cta:     { size: '20px',   weight: 500, lineHeight: '24.48px', letterSpacing: '0' },      // "View Resume"
    body:    { size: '16px',   weight: 500, lineHeight: '24px',    letterSpacing: '0' },      // parágrafos
    nav:     { size: '15px',   weight: 500, lineHeight: '22.5px',  letterSpacing: '0' },      // links da navbar
    scroll:  { size: '19.2px', weight: 400, lineHeight: 'normal',  letterSpacing: '0' },      // "scroll" indicator (Shantell Sans)

    // Logo
    logoMark:{ size: '20px',   weight: 700, lineHeight: '28px',    letterSpacing: '0' },      // "T"
  },
}

export const radii = {
  sm:   '12px',
  md:   '24px',
  lg:   '40px',
  pill: '9999px',
  card: '16.8px', // photo cards
}

export const shadows = {
  strategyBadge: '0px 10px 40px 0px rgba(59,130,246,0.3)',
  nav:           '0px 4px 20px 0px rgba(0,0,0,0.05)',
  photoCard:     '0px 1.5px 1.5px 0px rgba(104,104,104,0.25)',
}

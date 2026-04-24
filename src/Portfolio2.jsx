import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'


import thaisImg     from './assets/thais.jpg'
import logoCesar       from './assets/logo-cesar.png'
import logoPetrobras   from './assets/logos/petrobras.png'
import logoBancoBrasil from './assets/logos/banco-do-brasil.png'
import logoSamsung     from './assets/logos/samsung.png'
import cesarFrame1  from './assets/cesar-frame1.png'
import cesarFrame2  from './assets/cesar-frame2.png'
import cesarFrame3  from './assets/cesar-frame3.png'
import aboutManaus  from './assets/about-manaus.jpg'
import aboutDogs    from './assets/about-2.jpg'
import aboutTravel  from './assets/about-3.jpg'
import aboutMuseum  from './assets/about-4.jpg'
import aboutFunny   from './assets/about-1.jpg'
import aboutTeach   from './assets/about-5.jpg'
import aboutGroup   from './assets/about-6.jpg'

import glistHero        from './assets/glist/hero.png'
import glistEmpathy    from './assets/glist/empathy-map.png'
import glistPersonas   from './assets/glist/personas.png'
import glistMatriz     from './assets/glist/matriz-csd.png'
import glistJourney    from './assets/glist/user-journey.png'
import glistMoodboard  from './assets/glist/moodboard.png'
import glistSketches   from './assets/glist/sketches.png'
import glistWireframes from './assets/glist/wireframes.png'
import glistStyle01    from './assets/glist/styleguide-01.png'
import glistStyle02    from './assets/glist/styleguide-02.png'
import glistStyle03    from './assets/glist/styleguide-03.png'
import glistProto01    from './assets/glist/prototype01.png'
import glistProto02    from './assets/glist/prototype02.png'
import glistProto03    from './assets/glist/prototype03.png'
import glistProto04    from './assets/glist/prototype04.png'
import glistProto05    from './assets/glist/prototype05.png'
import glistProto06    from './assets/glist/prototype06.png'
import glistUsertest   from './assets/glist/usertest.png'
import glistAnimation  from './assets/glist/animation-transparent.webm'

import hdContext           from './assets/hd-context.png'
import hdProductFraming    from './assets/hd-product-framing.png'
import hdUnderstandingUsers from './assets/hd-understanding-users.png'
import hdUnderstanding      from './assets/hd-understanding.png'
import hdDecisions          from './assets/hd-decisions.gif'
import hdHifi1              from './assets/hd-hifi1.jpg'
import hdHifi2              from './assets/hd-hifi2.jpg'
import hdHifi3              from './assets/hd-hifi3.jpg'
import hdLofi1              from './assets/hd-lofi1.jpg'
import hdLofi2              from './assets/hd-lofi2.jpg'

// ─── Design tokens (girly pink palette) ──────────────────────────────────────

const MAC = {
  titleBg:   'linear-gradient(to bottom, #FFF5F9 0%, #FFE4F0 100%)',
  border:    '1px solid rgba(220,120,160,0.3)',
  shadow:    '0 24px 80px rgba(200,60,120,0.22), 0 0 0 0.5px rgba(210,100,150,0.25)',
  font:      "'Lucida Grande', -apple-system, 'Helvetica Neue', sans-serif",
  red:       '#FF5F57',
  yellow:    '#FEBC2E',
  green:     '#28C840',
  btnBorder: 'rgba(0,0,0,0.18)',
  titleText: '#9B4470',
  pink:      '#FF85C2',
  rose:      '#E8609A',
  cream:     '#FFF0F6',
}

// ─── useWindowManager ────────────────────────────────────────────────────────

function useWindowManager() {
  const topZ = useRef(20)

  const [windows, setWindows] = useState({
    home:           { id: 'home',           title: 'tha.design',   isOpen: true,  isMinimized: false, z: 20 },
    about:          { id: 'about',          title: 'about.txt',      isOpen: false, isMinimized: false, z: 10 },
    resume:         { id: 'resume',         title: 'resume.pdf',     isOpen: false, isMinimized: false, z: 10 },
    projects:       { id: 'projects',       title: 'projects/',      isOpen: false, isMinimized: false, z: 10 },
    'proj-cesar':   { id: 'proj-cesar',     title: 'CESAR',          isOpen: false, isMinimized: false, z: 10 },
    'proj-bancobr': { id: 'proj-bancobr',   title: 'Banco do Brasil',isOpen: false, isMinimized: false, z: 10 },
    'proj-samsung': { id: 'proj-samsung',   title: 'Samsung',        isOpen: false, isMinimized: false, z: 10 },
    'proj-petrobras':{ id: 'proj-petrobras',title: 'Historical Data',      isOpen: false, isMinimized: false, z: 10 },
    'proj-search':   { id: 'proj-search',   title: 'Documents Search Engine', isOpen: false, isMinimized: false, z: 10 },
    'proj-glist':    { id: 'proj-glist',    title: 'Glist',                   isOpen: false, isMinimized: false, z: 10 },
  })

  const [positions, setPositions] = useState({
    home:            { x: 100, y: 44  },
    about:           { x: 70,  y: 64  },
    resume:          { x: 140, y: 84  },
    projects:        { x: 180, y: 74  },
    'proj-cesar':    { x: 220, y: 60  },
    'proj-bancobr':  { x: 260, y: 80  },
    'proj-samsung':  { x: 300, y: 70  },
    'proj-petrobras':{ x: 240, y: 90  },
    'proj-search':   { x: 260, y: 80  },
    'proj-glist':    { x: 280, y: 70  },
  })

  const openWindow = useCallback((id) => {
    topZ.current += 1
    const z = topZ.current
    setWindows(prev => ({ ...prev, [id]: { ...prev[id], isOpen: true, isMinimized: false, z } }))
  }, [])

  const closeWindow = useCallback((id) => {
    setWindows(prev => ({ ...prev, [id]: { ...prev[id], isOpen: false, isMinimized: false } }))
  }, [])

  const minimizeWindow = useCallback((id) => {
    setWindows(prev => ({ ...prev, [id]: { ...prev[id], isMinimized: !prev[id].isMinimized } }))
  }, [])

  const focusWindow = useCallback((id) => {
    topZ.current += 1
    const z = topZ.current
    setWindows(prev => ({ ...prev, [id]: { ...prev[id], isMinimized: false, z } }))
  }, [])

  const setPosition = useCallback((id, pos) => {
    setPositions(prev => ({ ...prev, [id]: pos }))
  }, [])

  return { windows, positions, openWindow, closeWindow, minimizeWindow, focusWindow, setPosition }
}

// ─── ✦ Sparkle cursor trail ──────────────────────────────────────────────────

function SparkleTrail() {
  const [sparkles, setSparkles] = useState([])
  const lastEmit = useRef(0)

  useEffect(() => {
    const chars  = ['✦', '✧', '⋆', '★', '·', '✩']
    const colors = ['#FF85C2', '#FFD700', '#FF69B4', '#E8A0D0', '#FFC0CB', '#FF4FA3']

    const onMove = (e) => {
      const now = Date.now()
      if (now - lastEmit.current < 45) return
      lastEmit.current = now

      const id = now + Math.random()
      const sparkle = {
        id,
        x: e.clientX + (Math.random() - 0.5) * 24,
        y: e.clientY + (Math.random() - 0.5) * 24,
        char: chars[Math.floor(Math.random() * chars.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 8,
      }
      setSparkles(prev => [...prev.slice(-18), sparkle])
      setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== id)), 700)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999999 }}>
      {sparkles.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: s.x, top: s.y,
            fontSize: s.size,
            color: s.color,
            lineHeight: 1,
            pointerEvents: 'none',
            animation: 'sparkle-trail 0.7s ease-out forwards',
          }}
        >
          {s.char}
        </div>
      ))}
    </div>
  )
}

// ─── ✦ Ambient twinkling stars on desktop ────────────────────────────────────

function AmbientStars() {
  const stars = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 88 + 4,
      y: Math.random() * 82 + 8,
      size: Math.random() * 14 + 8,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2.5,
      color: ['#FF85C2', '#FFD700', '#FF4FA3', '#E8A0D0', '#FFC0CB', '#FFB347'][Math.floor(Math.random() * 6)],
      char: ['✦', '✧', '⋆', '✩'][Math.floor(Math.random() * 4)],
    })), []
  )

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {stars.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            fontSize: s.size,
            color: s.color,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {s.char}
        </div>
      ))}
    </div>
  )
}

// ─── ✦ Click burst on desktop ─────────────────────────────────────────────────

function ClickBurst({ burst }) {
  if (!burst) return null
  const pieces = ['✦', '✧', '⋆', '★', '·', '✩', '✦', '✧']
  const colors = ['#FF85C2', '#FFD700', '#FF4FA3', '#E8A0D0', '#FFC0CB']

  return (
    <div
      style={{
        position: 'fixed',
        left: burst.x,
        top: burst.y,
        pointerEvents: 'none',
        zIndex: 99998,
      }}
    >
      {pieces.map((ch, i) => {
        const angle = (i / pieces.length) * 360
        const dist  = 40 + Math.random() * 30
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              fontSize: 12 + Math.random() * 8,
              color: colors[i % colors.length],
              transform: `rotate(${angle}deg) translateY(-${dist}px)`,
              animation: 'burst-out 0.5s ease-out forwards',
              animationDelay: `${i * 0.03}s`,
            }}
          >
            {ch}
          </div>
        )
      })}
    </div>
  )
}

// ─── 🗂 Classic Mac OS 9 folder icon ─────────────────────────────────────────

function ClassicFolder({ isOpen = false, size = 46 }) {
  const w = size
  const h = size * 0.82

  return (
    <svg width={w} height={h} viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: 'pixelated', filter: 'drop-shadow(1px 2px 2px rgba(0,0,0,0.35))' }}
    >
      <defs>
        <linearGradient id={`fg-body-${isOpen}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={isOpen ? '#F0C050' : '#F5D060'} />
          <stop offset="100%" stopColor={isOpen ? '#C89020' : '#D4A030'} />
        </linearGradient>
        <linearGradient id={`fg-tab-${isOpen}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={isOpen ? '#F8D870' : '#FFE080'} />
          <stop offset="100%" stopColor={isOpen ? '#D4A030' : '#E0B040'} />
        </linearGradient>
      </defs>

      {/* Tab */}
      <path
        d="M2 14 L2 10 Q2 8 4 8 L18 8 Q20 8 21 10 L23 14 Z"
        fill={`url(#fg-tab-${isOpen})`}
        stroke="#7A5500"
        strokeWidth="0.8"
      />

      {/* Body */}
      <rect x="1" y="13" width="54" height="31" rx="2.5"
        fill={`url(#fg-body-${isOpen})`}
        stroke="#7A5500"
        strokeWidth="0.8"
      />

      {/* Top highlight streak */}
      <rect x="3" y="15" width="50" height="3" rx="1"
        fill="rgba(255,255,255,0.45)"
      />

      {/* Open folder — front flap / dark interior */}
      {isOpen && (
        <>
          <rect x="3" y="20" width="50" height="22" rx="1.5"
            fill="rgba(100,60,0,0.12)"
          />
          {/* Papers inside */}
          <rect x="10" y="18" width="36" height="2" rx="1"
            fill="rgba(255,255,255,0.6)"
          />
          <rect x="14" y="16" width="28" height="2" rx="1"
            fill="rgba(255,255,255,0.4)"
          />
        </>
      )}

      {/* Bottom shadow line */}
      <rect x="2" y="42" width="52" height="1.5" rx="0.75"
        fill="rgba(100,60,0,0.2)"
      />
    </svg>
  )
}

// ─── 📄 File icons ───────────────────────────────────────────────────────────

function FileIcon({ type = 'txt', size = 46 }) {
  const w = size
  const h = size * 1.1
  const fold = size * 0.22       // size of the folded corner

  const isPdf = type === 'pdf'
  const labelColor  = isPdf ? '#CC2233' : '#5566AA'
  const labelBg     = isPdf ? '#FFEAEC' : '#EEF0FF'
  const accentLine  = isPdf ? '#CC2233' : '#8899CC'
  const label       = isPdf ? 'PDF' : 'TXT'

  return (
    <svg width={w} height={h} viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.28))' }}
    >
      {/* Page body — with top-right dog-ear cut */}
      <path
        d={`M3 2 H${46 - fold} L43 ${fold} V50 Q43 51 42 51 H4 Q3 51 3 50 Z`}
        fill="white"
        stroke="#C0B8C8"
        strokeWidth="0.8"
      />

      {/* Dog-ear triangle (folded corner) */}
      <path
        d={`M${46 - fold} 2 L43 ${fold} H${46 - fold} Z`}
        fill="#E0D8E8"
        stroke="#C0B8C8"
        strokeWidth="0.8"
      />

      {/* Top accent bar */}
      <rect x="3" y="2" width={46 - fold - 3} height="4" rx="0"
        fill={accentLine} opacity="0.15"
      />

      {/* Text lines */}
      {[18, 23, 28, 33].map((y, i) => (
        <rect key={y} x="8" y={y} width={i === 2 ? 22 : 28} height="2" rx="1"
          fill="#D0C8D8" opacity="0.8"
        />
      ))}

      {/* Label badge */}
      <rect x="6" y="39" width="20" height="9" rx="2" fill={labelBg} stroke={labelColor} strokeWidth="0.8" />
      <text x="16" y="47" textAnchor="middle"
        style={{ fontSize: '6px', fontFamily: 'Tahoma, sans-serif', fontWeight: 700, fill: labelColor }}
      >
        {label}
      </text>
    </svg>
  )
}

// ─── ✦ GlitterStar icon ──────────────────────────────────────────────────────

function GlitterStar({ size = 44 }) {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'glitter-spin 4s ease-in-out infinite', filter: 'drop-shadow(0 0 6px rgba(255,180,60,0.7))' }}
      >
        <defs>
          <linearGradient id="sg1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#FFD700" />
            <stop offset="45%"  stopColor="#FF85C2" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>
        {/* Main 4-pointed star */}
        <path
          d="M24 3 C24 3 26.5 19 29 21 C31.5 23 45 24 45 24 C45 24 31.5 25 29 27 C26.5 29 24 45 24 45 C24 45 21.5 29 19 27 C16.5 25 3 24 3 24 C3 24 16.5 23 19 21 C21.5 19 24 3 24 3Z"
          fill="url(#sg1)"
        />
        {/* Top-right mini star */}
        <path
          d="M39 7 C39 7 39.8 11.2 40.5 12 C41.2 12.8 45 13.5 45 13.5 C45 13.5 41.2 14.2 40.5 15 C39.8 15.8 39 20 39 20 C39 20 38.2 15.8 37.5 15 C36.8 14.2 33 13.5 33 13.5 C33 13.5 36.8 12.8 37.5 12 C38.2 11.2 39 7 39 7Z"
          fill="#FFD700" opacity="0.95"
        />
        {/* Bottom-left mini star */}
        <path
          d="M9 28 C9 28 9.5 30.5 10 31 C10.5 31.5 13 32 13 32 C13 32 10.5 32.5 10 33 C9.5 33.5 9 36 9 36 C9 36 8.5 33.5 8 33 C7.5 32.5 5 32 5 32 C5 32 7.5 31.5 8 31 C8.5 30.5 9 28 9 28Z"
          fill="#FF85C2" opacity="0.9"
        />
        {/* Top-left dot */}
        <circle cx="11" cy="10" r="2.5" fill="#FFD700" opacity="0.8" />
        {/* Bottom-right dot */}
        <circle cx="38" cy="38" r="2" fill="#FF85C2" opacity="0.75" />
      </svg>
    </div>
  )
}

function HistoricalDataIcon({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 2px 6px rgba(74,126,197,0.4))' }}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#hdgrad)" />
      <rect x="2" y="2" width="44" height="44" rx="10" stroke="rgba(74,126,197,0.25)" strokeWidth="0.8" />
      {/* Grid lines */}
      <line x1="9" y1="36" x2="39" y2="36" stroke="rgba(74,126,197,0.2)" strokeWidth="0.8"/>
      <line x1="9" y1="29" x2="39" y2="29" stroke="rgba(74,126,197,0.12)" strokeWidth="0.7" strokeDasharray="2 2"/>
      <line x1="9" y1="22" x2="39" y2="22" stroke="rgba(74,126,197,0.12)" strokeWidth="0.7" strokeDasharray="2 2"/>
      {/* Bars */}
      <rect x="10" y="28" width="6" height="8" rx="1.5" fill="#7AAEE8" opacity="0.75"/>
      <rect x="20" y="22" width="6" height="14" rx="1.5" fill="#5590D8" opacity="0.85"/>
      <rect x="30" y="14" width="6" height="22" rx="1.5" fill="#3A76C8"/>
      {/* Trend line */}
      <polyline points="13,27 23,20 33,12" stroke="#A8CCEF" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="13" cy="27" r="2" fill="#C8DEFF"/>
      <circle cx="23" cy="20" r="2" fill="#C8DEFF"/>
      <circle cx="33" cy="12" r="2" fill="#C8DEFF"/>
      <defs>
        <linearGradient id="hdgrad" x1="2" y1="2" x2="2" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EAF3FF"/>
          <stop offset="100%" stopColor="#C0D8F5"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function DocumentsSearchIcon({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 2px 6px rgba(46,140,90,0.4))' }}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#dsgrad)" />
      <rect x="2" y="2" width="44" height="44" rx="10" stroke="rgba(46,140,90,0.2)" strokeWidth="0.8" />
      {/* Document */}
      <rect x="10" y="9" width="19" height="24" rx="3" fill="white" opacity="0.85"/>
      <rect x="10" y="9" width="19" height="24" rx="3" stroke="rgba(46,140,90,0.2)" strokeWidth="0.6"/>
      {/* Doc lines */}
      <rect x="14" y="15" width="11" height="1.8" rx="0.9" fill="#3A8F62" opacity="0.45"/>
      <rect x="14" y="19" width="9"  height="1.8" rx="0.9" fill="#3A8F62" opacity="0.35"/>
      <rect x="14" y="23" width="7"  height="1.8" rx="0.9" fill="#3A8F62" opacity="0.28"/>
      {/* Magnifying glass */}
      <circle cx="29" cy="29" r="8.5" fill="rgba(255,255,255,0.6)" stroke="#2E8C5A" strokeWidth="2.5"/>
      <circle cx="29" cy="29" r="5"   fill="rgba(200,240,218,0.5)"/>
      <line x1="35.5" y1="35.5" x2="40" y2="40" stroke="#2E8C5A" strokeWidth="2.8" strokeLinecap="round"/>
      <defs>
        <linearGradient id="dsgrad" x1="2" y1="2" x2="2" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E2F5EC"/>
          <stop offset="100%" stopColor="#B8DFC9"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function GlistIcon({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 2px 6px rgba(244,132,26,0.4))' }}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#ggrad)" />
      <rect x="2" y="2" width="44" height="44" rx="10" stroke="rgba(244,132,26,0.2)" strokeWidth="0.8" />
      {/* Shopping bag */}
      <path d="M17 20 h14 l-2 16 H19 Z" fill="white" opacity="0.9" />
      <path d="M20 20 c0-4 8-4 8 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Checkmark */}
      <path d="M20 28 l3 3 5-6" stroke="#F4841A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Small leaf */}
      <circle cx="36" cy="12" r="5" fill="rgba(90,180,130,0.85)" />
      <path d="M36 15 C34 13 34 10 36 9 C38 10 38 13 36 15Z" fill="white" opacity="0.7" />
      <defs>
        <linearGradient id="ggrad" x1="2" y1="2" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF3E8" />
          <stop offset="100%" stopColor="#FFD4A8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function BrowserIcon({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 2px 6px rgba(232,96,154,0.35))' }}
    >
      <rect x="2" y="5" width="44" height="38" rx="7" fill="url(#bgrad)" />
      <rect x="2" y="5" width="44" height="38" rx="7" stroke="rgba(200,80,140,0.3)" strokeWidth="0.8" />
      {/* Title bar */}
      <rect x="2" y="5" width="44" height="13" rx="7" fill="url(#tbgrad)" />
      <rect x="2" y="12" width="44" height="6" fill="url(#tbgrad)" />
      {/* Traffic lights */}
      <circle cx="10" cy="11.5" r="2.5" fill="#FF5F57" />
      <circle cx="18" cy="11.5" r="2.5" fill="#FEBC2E" />
      <circle cx="26" cy="11.5" r="2.5" fill="#28C840" />
      {/* URL bar */}
      <rect x="32" y="8" width="10" height="7" rx="3.5" fill="rgba(255,255,255,0.55)" />
      {/* Divider */}
      <line x1="2" y1="18" x2="46" y2="18" stroke="rgba(210,100,160,0.2)" strokeWidth="0.8" />
      {/* Content lines */}
      <rect x="8" y="23" width="20" height="2.5" rx="1.25" fill="rgba(232,96,154,0.35)" />
      <rect x="8" y="28" width="28" height="2" rx="1" fill="rgba(232,96,154,0.2)" />
      <rect x="8" y="32" width="22" height="2" rx="1" fill="rgba(232,96,154,0.2)" />
      <rect x="8" y="36" width="16" height="2" rx="1" fill="rgba(232,96,154,0.15)" />
      <defs>
        <linearGradient id="bgrad" x1="2" y1="5" x2="2" y2="43" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF5FB" />
          <stop offset="100%" stopColor="#FFE4F2" />
        </linearGradient>
        <linearGradient id="tbgrad" x1="2" y1="5" x2="2" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD6EE" />
          <stop offset="100%" stopColor="#FFBFE4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// ─── MacWindow ────────────────────────────────────────────────────────────────

const RESIZE_DIRS = ['n','s','e','w','ne','nw','se','sw']
const RESIZE_STYLES = {
  n:  { top:0, left:4, right:4, height:6, cursor:'n-resize' },
  s:  { bottom:0, left:4, right:4, height:6, cursor:'s-resize' },
  e:  { top:4, right:0, bottom:4, width:6, cursor:'e-resize' },
  w:  { top:4, left:0, bottom:4, width:6, cursor:'w-resize' },
  ne: { top:0, right:0, width:10, height:10, cursor:'ne-resize' },
  nw: { top:0, left:0, width:10, height:10, cursor:'nw-resize' },
  se: { bottom:0, right:0, width:10, height:10, cursor:'se-resize' },
  sw: { bottom:0, left:0, width:10, height:10, cursor:'sw-resize' },
}
const MIN_W = 320
const MIN_H = 220

function MacWindow({ id, title, isMinimized, z, pos, onClose, onMinimize, onFocus, onMove, children, width = 560, height = 480, toolbar = null, snapSide = null, onDragStart, onDragMove, onDragEnd, onSnapRelease }) {
  const dragging    = useRef(false)
  const dragOffset  = useRef({ x: 0, y: 0 })
  const resizing    = useRef(null) // { dir, startX, startY, startW, startH, startPosX, startPosY }
  const [btnHover, setBtnHover]   = useState(null)
  const [justOpened, setJustOpened] = useState(true)
  const [size, setSize]           = useState({ w: width, h: height })
  const [maximized, setMaximized] = useState(false)
  const prevSize = useRef(null)

  // Keep refs to callbacks so closures always call the latest version
  const onDragStartRef   = useRef(onDragStart)
  const onDragMoveRef    = useRef(onDragMove)
  const onDragEndRef     = useRef(onDragEnd)
  const onSnapReleaseRef = useRef(onSnapRelease)
  onDragStartRef.current   = onDragStart
  onDragMoveRef.current    = onDragMove
  onDragEndRef.current     = onDragEnd
  onSnapReleaseRef.current = onSnapRelease

  useEffect(() => {
    const t = setTimeout(() => setJustOpened(false), 300)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (snapSide) {
      setSize({ w: Math.floor(window.innerWidth / 2), h: window.innerHeight - 24 })
      setMaximized(false)
    }
  }, [snapSide])

  const handleTitleMouseDown = (e) => {
    if (e.target.closest('[data-winbtn]')) return
    if (maximized) return
    if (snapSide) onSnapReleaseRef.current?.()
    dragging.current = true
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    onDragStartRef.current?.(id)

    const onMove_ = (ev) => {
      if (!dragging.current) return
      const newPos = {
        x: Math.max(0, ev.clientX - dragOffset.current.x),
        y: Math.max(24, ev.clientY - dragOffset.current.y),
      }
      onMove(id, newPos)
      onDragMoveRef.current?.(id, newPos, ev.clientX)
    }
    const onUp = (ev) => {
      dragging.current = false
      onDragEndRef.current?.(id, {
        x: Math.max(0, ev.clientX - dragOffset.current.x),
        y: Math.max(24, ev.clientY - dragOffset.current.y),
      }, ev.clientX)
      window.removeEventListener('mousemove', onMove_)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove_)
    window.addEventListener('mouseup', onUp)
  }

  const handleResizeMouseDown = (e, dir) => {
    e.stopPropagation()
    e.preventDefault()
    resizing.current = { dir, startX: e.clientX, startY: e.clientY, startW: size.w, startH: size.h, startPosX: pos.x, startPosY: pos.y }

    const onMove_ = (ev) => {
      const r = resizing.current
      if (!r) return
      const dx = ev.clientX - r.startX
      const dy = ev.clientY - r.startY
      let newW = r.startW, newH = r.startH, newX = r.startPosX, newY = r.startPosY

      if (r.dir.includes('e')) newW = Math.max(MIN_W, r.startW + dx)
      if (r.dir.includes('s')) newH = Math.max(MIN_H, r.startH + dy)
      if (r.dir.includes('w')) { newW = Math.max(MIN_W, r.startW - dx); newX = r.startPosX + r.startW - newW }
      if (r.dir.includes('n')) { newH = Math.max(MIN_H, r.startH - dy); newY = r.startPosY + r.startH - newH }

      setSize({ w: newW, h: newH })
      if (r.dir.includes('w') || r.dir.includes('n')) onMove(id, { x: newX, y: Math.max(24, newY) })
    }
    const onUp = () => {
      resizing.current = null
      window.removeEventListener('mousemove', onMove_)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove_)
    window.addEventListener('mouseup', onUp)
  }

  const toggleMaximize = () => {
    if (!maximized) {
      prevSize.current = { size: { ...size }, pos: { ...pos } }
      setSize({ w: window.innerWidth, h: window.innerHeight - 24 })
      onMove(id, { x: 0, y: 24 })
    } else {
      if (prevSize.current) {
        setSize(prevSize.current.size)
        onMove(id, prevSize.current.pos)
      }
    }
    setMaximized(m => !m)
  }

  if (isMinimized) return null

  return (
    <div
      onMouseDown={() => onFocus(id)}
      style={{
        position: 'fixed',
        left: pos.x,
        top:  pos.y,
        width:  maximized ? window.innerWidth : size.w,
        height: maximized ? window.innerHeight - 24 : size.h,
        zIndex: z,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: maximized ? 0 : '12px',
        overflow: 'hidden',
        border: MAC.border,
        boxShadow: MAC.shadow,
        fontFamily: MAC.font,
        userSelect: 'none',
        animation: justOpened ? 'window-open 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards' : 'none',
        transformOrigin: 'top center',
      }}
    >
      {/* Resize handles (hidden when maximized) */}
      {!maximized && RESIZE_DIRS.map(dir => (
        <div
          key={dir}
          onMouseDown={e => handleResizeMouseDown(e, dir)}
          style={{
            position: 'absolute',
            zIndex: 10,
            ...RESIZE_STYLES[dir],
          }}
        />
      ))}

      {/* Title bar */}
      <div
        onMouseDown={handleTitleMouseDown}
        onMouseEnter={() => setBtnHover('bar')}
        onMouseLeave={() => setBtnHover(null)}
        style={{
          background: MAC.titleBg,
          height: 30,
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          cursor: maximized ? 'default' : 'move',
          flexShrink: 0,
          position: 'relative',
          borderBottom: '1px solid rgba(210,120,160,0.25)',
        }}
      >
        {/* Traffic lights LEFT */}
        <div style={{ display: 'flex', gap: 7, zIndex: 1 }}>
          {[
            { key: 'close',    color: MAC.red,    symbol: '✕', action: () => onClose(id) },
            { key: 'minimize', color: MAC.yellow, symbol: '–', action: () => onMinimize(id) },
            { key: 'zoom',     color: MAC.green,  symbol: maximized ? '⊡' : '+', action: toggleMaximize },
          ].map(btn => (
            <button
              key={btn.key}
              data-winbtn={btn.key}
              onMouseDown={e => e.stopPropagation()}
              onMouseEnter={() => setBtnHover(btn.key)}
              onMouseLeave={() => setBtnHover('bar')}
              onClick={e => { e.stopPropagation(); btn.action() }}
              style={{
                width: 13, height: 13,
                borderRadius: '50%',
                background: btn.color,
                border: `0.5px solid ${MAC.btnBorder}`,
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 7,
                fontWeight: 700,
                color: 'rgba(0,0,0,0.55)',
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              {(btnHover === btn.key || btnHover === 'bar') ? btn.symbol : ''}
            </button>
          ))}
        </div>

        {/* Title centered */}
        <span style={{
          position: 'absolute',
          left: 0, right: 0,
          textAlign: 'center',
          fontSize: 13,
          fontWeight: 500,
          color: MAC.titleText,
          pointerEvents: 'none',
        }}>
          {title}
          <span style={{ marginLeft: 6, fontSize: 10, opacity: 0.6 }}>✦</span>
        </span>
      </div>

      {/* Optional toolbar */}
      {toolbar}

      {/* Content */}
      <div style={{ background: '#FFFFFF', flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  )
}

// ─── Browser toolbar ──────────────────────────────────────────────────────────

function BrowserToolbar({ url = 'tha.design' }) {
  return (
    <div style={{
      background: '#FFF8FB',
      borderBottom: '1px solid rgba(220,150,185,0.3)',
      padding: '5px 10px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', gap: 2 }}>
        {['‹', '›'].map((arrow, i) => (
          <button key={i} style={{
            background: 'none', border: 'none',
            fontSize: 18, color: '#C8A0B8', cursor: 'default',
            padding: '0 3px', lineHeight: 1, fontFamily: MAC.font,
          }}>{arrow}</button>
        ))}
      </div>

      {/* URL bar */}
      <div style={{
        flex: 1,
        background: 'white',
        border: '1px solid rgba(220,140,180,0.4)',
        borderRadius: 20,
        padding: '3px 12px',
        fontSize: 12,
        color: '#7A3358',
        fontFamily: MAC.font,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        boxShadow: 'inset 0 1px 2px rgba(200,80,130,0.06)',
      }}>
        <span style={{ fontSize: 10 }}>✦</span>
        <span style={{ opacity: 0.7 }}>{url}</span>
      </div>

      <button style={{
        background: 'none', border: 'none',
        fontSize: 14, color: '#C8A0B8', cursor: 'pointer', padding: '0 4px',
      }}>↻</button>
    </div>
  )
}

// ─── HomeContent (inside browser) ────────────────────────────────────────────

function HomeContent() {
  const skills = [
    { icon: '🔍', title: 'UX Research',    desc: 'User interviews, usability testing, competitive analysis and synthesis.' },
    { icon: '✦',  title: 'UI Design',      desc: 'Pixel-perfect visual design, component libraries and design system governance.' },
    { icon: '⚙',  title: 'Design Systems', desc: 'Scalable systems that bridge design and development across teams.' },
    { icon: '▷',  title: 'Prototyping',    desc: 'High-fidelity interactive prototypes for testing and stakeholder alignment.' },
    { icon: '◈',  title: 'Strategy',       desc: 'Aligning design decisions with business goals, OKRs and user needs.' },
    { icon: '♡',  title: 'Leadership',     desc: 'Mentoring designers and facilitating cross-functional collaboration.' },
  ]

  const clients = [
    { name: 'CESAR',          logo: logoCesar },
    { name: 'Petrobras',      logo: logoPetrobras },
    { name: 'Banco do Brasil',logo: logoBancoBrasil },
    { name: 'Samsung',        logo: logoSamsung },
  ]

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#FDFAFC' }}>

      {/* ── Hero ── */}
      <div style={{
        padding: '56px 44px 48px',
        borderBottom: '1px solid #F5E6EF',
        background: 'linear-gradient(150deg, #FFF5F9 0%, #FFF0FB 40%, white 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative bg stars */}
        {[
          { top: 12, right: 32,  size: 18, color: '#FFD700', delay: '0s' },
          { top: 40, right: 80,  size: 10, color: '#FF85C2', delay: '0.5s' },
          { top: 80, right: 20,  size: 14, color: '#FFB3D9', delay: '1s' },
          { top: 20, left:  90,  size: 8,  color: '#FF85C2', delay: '1.5s' },
        ].map((s, i) => (
          <span key={i} style={{
            position: 'absolute',
            top: s.top, right: s.right, left: s.left,
            fontSize: s.size, color: s.color,
            animation: `twinkle 2.5s ease-in-out ${s.delay} infinite`,
            pointerEvents: 'none',
          }}>✦</span>
        ))}

        <p style={{
          fontFamily: MAC.font,
          fontSize: 11,
          color: '#C090B0',
          textTransform: 'uppercase',
          letterSpacing: 2.5,
          marginBottom: 14,
        }}>
          simplifying complexity through
        </p>

        <h1 style={{
          fontSize: 'clamp(32px, 4.5vw, 52px)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#1A1A1A',
          letterSpacing: '-1.5px',
          marginBottom: 32,
        }}>
          strategy{' '}
          <span style={{
            background: 'linear-gradient(135deg, #FF85C2, #E8609A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            &amp;
          </span>
          {' '}empathy
        </h1>

        <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <img
              src={thaisImg}
              alt="Thaís Lopes"
              style={{
                width: 180,
                height: 220,
                objectFit: 'cover',
                objectPosition: '50% 8%',
                borderRadius: 14,
                border: '2px solid #F0C0D8',
                display: 'block',
              }}
            />
            {/* Star badge on photo */}
            <span style={{
              position: 'absolute',
              bottom: -8, right: -8,
              fontSize: 20,
              filter: 'drop-shadow(0 1px 4px rgba(255,180,60,0.6))',
              animation: 'glitter-spin 3s ease-in-out infinite',
            }}>✦</span>
          </div>

          <div style={{ flex: 1, minWidth: 180 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
              Hello, I'm Thaís!
            </p>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75, marginBottom: 10 }}>
              A Product Designer based in Brazil with{' '}
              <strong style={{ color: MAC.rose }}>5+ years of experience</strong>{' '}
              simplifying the complex. I thrive on aligning multidisciplinary teams and turning
              deep research into human-centered designs.
            </p>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75 }}>
              From banking to AI-driven tools, I believe in the power of strategy, empathy,
              and a perfectly placed pixel.
            </p>
          </div>
        </div>
      </div>

      {/* ── Expertise ── */}
      <div style={{ padding: '44px 44px 36px', borderBottom: '1px solid #F5E6EF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 14, color: MAC.pink }}>✦</span>
          <p style={{ fontFamily: MAC.font, fontSize: 11, color: '#C090B0', textTransform: 'uppercase', letterSpacing: 2.5 }}>
            Expertise
          </p>
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A1A', marginBottom: 24, letterSpacing: '-0.5px' }}>
          Skills &amp; Capabilities
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
          {skills.map(s => (
            <div key={s.title} style={{
              background: 'white',
              border: '1px solid #F0D4E8',
              borderRadius: 10,
              padding: '16px 16px',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#FF85C2'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#F0D4E8'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: 18, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', marginBottom: 5 }}>{s.title}</div>
              <p style={{ fontFamily: MAC.font, fontSize: 11, color: '#999', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Clients ── */}
      <div style={{ padding: '44px 44px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 14, color: MAC.pink }}>✦</span>
          <p style={{ fontFamily: MAC.font, fontSize: 11, color: '#C090B0', textTransform: 'uppercase', letterSpacing: 2.5 }}>
            Clients
          </p>
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A1A', marginBottom: 24, letterSpacing: '-0.5px' }}>
          Companies I've Worked With
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {clients.map(c => (
            <div key={c.name} style={{
              background: 'white',
              border: '1px solid #F0D4E8',
              borderRadius: 10,
              padding: '18px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              minWidth: 110,
              transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#FF85C2'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#F0D4E8'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <img src={c.logo} alt={c.name} style={{ height: 34, objectFit: 'contain' }} />
              <span style={{ fontFamily: MAC.font, fontSize: 10, color: '#BBA0B0' }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── AboutContent ─────────────────────────────────────────────────────────────

const ABOUT_PHOTOS = [
  { src: aboutManaus, label: 'Manaus 🌅' },
  { src: aboutDogs,   label: 'the babies 🐶' },
  { src: aboutTravel, label: 'Porto ✈️' },
  { src: aboutMuseum, label: 'art lover 🎨' },
  { src: aboutFunny,  label: '100% true 😂' },
  { src: aboutTeach,  label: 'facilitating 🧩' },
  { src: aboutGroup,  label: 'the crew 🤝' },
]

function PhotoLightbox({ index, onClose, onPrev, onNext }) {
  const photo = ABOUT_PHOTOS[index]

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'Escape')     onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onPrev, onNext, onClose])

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(20,10,18,0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        zIndex: 999995,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* Card */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: 4,
          padding: '10px 10px 28px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
          maxWidth: 380,
          width: '90%',
          position: 'relative',
          animation: 'window-open 0.22s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        {/* Photo */}
        <img
          src={photo.src}
          alt={photo.label}
          style={{ width: '100%', maxHeight: 320, objectFit: 'cover', display: 'block', borderRadius: 2 }}
        />
        {/* Label */}
        <div style={{
          textAlign: 'center', fontFamily: MAC.font,
          fontSize: 12, color: '#888', marginTop: 10,
        }}>
          {photo.label}
        </div>

        {/* Counter */}
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: 'rgba(0,0,0,0.45)', color: 'white',
          fontSize: 10, fontFamily: MAC.font,
          padding: '2px 8px', borderRadius: 20,
        }}>
          {index + 1} / {ABOUT_PHOTOS.length}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 10, left: 10,
            width: 22, height: 22, borderRadius: '50%',
            background: MAC.red, border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, color: 'rgba(0,0,0,0.5)', fontWeight: 700,
          }}
        >×</button>

        {/* Prev arrow */}
        <button
          onClick={onPrev}
          style={{
            position: 'absolute', left: -44, top: '50%', transform: 'translateY(-50%)',
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.92)', border: 'none', cursor: 'pointer',
            fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
            color: MAC.rose,
          }}
        >‹</button>

        {/* Next arrow */}
        <button
          onClick={onNext}
          style={{
            position: 'absolute', right: -44, top: '50%', transform: 'translateY(-50%)',
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.92)', border: 'none', cursor: 'pointer',
            fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
            color: MAC.rose,
          }}
        >›</button>

        {/* Dot strip */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 12 }}>
          {ABOUT_PHOTOS.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === index ? 16 : 6, height: 6,
                borderRadius: 3,
                background: i === index ? MAC.rose : '#E8C8D8',
                transition: 'width 0.2s ease, background 0.2s ease',
                cursor: 'pointer',
              }}
              onClick={() => { /* navigate via parent */ }}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}

function AboutPolaroid({ src, label, rotate = 0, photoIndex, onOpen }) {
  return (
    <div
      onClick={() => onOpen(photoIndex)}
      style={{
        background: 'white',
        padding: '6px 6px 22px',
        boxShadow: '0 3px 14px rgba(0,0,0,0.13)',
        borderRadius: 3,
        transform: `rotate(${rotate}deg)`,
        flexShrink: 0,
        width: 96,
        transition: 'transform 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = `rotate(0deg) scale(1.08)`}
      onMouseLeave={e => e.currentTarget.style.transform = `rotate(${rotate}deg)`}
    >
      <img src={src} alt={label} style={{ width: '100%', height: 82, objectFit: 'cover', display: 'block' }} />
      <div style={{ fontSize: 9, fontFamily: MAC.font, color: '#BBA0B0', textAlign: 'center', marginTop: 6, lineHeight: 1.3 }}>{label}</div>
    </div>
  )
}

function AboutContent() {
  const [lightbox, setLightbox] = useState(null) // index or null

  const openPhoto = (i) => setLightbox(i)
  const closePhoto = () => setLightbox(null)
  const prevPhoto = () => setLightbox(i => (i - 1 + ABOUT_PHOTOS.length) % ABOUT_PHOTOS.length)
  const nextPhoto = () => setLightbox(i => (i + 1) % ABOUT_PHOTOS.length)

  const sectionLabel = (text) => (
    <div style={{
      fontSize: 9, fontWeight: 700, color: MAC.rose, fontFamily: MAC.font,
      textTransform: 'uppercase', letterSpacing: 2.2, marginBottom: 12, marginTop: 22,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      {text}
      <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, #F0D4E8, transparent)' }} />
    </div>
  )

  return (
    <div style={{ overflowY: 'auto', flex: 1, minHeight: 0, fontFamily: "'Montserrat', sans-serif" }}>
      {lightbox !== null && (
        <PhotoLightbox
          index={lightbox}
          onClose={closePhoto}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
      <div style={{ padding: '24px 28px 36px' }}>

        {/* Header */}
        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', marginBottom: 20 }}>
          <div style={{ paddingTop: 2 }}>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: '#1A1A1A', margin: '0 0 4px', lineHeight: 1.2 }}>
              Hello, I'm Thaís <span style={{ color: MAC.pink }}>✦</span>
            </h2>
            <div style={{ fontFamily: MAC.font, color: MAC.rose, fontSize: 11, marginBottom: 8 }}>
              Product Designer · UX Strategist
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
              {[
                { emoji: '📍', text: 'Manaus → Recife, Brazil' },
                { emoji: '🐶', text: 'dog mom' },
                { emoji: '📷', text: 'photography' },
              ].map(f => (
                <span key={f.text} style={{ fontSize: 11, fontFamily: MAC.font, color: '#888', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {f.emoji} {f.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Photo strip */}
        <div style={{ display: 'flex', gap: 14, marginBottom: 6, paddingBottom: 4, justifyContent: 'center' }}>
          <AboutPolaroid src={aboutManaus} label="Manaus 🌅"    rotate={-2.5} photoIndex={0} onOpen={openPhoto} />
          <AboutPolaroid src={aboutDogs}   label="the babies 🐶" rotate={1.5}  photoIndex={1} onOpen={openPhoto} />
          <AboutPolaroid src={aboutTravel} label="Porto ✈️"     rotate={-1.5} photoIndex={2} onOpen={openPhoto} />
          <AboutPolaroid src={aboutMuseum} label="art lover 🎨"  rotate={2}    photoIndex={3} onOpen={openPhoto} />
          <AboutPolaroid src={aboutFunny}  label="100% true 😂"  rotate={-1}   photoIndex={4} onOpen={openPhoto} />
        </div>

        {/* Bio */}
        {sectionLabel('about me')}
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: '0 0 10px' }}>
          I'm passionate about <strong style={{ color: MAC.rose }}>adapting my skills and processes to solve complex challenges</strong>, bridging user needs and business goals. I thrive in multidisciplinary teams that value collaboration, inclusivity, and crafting meaningful solutions.
        </p>
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: 0 }}>
          My design practice spans UX strategy, product and visual design, user research, storytelling, and prototyping. I'm also deeply interested in <strong style={{ color: MAC.rose }}>mentoring, UX writing</strong>, and facilitating workshops to align teams and empower decision-making.
        </p>

        {/* Teaching & Mentoring */}
        {sectionLabel('teaching & mentoring')}
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          {/* Photos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
            <img src={aboutTeach} alt="Workshop facilitation"
              onClick={() => openPhoto(5)}
              style={{ width: 110, height: 130, objectFit: 'cover', objectPosition: '50% 20%', borderRadius: 10, border: '2px solid #F0C8DC', cursor: 'pointer', transition: 'transform 0.15s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <img src={aboutGroup} alt="Mentoring group"
              onClick={() => openPhoto(6)}
              style={{ width: 110, height: 72, objectFit: 'cover', objectPosition: '50% 30%', borderRadius: 10, border: '2px solid #F0C8DC', cursor: 'pointer', transition: 'transform 0.15s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
            {[
              { icon: '🎓', title: 'UX Instructor', desc: 'Teaching UX fundamentals, research methods, and design thinking to students building their first products.' },
              { icon: '🤝', title: 'Design Mentor', desc: 'Guiding junior designers through portfolio reviews, career transitions, and day-to-day design challenges.' },
              { icon: '🧩', title: 'Workshop Facilitator', desc: 'Running Lean Inception, Design Sprint, and alignment sessions that help teams make faster, better decisions.' },
            ].map(item => (
              <div key={item.title} style={{
                display: 'flex', gap: 10, alignItems: 'flex-start',
                background: '#FFF8FC', border: '1px solid #F5DCE8',
                borderLeft: `3px solid ${MAC.pink}`,
                borderRadius: '0 10px 10px 0', padding: '10px 12px',
              }}>
                <span style={{ fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 12, color: '#1A1A1A', marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: '#666', lineHeight: 1.6, fontFamily: MAC.font }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outside of work */}
        {sectionLabel('outside of work')}
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: '0 0 18px' }}>
          You'll likely find me planning my next trip, exploring new tools to refine my craft, or enjoying a good book with a chocolate beside me. 🍫
        </p>

        {/* Skill tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {['UX Strategy', 'Product Design', 'Visual Design', 'User Research', 'Prototyping', 'UX Writing', 'Workshops', 'Mentoring', 'Storytelling'].map(tag => (
            <span key={tag} style={{
              background: '#FFF0F6', border: '1px solid #F0C8DC', borderRadius: 20,
              padding: '4px 13px', fontSize: 11, fontFamily: MAC.font, color: MAC.titleText,
            }}>
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

// ─── ResumeContent ────────────────────────────────────────────────────────────

function ResumeContent() {
  const P = MAC.pink
  const R = MAC.rose
  const section = (label) => (
    <div style={{ fontSize: 9, fontWeight: 700, color: R, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 2.5, marginBottom: 12, marginTop: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
      {label}
      <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, #F0D4E8, transparent)' }} />
    </div>
  )
  const bullet = (text) => (
    <div style={{ display: 'flex', gap: 8, fontSize: 11, color: '#555', lineHeight: 1.7, marginBottom: 5 }}>
      <span style={{ color: P, flexShrink: 0, marginTop: 2 }}>✦</span>{text}
    </div>
  )
  return (
    <div style={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
      {/* Header */}
      <div style={{ padding: '28px 32px 20px', background: 'linear-gradient(150deg, #FFF0F8 0%, #FFE4F2 60%, white 100%)', borderBottom: '1px solid #F0D4E8' }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, color: '#1A1A1A', margin: '0 0 4px', fontFamily: "'Montserrat', sans-serif" }}>Thais Lopes</h1>
        <div style={{ fontSize: 12, color: R, fontFamily: MAC.font, marginBottom: 12 }}>Product Design (UX/UI) · Service Design · Design Strategy</div>
        <div style={{ fontSize: 11, color: '#666', lineHeight: 1.7, maxWidth: 420, marginBottom: 16 }}>Experience delivering digital products with measurable business impact (Oil &amp; Gas, Finance, Tech).</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 24px' }}>
          {[
            { icon: '📍', text: 'Recife, PE – Brazil' },
            { icon: '📱', text: '+55 92 99137 2057' },
            { icon: '✉️', text: 'thaislopesdesign@gmail.com' },
            { icon: '🌐', text: 'thaislopes.framer.website' },
          ].map(item => (
            <div key={item.text} style={{ fontSize: 11, color: '#555', fontFamily: MAC.font, display: 'flex', alignItems: 'center', gap: 5 }}>
              <span>{item.icon}</span>{item.text}
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 32px 40px', fontFamily: "'Montserrat', sans-serif" }}>

        {/* Experience */}
        {section('Work Experience')}
        {[
          {
            title: 'Product Designer', company: 'CESAR', location: 'Recife', period: 'Nov 2021 – Present',
            sub: 'The largest innovation center in the Northeast of Brazil · Featured in Forbes and BBC',
            bullets: [
              'Directed design projects for a major oil & gas client, generating R$1.5M impact and securing long-term renewals.',
              'Defined and facilitated product strategy workshops (product vision, design thinking, lean inception) for leaders and diverse teams, aligning on MVP launches and driving 6 product releases.',
              'Drove user research (interviews, surveys, market analysis) for MVPs across oil & gas and finance projects, clarifying problem spaces, validating solutions, and accelerating delivery.',
            ],
          },
          {
            title: 'Product Designer', company: 'Sidia', location: 'Manaus', period: 'Sep 2020 – Nov 2021',
            sub: 'One of the largest R&D institutes in Brazil',
            bullets: [
              'Led discovery, research, and prototyping for 5 internal tools automating Samsung LATAM\'s Android development.',
              'Integrated user-centered design into agile workflows, reducing handoff gaps and enhancing usability.',
              'Established discovery-to-delivery design practices with engineering and QA for internal tools supporting Samsung Android releases in Latin America.',
            ],
          },
          {
            title: 'UX/UI Designer', company: 'Fermen.to Innovation Lab', location: 'Manaus', period: 'Jun 2019 – Dec 2019',
            sub: 'Independent innovation lab',
            bullets: [
              'Managed end-to-end design of 3 early-stage digital products, overseeing research and interface delivery alongside developers.',
              'Led market research and UX design for a football club membership site, boosting user engagement and brand affinity.',
              'Influenced product direction by presenting solutions directly to stakeholders and validating design decisions through feedback loops.',
            ],
          },
        ].map(exp => (
          <div key={exp.company} style={{ marginBottom: 20, background: '#FFF8FB', border: '1px solid #F0D4E8', borderLeft: `3px solid ${P}`, borderRadius: '0 10px 10px 0', padding: '14px 16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
              <span style={{ fontWeight: 700, fontSize: 13, color: '#1A1A1A' }}>{exp.title} — {exp.company}, <em style={{ fontWeight: 400 }}>{exp.location}</em></span>
              <span style={{ fontFamily: MAC.font, fontSize: 10, color: '#BBA0B0', flexShrink: 0, marginLeft: 12 }}>{exp.period}</span>
            </div>
            <div style={{ fontSize: 10, color: R, fontFamily: MAC.font, marginBottom: 10 }}>{exp.sub}</div>
            {exp.bullets.map((b, i) => bullet(b))}
          </div>
        ))}

        {/* Education */}
        {section('Education')}
        {[
          { degree: 'Master of Design', school: 'CESAR School', period: '2022–2024', note: 'Thesis: Emergent Phenomena in the Integration of AI in Healthcare' },
          { degree: 'Bachelor of Design', school: 'Universidade Federal do Amazonas – UFAM', period: '2015–2019', note: '' },
        ].map(ed => (
          <div key={ed.school} style={{ marginBottom: 12, paddingLeft: 12, borderLeft: `2px solid #F0D4E8` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 700, fontSize: 12, color: '#1A1A1A' }}>{ed.degree}, <span style={{ fontWeight: 400 }}>{ed.school}</span></span>
              <span style={{ fontFamily: MAC.font, fontSize: 10, color: '#BBA0B0', flexShrink: 0, marginLeft: 12 }}>{ed.period}</span>
            </div>
            {ed.note && <div style={{ fontSize: 10, color: '#888', fontStyle: 'italic', marginTop: 2 }}>{ed.note}</div>}
          </div>
        ))}

        {/* Skills + Certs side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 8 }}>
          <div>
            {section('Skills')}
            {[
              { cat: 'Research & Strategy', items: 'User Research, Product Strategy, Hypothesis Validation, Data Analysis' },
              { cat: 'Design & Delivery', items: 'Product Design (UX/UI), Design Systems, Prototyping (Figma), Usability Testing, Interaction Design' },
              { cat: 'Collaboration', items: 'Agile Workflows, Cross-functional Teams, Stakeholder Alignment' },
            ].map(s => (
              <div key={s.cat} style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#333' }}>{s.cat}: </span>
                <span style={{ fontSize: 11, color: '#666' }}>{s.items}</span>
              </div>
            ))}
          </div>
          <div>
            {section('Certificates')}
            {[
              'Innovation and Leadership in Project Management — ISCTE Executive Education, 2025',
              'Lean Inception Facilitator — Caroli.org, 2024',
              'Product Management, PM3 – 2024',
              'Product Discovery, PM3 – 2023',
            ].map((c, i) => bullet(c))}
          </div>
        </div>

        {/* Languages + Special Projects side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            {section('Languages')}
            {[['Portuguese', 'Native (C2)'], ['English', 'Fluent (C1)'], ['Spanish', 'Intermediate (B2)']].map(([lang, level]) => (
              <div key={lang} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#555', marginBottom: 6, paddingBottom: 6, borderBottom: '1px solid #F8EEF4' }}>
                <span style={{ fontWeight: 600 }}>{lang}</span>
                <span style={{ color: R, fontFamily: MAC.font }}>{level}</span>
              </div>
            ))}
          </div>
          <div>
            {section('Special Projects')}
            {[
              'Mentor of intrapreneurship teams in healthcare and aerospace.',
              'Academic coordinator of Data-Driven Design (FAST) and Product Management (Banco do Brasil).',
              'Leader of the Digital Agents Program (UPE) with the Pernambuco Government.',
            ].map((p, i) => bullet(p))}
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Project data ─────────────────────────────────────────────────────────────

const PROJECT_DATA = [
  {
    id: 'proj-petrobras',
    name: 'historical data',
    tag: 'Industrial UX',
    role: 'UX Designer',
    period: '2019–2020',
    desc: 'Information architecture and UX for energy sector digital transformation. Translated complex industrial workflows into intuitive digital interfaces.',
    logo: logoPetrobras,
    frames: [],
    accent: '#009B3A',
    icon: (size) => <HistoricalDataIcon size={size} />,
  },
  {
    id: 'proj-search',
    name: 'documents search engine',
    tag: 'Product Design + Research',
    role: 'Product Designer',
    period: '2023–Present',
    desc: 'Search and document analysis platform for geoscientific teams. Led research, synthesis, and design decisions that secured a $1.2M contract renewal.',
    logo: logoPetrobras,
    frames: [],
    accent: '#005020',
    icon: (size) => <DocumentsSearchIcon size={size} />,
  },
  {
    id: 'proj-glist',
    name: 'glist',
    tag: 'UX & UI Challenge',
    role: 'UX/UI Designer',
    period: '2021',
    desc: 'An app to help families easily calculate the amount of food they need — reducing waste through smarter grocery planning.',
    frames: [],
    accent: '#F4841A',
    icon: (size) => <GlistIcon size={size} />,
  },
]

// ─── ProjectsContent — Finder-style folder grid ───────────────────────────────

function ProjectsContent({ onOpenProject }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
      {/* Sidebar */}
      <div style={{
        width: 120,
        background: '#F8F0F5',
        borderRight: '1px solid #F0D4E8',
        padding: '16px 8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        flexShrink: 0,
      }}>
        {['Favorites', 'Desktop', 'Downloads', 'projects/'].map((item, i) => (
          <div key={item} style={{
            padding: '5px 10px',
            borderRadius: 5,
            fontSize: 11,
            fontFamily: MAC.font,
            color: i === 3 ? MAC.rose : '#888',
            fontWeight: i === 3 ? 600 : 400,
            background: i === 3 ? 'rgba(232,96,154,0.1)' : 'transparent',
            cursor: 'default',
          }}>
            {item}
          </div>
        ))}
      </div>

      {/* Icon grid */}
      <div style={{
        flex: 1,
        padding: 24,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
        gap: 8,
        alignContent: 'start',
        background: 'white',
      }}>
        {PROJECT_DATA.map(p => (
          <div
            key={p.id}
            onClick={() => onOpenProject(p.id)}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              padding: '10px 6px',
              borderRadius: 8,
              cursor: 'pointer',
              background: hovered === p.id ? 'rgba(232,96,154,0.1)' : 'transparent',
              border: hovered === p.id ? '1px solid rgba(232,96,154,0.25)' : '1px solid transparent',
              transition: 'background 0.15s',
              userSelect: 'none',
            }}
          >
            {p.icon ? p.icon(52) : <ClassicFolder isOpen={hovered === p.id} size={52} />}
            <span style={{
              fontSize: 11,
              fontFamily: MAC.font,
              color: '#3A2030',
              textAlign: 'center',
              lineHeight: 1.3,
            }}>
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── ProjectDetailContent ─────────────────────────────────────────────────────

function ProjectDetailContent({ projectId }) {
  const p = PROJECT_DATA.find(x => x.id === projectId)
  const [activeFrame, setActiveFrame] = useState(0)
  if (!p) return null

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Screenshot area */}
      <div style={{
        background: '#F8F0F5',
        borderBottom: '1px solid #F0D4E8',
        padding: 20,
        display: 'flex',
        gap: 10,
        flexDirection: 'column',
      }}>
        {p.frames.length > 0 ? (
          <>
            <img
              src={p.frames[activeFrame]}
              alt={`${p.name} screenshot`}
              style={{ width: '100%', borderRadius: 8, border: '1px solid #F0D4E8', objectFit: 'cover', maxHeight: 180 }}
            />
            {p.frames.length > 1 && (
              <div style={{ display: 'flex', gap: 6 }}>
                {p.frames.map((f, i) => (
                  <img
                    key={i}
                    src={f}
                    alt=""
                    onClick={() => setActiveFrame(i)}
                    style={{
                      width: 48, height: 36,
                      objectFit: 'cover',
                      borderRadius: 4,
                      border: `2px solid ${i === activeFrame ? MAC.rose : '#F0D4E8'}`,
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div style={{
            height: 160,
            borderRadius: 8,
            border: '1px solid #F0D4E8',
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}>
            <img src={p.logo} alt={p.name} style={{ height: 40, objectFit: 'contain', opacity: 0.7 }} />
            <span style={{ fontFamily: MAC.font, fontSize: 11, color: '#CCA0B8' }}>case study coming soon ✦</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <img src={p.logo} alt={p.name} style={{ height: 28, objectFit: 'contain' }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#1A1A1A' }}>{p.name}</div>
            <div style={{ fontFamily: MAC.font, fontSize: 10, color: '#BBA0B0', textTransform: 'uppercase', letterSpacing: 1 }}>{p.tag}</div>
          </div>
          <span style={{
            marginLeft: 'auto',
            background: '#FFF0F6',
            border: `1px solid ${p.accent}`,
            borderRadius: 20,
            padding: '3px 10px',
            fontSize: 11,
            fontFamily: MAC.font,
            color: p.accent,
          }}>
            {p.period}
          </span>
        </div>

        <p style={{ fontSize: 12, color: '#555', lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: MAC.font, fontSize: 11, color: '#BBA0B0' }}>
            Role: {p.role}
          </span>
          <button style={{
            background: `linear-gradient(135deg, ${MAC.pink}, ${MAC.rose})`,
            border: 'none', borderRadius: 20,
            color: 'white', fontFamily: MAC.font,
            fontSize: 12, padding: '7px 18px', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(232,96,154,0.3)',
          }}>
            View case study →
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── PetrobrasCaseStudy ───────────────────────────────────────────────────────

function SketchyBrowserFrame({ src, alt }) {
  return (
    <div style={{ position: 'relative', margin: '8px auto', width: '70%' }}>
      <svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}>
        {/* Outer border — wobbly rectangle */}
        <path d="M12,18 Q11,10 20,9 L498,7 Q509,8 510,18 L511,342 Q511,353 500,354 L20,355 Q9,354 9,343 Z"
          fill="none" stroke="#E8609A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          style={{ filter: 'url(#sketchy)' }} />
        {/* Title bar fill */}
        <path d="M12,18 Q11,10 20,9 L498,7 Q509,8 510,18 L510,52 L10,52 Z"
          fill="rgba(255,182,210,0.18)" />
        {/* Title bar bottom line — wobbly */}
        <path d="M10,52 Q260,49 510,52"
          fill="none" stroke="#E8609A" strokeWidth="1.8" strokeLinecap="round"
          style={{ filter: 'url(#sketchy)' }} />
        {/* Traffic lights — hand-drawn circles */}
        <circle cx="34" cy="30" r="7" fill="none" stroke="#FF5F57" strokeWidth="2" transform="rotate(-3,34,30)" />
        <circle cx="34" cy="30" r="4" fill="#FF5F57" opacity="0.7" />
        <circle cx="56" cy="30" r="7" fill="none" stroke="#FEBC2E" strokeWidth="2" transform="rotate(2,56,30)" />
        <circle cx="56" cy="30" r="4" fill="#FEBC2E" opacity="0.7" />
        <circle cx="78" cy="30" r="7" fill="none" stroke="#28C840" strokeWidth="2" transform="rotate(-1,78,30)" />
        <circle cx="78" cy="30" r="4" fill="#28C840" opacity="0.7" />
        {/* URL bar — wobbly pill */}
        <path d="M108,20 Q109,14 118,14 L400,13 Q410,13 411,21 L411,41 Q410,47 400,47 L118,47 Q108,47 107,40 Z"
          fill="rgba(255,255,255,0.6)" stroke="#E8A0C8" strokeWidth="1.5" strokeLinecap="round"
          style={{ filter: 'url(#sketchy)' }} />
        {/* Little star doodles */}
        <text x="420" y="37" fontSize="14" fill="#FF85C2" opacity="0.7" transform="rotate(-8,420,37)">✦</text>
        <text x="440" y="32" fontSize="10" fill="#FFD700" opacity="0.6" transform="rotate(5,440,32)">✧</text>
        <text x="458" y="39" fontSize="12" fill="#FF85C2" opacity="0.5" transform="rotate(-4,458,39)">⋆</text>
        {/* Corner doodles */}
        <text x="486" y="352" fontSize="11" fill="#E8609A" opacity="0.4" transform="rotate(12,486,352)">✦</text>
        <text x="14" y="350" fontSize="9" fill="#FF85C2" opacity="0.35" transform="rotate(-8,14,350)">✧</text>
        <defs>
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" id="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" result="sketchy" id="sketchy" />
        </defs>
      </svg>
      {/* Actual image clipped inside frame */}
      <div style={{ borderRadius: 10, overflow: 'hidden', paddingTop: 52, background: 'white', position: 'relative' }}>
        <img src={src} alt={alt} style={{ width: '75%', display: 'block', margin: '0 auto' }} />
      </div>
    </div>
  )
}

const HD_SECTIONS = [
  { id: 'context',   title: 'Context',                num: '01' },
  { id: 'framing',   title: 'Product Framing',         num: '02' },
  { id: 'research',  title: 'Understanding Users',      num: '03' },
  { id: 'synthesis', title: 'Synthesis',               num: '04' },
  { id: 'decisions', title: 'Design Decisions',        num: '05' },
  { id: 'execution', title: 'Prototyping & Execution', num: '06' },
  { id: 'testing',   title: 'Testing & Validation',    num: '07' },
  { id: 'impact',    title: 'Impact',                  num: '08' },
  { id: 'learnings', title: 'Key Learnings',           num: '09' },
]

const ROSE       = '#1A4080'
const ROSE_LIGHT = '#90B8D8'
const ROSE_BG    = '#EBF3FA'

const DSE_GREEN       = '#005020'
const DSE_GREEN_LIGHT = '#96C4A8'
const DSE_GREEN_BG    = '#E4F2EA'

function ImgSlot({ label, height = 180 }) {
  return (
    <div style={{
      width: '100%', height,
      background: `linear-gradient(135deg, ${ROSE_BG} 0%, #EEF5FC 100%)`,
      border: `2px dashed ${ROSE_LIGHT}`,
      borderRadius: 12, margin: '12px 0',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 6,
    }}>
      <span style={{ fontSize: 24, opacity: 0.35 }}>🖼</span>
      <div style={{ fontSize: 10, color: '#90C4A8', fontFamily: MAC.font, textAlign: 'center', padding: '0 20px' }}>{label}</div>
    </div>
  )
}

function PetrobrasCaseStudy({ onOpenNext }) {
  const [activeTab,      setActiveTab]      = useState('context')
  const [splitView,      setSplitView]      = useState(false)
  const [canScrollLeft,  setCanScrollLeft]  = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [tabScrolled,    setTabScrolled]    = useState(false)

  const scrollRef   = useRef(null)
  const textPaneRef = useRef(null)
  const tabBarRef   = useRef(null)
  const singleRefs  = useRef({})
  const splitRefs   = useRef({})

  // ── Helpers ───────────────────────────────────────────────────────────────
  const para = (html) => (
    <p style={{ fontSize: 13, color: '#444', lineHeight: 1.9, marginBottom: 14, marginTop: 0 }}
       dangerouslySetInnerHTML={{ __html: html }} />
  )
  const bullet = (items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 8, padding: '9px 13px' }}>
          <span style={{ color: ROSE, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✦</span>
          <span style={{ fontSize: 12, color: '#444', lineHeight: 1.7 }}>{item}</span>
        </div>
      ))}
    </div>
  )
  const pullquote = (text, attr) => (
    <div style={{ background: `linear-gradient(135deg, ${ROSE_BG} 0%, #EEF5FC 100%)`, borderLeft: `3px solid ${ROSE}`, borderRadius: '0 10px 10px 0', padding: '12px 16px', marginBottom: 10 }}>
      <div style={{ fontSize: 13, color: '#333', fontStyle: 'italic', lineHeight: 1.8, marginBottom: 5 }}>{text}</div>
      <div style={{ fontSize: 10, color: ROSE, fontFamily: MAC.font, fontWeight: 700 }}>— {attr}</div>
    </div>
  )

  // ── Section content (body + media separated) ──────────────────────────────
  const SECTION_CONTENT = [
    {
      id: 'context', num: '01', title: 'Context',
      body: (
        <>
          {para('Pipeline inspections in pre-salt reservoirs are critical to detecting and preventing stress corrosion cracking caused by CO₂ (SCC-CO₂). Until this project, data from those inspections was manually managed in <strong>spreadsheets and PowerPoint files</strong> — with little traceability, duplicated effort across teams, and frequent errors in data processing.')}
          {para('The need for a centralized, digital system had become urgent: not only to improve operational efficiency, but also to <strong>support strategic decisions through reliable, accessible data</strong>.')}
        </>
      ),
      media: <img src={hdContext} alt="Before state — legacy spreadsheet workflow" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
    },
    {
      id: 'framing', num: '02', title: 'Product Framing',
      body: (
        <>
          {para('To guide the project from the start, I facilitated a <strong>Lean Canvas session</strong> to map user pains, product value, and priorities. This visual exercise helped align the team around a clear direction before any design work began.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            {[
              { label: 'Pain points',     value: 'Manual spreadsheets, low automation, and siloed communication across teams' },
              { label: 'Product value',   value: 'Centralize and automate inspection data to reduce errors and save time' },
              { label: 'MVP scope',       value: 'Focused on the needs of three specific operational areas' },
              { label: 'Success metrics', value: 'Fewer errors, time saved, process automation, and user adoption' },
            ].map(item => (
              <div key={item.label} style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 9, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 5 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </>
      ),
      media: <img src={hdProductFraming} alt="Lean Canvas session artifact" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
    },
    {
      id: 'research', num: '03', title: 'Understanding Users',
      body: (
        <>
          {para('To root the project in real user needs, I conducted a deep dive into current inspection data workflows. Through <strong>interviews, research sessions, and strategic discussions</strong>, I uncovered how information was accessed, shared, and interpreted across different areas of the company.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Objectives</div>
              {['Map user profiles and responsibilities across the three target areas', 'Understand how each area experienced and valued inspection data', 'Identify which user perspectives should be prioritized in the MVP'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.7, paddingBottom: 8, borderBottom: i < 2 ? `1px solid #E5EFF8` : 'none', marginBottom: 8 }}>
                  <span style={{ color: ROSE, flexShrink: 0 }}>✦</span>{t}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Key Findings</div>
              {['Lack of centralized access to inspection results across teams', 'Low automation in formatting and managing inspection reports', 'Reliance on other departments and external tools to retrieve data', 'High manual effort to create and share visuals or summaries'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.6, paddingBottom: 7, borderBottom: i < 3 ? `1px solid #E5EFF8` : 'none', marginBottom: 7 }}>
                  <span style={{ color: '#CCC', flexShrink: 0 }}>—</span>{t}
                </div>
              ))}
            </div>
          </div>
        </>
      ),
      media: <img src={hdUnderstanding} alt="Understanding users research" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
    },
    {
      id: 'synthesis', num: '04', title: 'Synthesis & Prioritization',
      body: (
        <>
          {para('To consolidate insights from the immersion phase, I created a <strong>cross-functional journey map</strong> that visualized current workflows and surfaced friction points across all three teams. Issues were categorized by role, frequency, and impact.')}
          {bullet(['Fragmentation across tools made consistent data access difficult', 'Lack of automation increased manual effort and error rates across teams', 'No unified access to inspection results slowed decision-making and reduced visibility'])}
          <div style={{ background: `linear-gradient(135deg, ${ROSE_BG} 0%, #EEF5FC 100%)`, border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '12px 16px', fontSize: 12, color: '#555', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 14 }}>
            This step transformed research into a shared understanding that guided the MVP scope conversation.
          </div>
        </>
      ),
      media: <img src={hdUnderstandingUsers} alt="Synthesis artifacts" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
    },
    {
      id: 'decisions', num: '05', title: 'Design Decisions',
      body: (
        <>
          {para('A <strong>three-day workshop</strong> combining Lean Inception and Design Sprint tools was held to collaboratively define the MVP scope.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
            {[{ day: 'Day 01', focus: 'Product vision, pain point mapping, user roles' }, { day: 'Day 02', focus: 'Ideation, card sorting, sketchstorming' }, { day: 'Day 03', focus: 'Technical, business, and UX review — scope sequencing' }].map(item => (
              <div key={item.day} style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: ROSE, marginBottom: 6 }}>{item.day}</div>
                <div style={{ fontSize: 11, color: '#666', lineHeight: 1.6 }}>{item.focus}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
            <div style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Features prioritized</div>
              {['Centralized access to inspection results', 'Faster generation of visual reports', 'Reduced reliance on spreadsheets'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.6, marginBottom: 6 }}><span style={{ color: ROSE }}>✓</span>{f}</div>
              ))}
            </div>
            <div style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#AAA', fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Deferred — and why</div>
              {[{ f: 'Real-time editing', r: 'architectural changes not feasible for v1' }, { f: 'Predictive analytics', r: 'needed more historical data to be meaningful' }, { f: 'API integrations', r: 'teams still transitioning from manual workflows' }].map((item, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 12, color: '#777', fontWeight: 600 }}>– {item.f}</div>
                  <div style={{ fontSize: 11, color: '#AAA', paddingLeft: 12 }}>{item.r}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      ),
      media: <img src={hdDecisions} alt="Design decisions workshop" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
    },
    {
      id: 'execution', num: '06', title: 'Prototyping & Execution',
      body: (
        <>
          {para('My approach was <strong>co-participatory and iterative</strong>. I facilitated sketching sessions and rapid critique rounds with stakeholders and developers, continuously testing for feasibility and usability.')}
          {para("Early concepts evolved into high-fidelity prototypes using the company's Design System — ensuring visual consistency and alignment with internal platform standards. As the <strong>sole designer</strong>, I created all flows in Figma and partnered closely with developers.")}
        </>
      ),
      media: (
        <>
          {/* Interactive Prototype */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.8, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 18, height: 1.5, background: ROSE_LIGHT }} />
              Interactive Prototype
              <span style={{ display: 'inline-block', flex: 1, height: 1.5, background: ROSE_LIGHT }} />
            </div>
            <div style={{ border: `1.5px solid ${ROSE_LIGHT}`, borderRadius: 10, overflow: 'hidden' }}>
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/3WqZtWYhPxbnlgramell05/prototype?node-id=1001-15564%26t=2BtohN1i7j9LAoDE-1"
                allowFullScreen
                style={{ width: '100%', height: 340, border: 'none', display: 'block' }}
              />
            </div>
          </div>

          {/* Low Fidelity */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.8, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 18, height: 1.5, background: ROSE_LIGHT }} />
              Low Fidelity
              <span style={{ display: 'inline-block', flex: 1, height: 1.5, background: ROSE_LIGHT }} />
            </div>
            <SketchyBrowserFrame src={hdLofi1} alt="Low fidelity wireframe 1" />
            <SketchyBrowserFrame src={hdLofi2} alt="Low fidelity wireframe 2" />
          </div>

          {/* High Fidelity */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.8, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 18, height: 1.5, background: ROSE_LIGHT }} />
              High Fidelity
              <span style={{ display: 'inline-block', flex: 1, height: 1.5, background: ROSE_LIGHT }} />
            </div>
            <img src={hdHifi1} alt="High fidelity screen 1" style={{ width: '75%', borderRadius: 10, margin: '6px auto', display: 'block' }} />
            <img src={hdHifi2} alt="High fidelity screen 2" style={{ width: '75%', borderRadius: 10, margin: '6px auto', display: 'block' }} />
            <img src={hdHifi3} alt="High fidelity screen 3" style={{ width: '75%', borderRadius: 10, margin: '6px auto', display: 'block' }} />
          </div>
        </>
      ),
    },
    {
      id: 'testing', num: '07', title: 'Testing & Validation',
      body: (
        <>
          {para('To ensure usability and adoption across user segments, I designed and conducted <strong>two rounds of testing</strong>.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
            <div style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '16px' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Moderated — Primary Users</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: ROSE, lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, marginBottom: 10 }}>task success rate</div>
              <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7, borderTop: `1px solid #E5EFF8`, paddingTop: 10 }}>All 13 tasks completed. Users flagged inconsistencies in filter behavior and terminology.</div>
            </div>
            <div style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '16px' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#AAA', fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Unmoderated — via Useberry</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#90C4A8', lineHeight: 1 }}>67%</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, marginBottom: 10 }}>task completion success</div>
              <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7, borderTop: `1px solid #E5EFF8`, paddingTop: 10 }}>Identified gaps in dashboard clarity and data interpretation — informed v2 priorities.</div>
            </div>
          </div>
          {pullquote('"The tool is very intuitive and well organized."', 'User 01')}
          {pullquote('"Now I don\'t need to wait for someone to send me the inspection data."', 'User 02')}
        </>
      ),
      media: null,
    },
    {
      id: 'impact', num: '08', title: 'Impact',
      body: (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 12 }}>
            {[
              { metric: '~3h',  sub: 'saved per user per week' },
              { metric: '100%', sub: 'task success — moderated tests' },
              { metric: 'Full', sub: 'MVP adoption — all target teams' },
            ].map(item => (
              <div key={item.metric} style={{ background: `linear-gradient(135deg, #E0ECF8 0%, ${ROSE_BG} 100%)`, border: `1.5px solid ${ROSE_LIGHT}`, borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: ROSE, marginBottom: 6 }}>{item.metric}</div>
                <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, lineHeight: 1.5 }}>{item.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ background: `linear-gradient(135deg, #E0ECF8 0%, ${ROSE_BG} 100%)`, border: `1.5px solid ${ROSE_LIGHT}`, borderRadius: 12, padding: '20px 24px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ fontSize: 32, fontWeight: 900, color: ROSE, flexShrink: 0 }}>R$300M</div>
            <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7 }}>in <strong>risk reduction</strong> over 10 years at Petrobras — enabled by the platform's capacity to centralize inspection data and support strategic decisions at scale</div>
          </div>
          {bullet(['Eliminated spreadsheet-based processes entirely', 'Users reported increased autonomy and greater confidence in operational decisions'])}
        </>
      ),
      media: null,
    },
    {
      id: 'learnings', num: '09', title: 'Key Learnings',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { num: '01', title: 'Synthesis before solution',    body: 'Aligning on user value before jumping into design was critical for strategic clarity.' },
            { num: '02', title: 'Designing with constraints',   body: 'Balancing user needs and internal platform limitations requires constant negotiation.' },
            { num: '03', title: 'Discovery never stops',        body: 'Continuous feedback loops should guide future iterations, especially for evolving dashboards.' },
            { num: '04', title: 'Framework blending works',     body: 'Combining Lean Inception with Design Sprint tools gave the right mix of structure and creativity.' },
          ].map(item => (
            <div key={item.num} style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderLeft: `3px solid ${ROSE}`, borderRadius: '0 10px 10px 0', padding: '14px 16px' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 5 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font }}>{item.num}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A' }}>{item.title}</span>
              </div>
              <p style={{ fontSize: 12, color: '#555', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      ),
      media: null,
    },
  ]

  // ── Scroll / tab logic ────────────────────────────────────────────────────
  const scrollTo = (id) => {
    setActiveTab(id)
    if (!splitView) {
      const el = singleRefs.current[id]
      if (el && scrollRef.current) scrollRef.current.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' })
    } else {
      const el = splitRefs.current[id]
      if (el && textPaneRef.current) textPaneRef.current.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' })
    }
  }

  const trackActive = (container, refs) => {
    const offset = container.scrollTop + 70
    let current = SECTION_CONTENT[0].id
    for (const s of SECTION_CONTENT) {
      const el = refs.current[s.id]
      if (el && el.offsetTop <= offset) current = s.id
    }
    setActiveTab(current)
  }

  useEffect(() => {
    const container = splitView ? textPaneRef.current : scrollRef.current
    if (!container) return
    const refs = splitView ? splitRefs : singleRefs
    const onScroll = () => {
      trackActive(container, refs)
      setTabScrolled(container.scrollTop > 60)
    }
    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [splitView])

  const updateTabArrows = () => {
    const el = tabBarRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }
  const shiftTabs = (dir) => {
    const el = tabBarRef.current
    if (el) el.scrollBy({ left: dir * 160, behavior: 'smooth' })
  }
  useEffect(() => {
    const el = tabBarRef.current
    if (!el) return
    updateTabArrows()
    el.addEventListener('scroll', updateTabArrows, { passive: true })
    const ro = new ResizeObserver(updateTabArrows)
    ro.observe(el)
    return () => { el.removeEventListener('scroll', updateTabArrows); ro.disconnect() }
  }, [])

  // ── Shared sub-components ─────────────────────────────────────────────────
  const SectionHead = ({ num, title }) => (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 18 }}>
      <span style={{ fontSize: 10, fontWeight: 700, color: ROSE, fontFamily: MAC.font }}>{num}</span>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: '#1A1A1A', margin: 0 }}>{title}</h2>
    </div>
  )
  const sectionDiv = (last = false) => ({
    paddingTop: 34, paddingBottom: 34,
    borderBottom: last ? 'none' : `1px solid #E4F2EA`,
  })

  const Hero = () => (
    <div style={{ padding: '32px 40px 24px', background: `linear-gradient(150deg, ${ROSE_BG} 0%, #EEF5FC 55%, white 100%)`, borderBottom: `1px solid ${ROSE_LIGHT}` }}>
      <div style={{ fontSize: 9, fontFamily: MAC.font, color: ROSE, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 10 }}>Case Study 01 · Product Design + Research · Petrobras</div>
      <h1 style={{ fontSize: 24, fontWeight: 900, color: '#1A1A1A', margin: '0 0 20px', lineHeight: 1.2 }}>Historical Data <span style={{ color: ROSE }}>✦</span></h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px' }}>
        {[{ label: 'Role', value: 'Product Designer (sole designer)' }, { label: 'Timeline', value: 'Feb 2024 - August 2024' }, { label: 'Impact', value: '~3h saved/user/week · 100% task success · Full adoption' }].map(item => (
          <div key={item.label}>
            <div style={{ fontSize: 9, fontFamily: MAC.font, color: ROSE, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 3 }}>{item.label}</div>
            <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const NextCase = () => (
    <div onClick={onOpenNext} style={{ margin: '8px 40px 48px', background: 'linear-gradient(135deg, #0A1628 0%, #142240 100%)', borderRadius: 16, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
      <span style={{ position: 'absolute', top: -10, right: 30, fontSize: 100, opacity: 0.06, color: 'white', lineHeight: 1, pointerEvents: 'none' }}>✦</span>
      <div>
        <div style={{ fontSize: 9, color: 'rgba(180,210,240,0.6)', fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 2.5, marginBottom: 10 }}>Next case study</div>
        <div style={{ fontSize: 20, fontWeight: 900, color: 'white', marginBottom: 6 }}>Documents Search Engine <span style={{ color: ROSE_LIGHT }}>✦</span></div>
        <div style={{ fontSize: 11, color: 'rgba(180,210,240,0.6)', fontFamily: MAC.font }}>Petrobras · Product Design + Research</div>
      </div>
      <div style={{ background: ROSE, borderRadius: '50%', width: 46, height: 46, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 18, color: 'white' }}>→</span>
      </div>
    </div>
  )

  const TabArrow = ({ label, dir, scrolled }) => (
    <button onClick={() => shiftTabs(dir)} style={{ flexShrink: 0, border: 'none', background: 'transparent', borderBottom: '2px solid transparent', padding: '0 8px', cursor: 'pointer', color: scrolled ? 'white' : ROSE, fontSize: 14, fontWeight: 700, zIndex: 2 }}>{label}</button>
  )

  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── Tab bar ── */}
      <div style={{ flexShrink: 0, background: tabScrolled ? ROSE : 'white', borderBottom: tabScrolled ? 'none' : `1px solid ${ROSE_LIGHT}`, display: 'flex', alignItems: 'stretch', zIndex: 10, transition: 'background 0.25s ease' }}>
        {canScrollLeft && <TabArrow label="‹" dir={-1} scrolled={tabScrolled} />}
        <div ref={tabBarRef} style={{ flex: 1, display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {HD_SECTIONS.map(s => {
            const active = activeTab === s.id
            return (
              <button key={s.id} onClick={() => scrollTo(s.id)} style={{ background: 'none', border: 'none', borderBottom: active ? `2px solid ${tabScrolled ? 'white' : ROSE}` : '2px solid transparent', padding: '9px 12px', fontSize: 11, fontFamily: MAC.font, color: active ? (tabScrolled ? 'white' : ROSE) : (tabScrolled ? 'rgba(255,255,255,0.6)' : '#999'), fontWeight: active ? 700 : 400, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.2s', marginBottom: -1 }}>{s.title}</button>
            )
          })}
        </div>
        {canScrollRight && <TabArrow label="›" dir={1} scrolled={tabScrolled} />}

        {/* Split toggle */}
        <button
          onClick={() => setSplitView(v => !v)}
          title={splitView ? 'Single column' : 'Split view'}
          style={{ flexShrink: 0, border: 'none', borderLeft: `1px solid ${tabScrolled ? 'rgba(255,255,255,0.2)' : ROSE_LIGHT}`, borderBottom: '2px solid transparent', padding: '0 13px', background: 'transparent', color: splitView ? (tabScrolled ? 'white' : ROSE) : (tabScrolled ? 'rgba(255,255,255,0.5)' : '#BBB'), cursor: 'pointer', fontSize: 15, transition: 'all 0.2s' }}
        >⊞</button>
      </div>

      {/* ── Single column ── */}
      {!splitView && (
        <div ref={scrollRef} style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: '#FDFCFA' }}>
          <Hero />
          <div style={{ padding: '0 40px 20px' }}>
            {SECTION_CONTENT.map((s, i) => (
              <div key={s.id} ref={el => { singleRefs.current[s.id] = el }} style={sectionDiv(i === SECTION_CONTENT.length - 1)}>
                <SectionHead num={s.num} title={s.title} />
                {s.body}
                {s.media}
              </div>
            ))}
          </div>
          <NextCase />
        </div>
      )}

      {/* ── Split view ── */}
      {splitView && (
        <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>

          {/* Left — text */}
          <div ref={textPaneRef} style={{ flex: 1, minWidth: 0, overflowY: 'auto', background: '#FDFCFA', borderRight: `1px solid ${ROSE_LIGHT}` }}>
            <Hero />
            <div style={{ padding: '0 28px 20px' }}>
              {SECTION_CONTENT.map((s, i) => (
                <div key={s.id} ref={el => { splitRefs.current[s.id] = el }} style={sectionDiv(i === SECTION_CONTENT.length - 1)}>
                  <SectionHead num={s.num} title={s.title} />
                  {s.body}
                </div>
              ))}
            </div>
            <NextCase />
          </div>

          {/* Right — screens & evidence */}
          <div style={{ width: '44%', minWidth: 200, overflowY: 'auto', background: '#F5FBF7', padding: '20px 16px 48px' }}>
            <div style={{ fontSize: 9, fontFamily: MAC.font, color: '#90C4A8', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Screens & evidence</div>
            {SECTION_CONTENT.filter(s => s.media).map(s => (
              <div key={s.id} style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 9, fontFamily: MAC.font, color: ROSE, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{s.num} — {s.title}</div>
                {s.media}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

// ─── DocumentsSearchEngineCaseStudy ──────────────────────────────────────────

function DseImgSlot({ label, height = 180 }) {
  return (
    <div style={{
      width: '100%', height,
      background: `linear-gradient(135deg, ${DSE_GREEN_BG} 0%, #EFF8F3 100%)`,
      border: `2px dashed ${DSE_GREEN_LIGHT}`,
      borderRadius: 12, margin: '12px 0',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 6,
    }}>
      <span style={{ fontSize: 24, opacity: 0.35 }}>🖼</span>
      <div style={{ fontSize: 10, color: DSE_GREEN_LIGHT, fontFamily: MAC.font, textAlign: 'center', padding: '0 20px' }}>{label}</div>
    </div>
  )
}

function DocumentsSearchEngineCaseStudy({ onOpenNext }) {
  const [activeTab,      setActiveTab]      = useState('context')
  const [splitView,      setSplitView]      = useState(false)
  const [canScrollLeft,  setCanScrollLeft]  = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollRef   = useRef(null)
  const textPaneRef = useRef(null)
  const tabBarRef   = useRef(null)
  const singleRefs  = useRef({})
  const splitRefs   = useRef({})

  const G = DSE_GREEN
  const GL = DSE_GREEN_LIGHT
  const GB = DSE_GREEN_BG

  const para = (html) => (
    <p style={{ fontSize: 13, color: '#444', lineHeight: 1.9, marginBottom: 14, marginTop: 0 }}
       dangerouslySetInnerHTML={{ __html: html }} />
  )
  const bullet = (items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'white', border: `1px solid ${GL}`, borderRadius: 8, padding: '9px 13px' }}>
          <span style={{ color: G, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✦</span>
          <span style={{ fontSize: 12, color: '#444', lineHeight: 1.7 }}>{item}</span>
        </div>
      ))}
    </div>
  )
  const callout = (text) => (
    <div style={{ background: `linear-gradient(135deg, ${GB} 0%, #EFF8F3 100%)`, borderLeft: `3px solid ${G}`, borderRadius: '0 10px 10px 0', padding: '12px 16px', marginBottom: 16, fontSize: 12, color: '#555', lineHeight: 1.8, fontStyle: 'italic' }}>
      {text}
    </div>
  )

  const DSE_SECTION_CONTENT = [
    {
      id: 'context', num: '01', title: 'Context',
      body: (
        <>
          {para('The platform was used to <strong>search and analyze complex geological and administrative documents</strong> — a critical tool for geoscientific teams making time-sensitive decisions.')}
          {para('Despite its importance, users struggled with <strong>imprecise search results, confusing filters, and inefficient workflows</strong> — especially when searching for well-related data. These friction points were slowing down critical decisions and creating unnecessary manual workarounds.')}
        </>
      ),
      media: <DseImgSlot label="Before state — legacy search workflow" height={200} />,
    },
    {
      id: 'framing', num: '02', title: 'Product Framing',
      body: (
        <>
          {para('To align the team around a shared product vision, I facilitated a <strong>Lean Canvas session</strong> to define user pains, product value, and priorities. I complemented this with a Team Alignment Board and a Value Proposition canvas to guide decisions beyond the initial framing.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            {[
              { label: 'Team & vision alignment',     value: 'Sessions with developers, data scientists, and client teams to align goals and constraints' },
              { label: 'Product value defined',        value: 'Improve search accuracy and reduce manual workarounds for critical geological workflows' },
              { label: 'Focus on priority users',      value: 'Solutions scoped around the needs of key operational areas' },
              { label: 'Success metrics',              value: 'Fewer errors, time saved, process automation, and user adoption' },
            ].map(item => (
              <div key={item.label} style={{ background: 'white', border: `1px solid ${GL}`, borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 9, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 5 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </>
      ),
      media: <DseImgSlot label="Lean Canvas session artifact" height={200} />,
    },
    {
      id: 'research', num: '03', title: 'Understanding Users',
      body: (
        <>
          {para('To ground the project in real user behavior, I focused on understanding how different user profiles <strong>searched for and accessed geological and administrative data</strong>. Through interviews and in-platform evaluations, I identified where the search experience was failing and which use cases required immediate attention.')}
          {callout('Complemented by a heuristic evaluation based on Nielsen Norman\'s heuristics — applied selectively and critically to validate usability issues identified during research.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Objectives</div>
              {[
                'Map different user profiles and their search behaviors',
                'Understand how users navigated internal tools and what workarounds they had developed',
                'Identify critical search scenarios to prioritize in design decisions',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.7, paddingBottom: 8, borderBottom: i < 2 ? `1px solid ${GB}` : 'none', marginBottom: 8 }}>
                  <span style={{ color: G, flexShrink: 0 }}>✦</span>{t}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Key Findings</div>
              {[
                'Imprecise search results — especially for well-related data — made it hard to find relevant documents',
                'Inconsistent filter logic created confusion and reduced trust in search results',
                "Unclear interface elements (e.g., 'Similar Documents') limited discoverability",
                'Users could not request access to restricted documents within the platform itself',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.6, paddingBottom: 7, borderBottom: i < 3 ? `1px solid ${GB}` : 'none', marginBottom: 7 }}>
                  <span style={{ color: '#CCC', flexShrink: 0 }}>—</span>{t}
                </div>
              ))}
            </div>
          </div>
        </>
      ),
      media: <DseImgSlot label="Research artifacts — interviews & heuristic evaluation" height={200} />,
    },
    {
      id: 'synthesis', num: '04', title: 'Synthesis & Prioritization',
      body: (
        <>
          {para('Research findings were synthesized into clear themes and translated into actionable opportunities using an <strong>Opportunity Tree</strong>. Priorities were then aligned with Product Owners, developers, and data scientists — narrowing scope to the most critical improvements in search and taxonomy.')}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 12 }}>Before → After</div>
            {[
              { before: 'Imprecise results',    after: 'Clear taxonomy and consistent relevance ranking' },
              { before: 'Confusing filters',    after: 'Standardized filter logic and interactions' },
              { before: 'Manual workarounds',   after: 'Streamlined in-platform flows' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', border: `1px solid ${GL}`, borderRadius: 10, padding: '11px 14px', marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: '#999', lineHeight: 1.5, flex: 1 }}>{item.before}</span>
                <span style={{ fontSize: 14, color: G, fontWeight: 700, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 12, color: '#333', lineHeight: 1.5, flex: 1, fontWeight: 600 }}>{item.after}</span>
              </div>
            ))}
          </div>
        </>
      ),
      media: <DseImgSlot label="Opportunity Tree artifact" height={200} />,
    },
    {
      id: 'decisions', num: '05', title: 'Design Decisions',
      body: (
        <>
          {para('Consolidated findings guided a set of clear design decisions across <strong>three areas</strong>:')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
            {[
              { area: 'Search behavior',    icon: '🔍', desc: 'Defined changes to improve relevance for well-related searches; prioritized clarity and consistency in results ranking.' },
              { area: 'Filters & taxonomy', icon: '🗂', desc: 'Standardized filter logic and interactions; refined taxonomy categories to reduce ambiguity.' },
              { area: 'Access flow',        icon: '🔓', desc: 'Designed an in-platform document access request flow; removed manual and external workarounds.' },
            ].map(item => (
              <div key={item.area} style={{ background: 'white', border: `1px solid ${GL}`, borderLeft: `3px solid ${G}`, borderRadius: '0 10px 10px 0', padding: '14px 16px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: G, marginBottom: 5 }}>{item.area}</div>
                  <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      ),
      media: <DseImgSlot label="Design decision artifacts" height={200} />,
    },
    {
      id: 'execution', num: '06', title: 'Prototyping & Execution',
      body: (
        <>
          {callout("This case's strength is research and strategy. UI execution was handled by a dedicated UI designer based on the design decisions and specifications produced in the previous phase.")}
          {para('Based on the defined design decisions, I produced <strong>detailed specifications</strong> for each area — search behavior, filter logic, taxonomy structure, and access flows. These were handed off to a dedicated UI designer responsible for visual implementation, ensuring design intent was preserved throughout execution.')}
          {para('This collaboration model allowed research and product strategy to drive the design — with visual execution moving quickly because the decisions had already been carefully grounded in user needs.')}
        </>
      ),
      media: <DseImgSlot label="Design specifications handoff" height={200} />,
    },
    {
      id: 'testing', num: '07', title: 'Testing & Validation',
      body: (
        <>
          {para('During the research phase, a <strong>heuristic evaluation</strong> based on Nielsen Norman\'s ten principles was conducted to validate and cross-check usability issues found in interviews — providing a structured lens on the existing platform\'s friction points.')}
          <div style={{ background: 'white', border: `1px solid ${GL}`, borderRadius: 10, padding: '20px', textAlign: 'center', marginBottom: 16 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 10 }}>Post-launch · UMUX Score</div>
            <div style={{ fontSize: 48, fontWeight: 900, color: G, lineHeight: 1 }}>83</div>
            <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, marginTop: 6 }}>out of 100</div>
            <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7, borderTop: `1px solid ${GB}`, paddingTop: 12, marginTop: 12 }}>The improvements meaningfully addressed the core usability issues identified earlier. Users also reported faster and more accurate searches.</div>
          </div>
        </>
      ),
      media: <DseImgSlot label="UMUX survey results" height={200} />,
    },
    {
      id: 'impact', num: '08', title: 'Impact',
      body: (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
            <div style={{ background: `linear-gradient(135deg, ${GB} 0%, #EFF8F3 100%)`, border: `1.5px solid ${GL}`, borderRadius: 12, padding: '20px 16px', textAlign: 'center', gridColumn: '1 / -1' }}>
              <div style={{ fontSize: 9, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>Business</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: G, marginBottom: 4 }}>$1.2M</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font }}>contract renewal secured — directly tied to platform improvements</div>
            </div>
            <div style={{ background: `linear-gradient(135deg, ${GB} 0%, #EFF8F3 100%)`, border: `1.5px solid ${GL}`, borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: 9, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>User</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: G, lineHeight: 1, marginBottom: 4 }}>83</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font }}>UMUX satisfaction score</div>
            </div>
            <div style={{ background: 'white', border: `1px solid ${GL}`, borderRadius: 12, padding: '16px' }}>
              <div style={{ fontSize: 9, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>Product</div>
              {['Streamlined taxonomies and clearer filtering behavior', 'Reduced ambiguity across search results', 'In-platform access request flow replaced manual workarounds'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.6, marginBottom: 6 }}>
                  <span style={{ color: G, flexShrink: 0 }}>✓</span>{t}
                </div>
              ))}
            </div>
          </div>
        </>
      ),
      media: <DseImgSlot label="Before / after — search experience" height={200} />,
    },
    {
      id: 'learnings', num: '09', title: 'Key Learnings',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { num: '01', title: 'Strategy is design work too',    body: 'Research and framing guided product decisions before visual execution — proving that upstream work has direct, measurable impact.' },
            { num: '02', title: 'Cross-functional leadership',    body: 'Led workshops and alignment across technical teams — developers, data scientists, and product owners — to surface shared goals.' },
            { num: '03', title: 'Research-led, proven impact',    body: 'Demonstrated clear outcomes on usability, operational efficiency, and business continuity through a research-led approach.' },
          ].map(item => (
            <div key={item.num} style={{ background: 'white', border: `1px solid ${GL}`, borderLeft: `3px solid ${G}`, borderRadius: '0 10px 10px 0', padding: '14px 16px' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 5 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: G, fontFamily: MAC.font }}>{item.num}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A' }}>{item.title}</span>
              </div>
              <p style={{ fontSize: 12, color: '#555', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      ),
      media: null,
    },
  ]

  const scrollTo = (id) => {
    setActiveTab(id)
    if (!splitView) {
      const el = singleRefs.current[id]
      if (el && scrollRef.current) scrollRef.current.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' })
    } else {
      const el = splitRefs.current[id]
      if (el && textPaneRef.current) textPaneRef.current.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' })
    }
  }

  const trackActive = (container, refs) => {
    const offset = container.scrollTop + 70
    let current = DSE_SECTION_CONTENT[0].id
    for (const s of DSE_SECTION_CONTENT) {
      const el = refs.current[s.id]
      if (el && el.offsetTop <= offset) current = s.id
    }
    setActiveTab(current)
  }

  useEffect(() => {
    const container = splitView ? textPaneRef.current : scrollRef.current
    if (!container) return
    const refs = splitView ? splitRefs : singleRefs
    const onScroll = () => trackActive(container, refs)
    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [splitView])

  const updateTabArrows = () => {
    const el = tabBarRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }
  const shiftTabs = (dir) => {
    const el = tabBarRef.current
    if (el) el.scrollBy({ left: dir * 160, behavior: 'smooth' })
  }
  useEffect(() => {
    const el = tabBarRef.current
    if (!el) return
    updateTabArrows()
    el.addEventListener('scroll', updateTabArrows, { passive: true })
    const ro = new ResizeObserver(updateTabArrows)
    ro.observe(el)
    return () => { el.removeEventListener('scroll', updateTabArrows); ro.disconnect() }
  }, [])

  const SectionHead = ({ num, title }) => (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 18 }}>
      <span style={{ fontSize: 10, fontWeight: 700, color: G, fontFamily: MAC.font }}>{num}</span>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: '#1A1A1A', margin: 0 }}>{title}</h2>
    </div>
  )
  const sectionDiv = (last = false) => ({
    paddingTop: 34, paddingBottom: 34,
    borderBottom: last ? 'none' : `1px solid #D8EDE1`,
  })

  const Hero = () => (
    <div style={{ padding: '32px 40px 24px', background: `linear-gradient(150deg, ${GB} 0%, #EFF8F3 55%, white 100%)`, borderBottom: `1px solid ${GL}` }}>
      <div style={{ fontSize: 9, fontFamily: MAC.font, color: G, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 10 }}>Case Study 02 · Product Design + Research · Petrobras</div>
      <h1 style={{ fontSize: 24, fontWeight: 900, color: '#1A1A1A', margin: '0 0 20px', lineHeight: 1.2 }}>Documents Search Engine <span style={{ color: G }}>✦</span></h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px' }}>
        {[
          { label: 'Role',     value: 'Product Designer' },
          { label: 'Timeline', value: 'Feb 2024 - August 2024' },
          { label: 'Impact',   value: '$1.2M contract renewal secured · UMUX score: 83' },
        ].map(item => (
          <div key={item.label}>
            <div style={{ fontSize: 9, fontFamily: MAC.font, color: G, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 3 }}>{item.label}</div>
            <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const TabArrow = ({ label, dir }) => (
    <button onClick={() => shiftTabs(dir)} style={{ flexShrink: 0, border: 'none', background: 'white', borderBottom: '2px solid transparent', padding: '0 8px', cursor: 'pointer', color: G, fontSize: 14, fontWeight: 700, boxShadow: dir < 0 ? '4px 0 8px rgba(255,255,255,0.9)' : '-4px 0 8px rgba(255,255,255,0.9)', zIndex: 2 }}>{label}</button>
  )

  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── Tab bar ── */}
      <div style={{ flexShrink: 0, background: 'white', borderBottom: `1px solid ${GL}`, display: 'flex', alignItems: 'stretch', zIndex: 10 }}>
        {canScrollLeft && <TabArrow label="‹" dir={-1} />}
        <div ref={tabBarRef} style={{ flex: 1, display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {HD_SECTIONS.map(s => {
            const active = activeTab === s.id
            return (
              <button key={s.id} onClick={() => scrollTo(s.id)} style={{ background: 'none', border: 'none', borderBottom: active ? `2px solid ${G}` : '2px solid transparent', padding: '9px 12px', fontSize: 11, fontFamily: MAC.font, color: active ? G : '#999', fontWeight: active ? 700 : 400, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.15s', marginBottom: -1 }}>{s.title}</button>
            )
          })}
        </div>
        {canScrollRight && <TabArrow label="›" dir={1} />}
        <button
          onClick={() => setSplitView(v => !v)}
          title={splitView ? 'Single column' : 'Split view'}
          style={{ flexShrink: 0, border: 'none', borderLeft: `1px solid ${GL}`, borderBottom: '2px solid transparent', padding: '0 13px', background: splitView ? GB : 'white', color: splitView ? G : '#BBB', cursor: 'pointer', fontSize: 15, transition: 'all 0.15s' }}
        >⊞</button>
      </div>

      {/* ── Single column ── */}
      {!splitView && (
        <div ref={scrollRef} style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: '#FDFCFA' }}>
          <Hero />
          <div style={{ padding: '0 40px 20px' }}>
            {DSE_SECTION_CONTENT.map((s, i) => (
              <div key={s.id} ref={el => { singleRefs.current[s.id] = el }} style={sectionDiv(i === DSE_SECTION_CONTENT.length - 1)}>
                <SectionHead num={s.num} title={s.title} />
                {s.body}
                {s.media}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Split view ── */}
      {splitView && (
        <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
          <div ref={textPaneRef} style={{ flex: 1, minWidth: 0, overflowY: 'auto', background: '#FDFCFA', borderRight: `1px solid ${GL}` }}>
            <Hero />
            <div style={{ padding: '0 28px 20px' }}>
              {DSE_SECTION_CONTENT.map((s, i) => (
                <div key={s.id} ref={el => { splitRefs.current[s.id] = el }} style={sectionDiv(i === DSE_SECTION_CONTENT.length - 1)}>
                  <SectionHead num={s.num} title={s.title} />
                  {s.body}
                </div>
              ))}
            </div>
          </div>
          <div style={{ width: '44%', minWidth: 200, overflowY: 'auto', background: '#F2F9F5', padding: '20px 16px 48px' }}>
            <div style={{ fontSize: 9, fontFamily: MAC.font, color: GL, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Screens & evidence</div>
            {DSE_SECTION_CONTENT.filter(s => s.media).map(s => (
              <div key={s.id} style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 9, fontFamily: MAC.font, color: G, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{s.num} — {s.title}</div>
                {s.media}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

// ─── iPhone carousel for Glist hi-fi screens ─────────────────────────────────

function HiFiScreens({ screens, spread, animation, onExpand, f }) {
  const total = screens.length + 1 // video + images
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % total), 1800)
    return () => clearInterval(id)
  }, [total])

  const commonStyle = (i) => ({
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'contain', display: 'block',
    opacity: i === idx ? 1 : 0,
    transition: 'opacity 0.6s ease',
  })

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 8, marginBottom: 20, alignItems: 'start' }}>
      {/* Spread */}
      <div onClick={() => onExpand(spread, 'All screens')} style={{ cursor: 'zoom-in' }}>
        <img src={spread} alt="All screens" style={{ width: '100%', display: 'block', borderRadius: 8 }} />
      </div>

      {/* Carousel: video first, then images */}
      <div style={{ position: 'relative', overflow: 'hidden', alignSelf: 'stretch', borderRadius: 22 }}>
        <video
          src={animation}
          autoPlay loop muted playsInline
          style={{ ...commonStyle(0), borderRadius: 8 }}
        />
        {screens.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Screen ${i + 1}`}
            style={{ ...commonStyle(i + 1) }}
          />
        ))}
        <div style={{ position: 'absolute', bottom: 7, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4, zIndex: 2 }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{ width: i === idx ? 12 : 5, height: 5, borderRadius: 99, background: i === idx ? '#F4841A' : 'rgba(200,200,200,0.9)', transition: 'all 0.3s ease' }} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Glist Case Study ─────────────────────────────────────────────────────────

const GLIST_SECTIONS = [
  { id: 'problem',   title: 'Problem',       num: '01' },
  { id: 'research',  title: 'Research',      num: '02' },
  { id: 'define',    title: 'Define',        num: '03' },
  { id: 'goal',      title: 'Project Goal',  num: '04' },
  { id: 'solution',  title: 'Solution',      num: '05' },
  { id: 'ideate',    title: 'Ideate',        num: '06' },
  { id: 'prototype', title: 'Prototype',     num: '07' },
  { id: 'testing',   title: 'Testing',       num: '08' },
  { id: 'learnings', title: 'Key Learnings', num: '09' },
]

function GlistCaseStudy({ onOpenPetrobras, onOpenSearch }) {
  const OR       = '#F4841A'
  const GR       = '#5AB482'
  const OR_LIGHT = '#FFF3E8'
  const OR_BG    = '#FFF8F2'
  const f        = MAC.font

  const [expandedImg,    setExpandedImg]    = useState(null)
  const [activeTab,      setActiveTab]      = useState('problem')
  const [canScrollLeft,  setCanScrollLeft]  = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const scrollRef   = useRef(null)
  const tabBarRef   = useRef(null)
  const sectionRefs = useRef({})

  const scrollTo = (id) => {
    setActiveTab(id)
    const el = sectionRefs.current[id]
    const container = scrollRef.current
    if (el && container) container.scrollTo({ top: el.offsetTop - 44, behavior: 'smooth' })
  }

  const updateTabArrows = useCallback(() => {
    const el = tabBarRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const onScroll = () => {
      let current = GLIST_SECTIONS[0].id
      for (const s of GLIST_SECTIONS) {
        const el = sectionRefs.current[s.id]
        if (el && el.getBoundingClientRect().top - container.getBoundingClientRect().top < 80) current = s.id
      }
      setActiveTab(current)
    }
    container.addEventListener('scroll', onScroll)
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    updateTabArrows()
    const el = tabBarRef.current
    if (!el) return
    el.addEventListener('scroll', updateTabArrows)
    const ro = new ResizeObserver(updateTabArrows)
    ro.observe(el)
    return () => { el.removeEventListener('scroll', updateTabArrows); ro.disconnect() }
  }, [updateTabArrows])

  const shiftTabs = (dir) => { tabBarRef.current?.scrollBy({ left: dir * 120, behavior: 'smooth' }) }
  const anchor    = (id) => <div ref={el => { sectionRefs.current[id] = el }} />

  const SectionLabel = ({ n, label }) => (
    <div style={{ fontSize: 9, fontWeight: 700, color: OR, fontFamily: f, textTransform: 'uppercase', letterSpacing: 2.5, marginBottom: 14, marginTop: 34, display: 'flex', alignItems: 'center', gap: 8 }}>
      {n && <span style={{ opacity: 0.5 }}>{n} ·</span>} {label}
      <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, #FFD4A8, transparent)' }} />
    </div>
  )
  const SubLabel = ({ children }) => (
    <div style={{ fontSize: 13, fontWeight: 700, color: '#2A2A2A', fontFamily: f, marginBottom: 10, marginTop: 26, letterSpacing: -0.2 }}>{children}</div>
  )
  const Para = ({ children }) => (
    <p style={{ fontSize: 12, color: '#555', lineHeight: 1.8, margin: '0 0 10px', fontFamily: f }}>{children}</p>
  )
  const Quote = ({ text }) => (
    <div style={{ background: OR_BG, border: `1px solid rgba(244,132,26,0.2)`, borderLeft: `3px solid ${OR}`, borderRadius: '0 10px 10px 0', padding: '12px 16px', margin: '8px 0', fontFamily: f, fontSize: 12, color: '#555', lineHeight: 1.7, fontStyle: 'italic' }}>
      "{text}"
    </div>
  )
  const img = (src, alt = '') => (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
      <div
        role="button" tabIndex={0} aria-label={`Expand image: ${alt}`}
        onClick={() => setExpandedImg({ src, alt })}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setExpandedImg({ src, alt })}
        style={{ position: 'relative', width: '55%', cursor: 'zoom-in', flexShrink: 0 }}
      >
        <img src={src} alt={alt} style={{ width: '100%', borderRadius: 10, display: 'block' }} />
        <div style={{ position: 'absolute', bottom: 6, right: 6, background: 'rgba(0,0,0,0.4)', borderRadius: 5, padding: '2px 7px', fontSize: 9, color: 'rgba(255,255,255,0.88)', fontFamily: f, letterSpacing: 0.5, backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', pointerEvents: 'none' }}>↗ expand</div>
      </div>
    </div>
  )
  const chip = (text) => (
    <span key={text} style={{ background: OR_LIGHT, border: `1px solid rgba(244,132,26,0.25)`, borderRadius: 20, padding: '3px 12px', fontSize: 11, fontFamily: f, color: OR }}>{text}</span>
  )

  const imgLightbox = expandedImg && createPortal(
    <div onClick={() => setExpandedImg(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(10,6,12,0.78)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', zIndex: 999996, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}>
      <div onClick={e => e.stopPropagation()} style={{ animation: 'window-open 0.2s cubic-bezier(0.34,1.56,0.64,1) forwards', position: 'relative', maxWidth: '88vw', maxHeight: '88vh' }}>
        <img src={expandedImg.src} alt={expandedImg.alt} style={{ maxWidth: '88vw', maxHeight: '84vh', borderRadius: 12, display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.5)', objectFit: 'contain' }} />
        <button onClick={() => setExpandedImg(null)} aria-label="Close image" style={{ position: 'absolute', top: -14, right: -14, width: 30, height: 30, borderRadius: '50%', background: 'white', border: 'none', cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>✕</button>
      </div>
    </div>,
    document.body
  )

  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', fontFamily: f }}>
      {imgLightbox}

      {/* ── Tab bar ── */}
      <div style={{ flexShrink: 0, background: 'white', borderBottom: `1px solid rgba(244,132,26,0.2)`, display: 'flex', alignItems: 'stretch', zIndex: 10 }}>
        {canScrollLeft && <button onClick={() => shiftTabs(-1)} style={{ flexShrink: 0, border: 'none', background: 'white', borderBottom: '2px solid transparent', padding: '0 8px', cursor: 'pointer', color: OR, fontSize: 14, fontWeight: 700 }}>‹</button>}
        <div ref={tabBarRef} style={{ flex: 1, display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {GLIST_SECTIONS.map(s => {
            const active = activeTab === s.id
            return <button key={s.id} onClick={() => scrollTo(s.id)} style={{ background: 'none', border: 'none', borderBottom: active ? `2px solid ${OR}` : '2px solid transparent', padding: '9px 12px', fontSize: 11, fontFamily: f, color: active ? OR : '#999', fontWeight: active ? 700 : 400, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.2s', marginBottom: -1 }}>{s.title}</button>
          })}
        </div>
        {canScrollRight && <button onClick={() => shiftTabs(1)} style={{ flexShrink: 0, border: 'none', background: 'white', borderBottom: '2px solid transparent', padding: '0 8px', cursor: 'pointer', color: OR, fontSize: 14, fontWeight: 700 }}>›</button>}
      </div>

      <div ref={scrollRef} style={{ flex: 1, minHeight: 0, overflowY: 'auto', fontFamily: f }}>

      {/* Hero */}
      <div style={{ position: 'relative', background: `linear-gradient(150deg, ${OR_BG} 0%, #FFF8EC 60%, white 100%)`, borderBottom: `1px solid #FFD4A8`, overflow: 'hidden' }}>
        <div style={{ padding: '32px 40px 28px', maxWidth: 460 }}>
          <div style={{ fontSize: 9, fontFamily: f, color: OR, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 10 }}>Case Study · UX & UI Challenge · 2021</div>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#1A1A1A', margin: '0 0 6px', lineHeight: 1.2 }}>Glist <span style={{ color: OR }}>✦</span></h1>
          <p style={{ fontSize: 13, color: '#666', fontFamily: f, margin: '0 0 22px', lineHeight: 1.6 }}>An app to help you easily calculate the amount of food your family needs, and stop wasting it.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px' }}>
            {[
              { label: 'Role',     value: 'UX/UI Designer (sole designer)' },
              { label: 'Timeline', value: '2021' },
              { label: 'Type',     value: 'Personal Challenge' },
              { label: 'Platform', value: 'Mobile · iOS' },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: 9, fontFamily: f, color: OR, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 3 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <img src={glistHero} alt="Glist app mockup" style={{ position: 'absolute', right: -10, bottom: 0, height: '112%', objectFit: 'cover', objectPosition: 'left center', maxWidth: '50%', display: 'block' }} />
      </div>

      <div style={{ padding: '0 40px 56px' }}>

        {/* 01 · Problem */}
        <SectionLabel n="01" label="Problem" />
        <Para>
          Glist started as a challenge to discover a way to help people <strong>reduce food waste</strong> through smarter grocery planning. Most people don't realize how much food they throw away daily, from uneaten leftovers to spoiled produce.
        </Para>

        {/* 02 · Research */}
        <SectionLabel n="02" label="Research" />
        <Para>
          Before defining any solution, I needed to understand how people actually shop. I started with a CSD Matrix to separate what I knew from what I was assuming.
        </Para>
        <div style={{ marginBottom: 16 }}>{img(glistMatriz, 'CSD Matrix')}</div>

        <SubLabel>Quantitative Survey</SubLabel>
        <Para>
          A survey with <strong>68 people across Brazil</strong> explored consumer behavior around grocery shopping: how often they go, whether they make lists, and whether they struggle with quantities.
        </Para>
        <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
          {[{ value: '68', label: 'Participants' }, { value: 'Brazil', label: 'Location' }, { value: 'Quantitative', label: 'Method' }].map(item => (
            <div key={item.label} style={{ background: OR_BG, border: `1px solid rgba(244,132,26,0.25)`, borderRadius: 12, padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: OR, fontFamily: f, lineHeight: 1 }}>{item.value}</div>
              <div style={{ fontSize: 9, color: '#999', fontFamily: f, textTransform: 'uppercase', letterSpacing: 1.5 }}>{item.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
          {[
            { pct: '86.8%', label: 'Use their mobile to keep a grocery list' },
            { pct: '65.2%', label: 'Are responsible for supermarket shopping in their household' },
            { pct: '60%',   label: 'Had problems calculating how much food to buy' },
            { pct: '46%',   label: 'Often forget to buy important items without a list' },
          ].map(item => (
            <div key={item.pct} style={{ background: OR_BG, border: `1px solid rgba(244,132,26,0.2)`, borderRadius: 12, padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: OR, fontFamily: f, lineHeight: 1, flexShrink: 0 }}>{item.pct}</div>
              <div style={{ fontSize: 11, color: '#666', fontFamily: f, lineHeight: 1.55, paddingTop: 2 }}>{item.label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: OR_BG, border: `1px solid rgba(244,132,26,0.2)`, borderRadius: 12, padding: '16px 18px', marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#888', fontFamily: f, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>How often do you shop at the supermarket?</div>
          {[{ label: '1–4 times a week', pct: 36.8 }, { label: 'Weekly', pct: 26.5 }, { label: 'Fortnightly', pct: 23.5 }, { label: 'Monthly', pct: 22.1 }, { label: 'Big + small runs', pct: 3 }].map(row => (
            <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
              <div style={{ fontSize: 10, fontFamily: f, color: '#666', width: 120, flexShrink: 0, lineHeight: 1.3 }}>{row.label}</div>
              <div style={{ flex: 1, height: 8, background: 'rgba(244,132,26,0.12)', borderRadius: 99 }}>
                <div style={{ height: '100%', width: `${row.pct * (100 / 37)}%`, background: `linear-gradient(to right, ${OR}, #FFB347)`, borderRadius: 99 }} />
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: OR, fontFamily: f, width: 36, textAlign: 'right' }}>{row.pct}%</div>
            </div>
          ))}
        </div>

        <SubLabel>Qualitative Interviews</SubLabel>
        <Para>
          I held <strong>5 in-depth interviews</strong> with people responsible for grocery shopping in their households. Three quotes that stayed with me:
        </Para>
        <Quote text="We've been living together since November and we still haven't been able to make purchases for the entire month. We always calculate something wrong." />
        <Quote text="I usually do the list in 10 minutes inside the car before entering the supermarket. When I remember things I write in a WhatsApp group I have with myself." />
        <Quote text="We buy in small quantities. We don't calculate and usually run out of meat until someone buys more." />

        <SubLabel>Empathy Map</SubLabel>
        <div style={{ marginBottom: 16 }}>{img(glistEmpathy, 'Empathy map')}</div>

        {/* 03 · Define */}
        <SectionLabel n="03" label="Define" />
        <Para>
          With the research done, I synthesized what I learned into personas and a user journey to align on who I was designing for and where the real pain lived.
        </Para>
        <div style={{ marginBottom: 16 }}>{img(glistPersonas, 'User personas')}</div>
        <div style={{ marginBottom: 16 }}>{img(glistJourney, 'User journey map')}</div>

        {/* 04 · Project Goal — now earned by research */}
        <SectionLabel n="04" label="Project Goal" />
        <div style={{ background: `linear-gradient(135deg, ${OR_BG}, white)`, border: `1px solid rgba(244,132,26,0.25)`, borderLeft: `4px solid ${OR}`, borderRadius: '0 12px 12px 0', padding: '18px 20px', marginBottom: 4 }}>
          <Para>
            The research made it clear: people needed <strong>an easy and quick way to plan groceries</strong> before going to the supermarket, where they could input their household size, set how many days to plan for, and share the list with others.
          </Para>
          <Para>
            The quantity problem wasn't about willpower or memory. It was about having no tool to help calculate it.
          </Para>
        </div>

        {/* 05 · Solution — now follows naturally */}
        <SectionLabel n="05" label="Solution" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 4 }}>
          {[
            { n: '01', text: 'Input the number of people sharing groceries and set how many days they should last' },
            { n: '02', text: 'App automatically calculates item quantities based on household size' },
            { n: '03', text: 'Users can individually edit amounts, because not everyone eats the same things' },
            { n: '04', text: 'Create and share lists with household members for collaborative shopping' },
          ].map(item => (
            <div key={item.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: OR_BG, border: `1px solid rgba(244,132,26,0.15)`, borderLeft: `3px solid ${OR}`, borderRadius: '0 10px 10px 0', padding: '11px 16px' }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: OR, fontFamily: f, flexShrink: 0, marginTop: 2 }}>{item.n}</span>
              <span style={{ fontSize: 12, color: '#555', fontFamily: f, lineHeight: 1.6 }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* 06 · Ideate */}
        <SectionLabel n="06" label="Ideate" />
        <Para>A moodboard set the tone: <strong>Fast, Practical, Easy, Convenient, Helpful, Handy</strong>. This guided all visual and interaction decisions forward.</Para>
        <div style={{ marginBottom: 16 }}>{img(glistMoodboard, 'Moodboard')}</div>

        {/* 07 · Prototype */}
        <SectionLabel n="07" label="Prototype" />
        <Para>Sketches helped convey ideas quickly, demonstrating functionality and visualizing user flow before investing in higher-fidelity work.</Para>
        <div onClick={() => setExpandedImg({ src: glistSketches, alt: 'Hand sketches' })} style={{ cursor: 'zoom-in', marginBottom: 16, marginLeft: -40, marginRight: -40 }}>
          <img src={glistSketches} alt="Hand sketches" style={{ width: '100%', display: 'block' }} />
        </div>
        <Para>Wireframes combined with user flow helped plan how content would be displayed on screen, giving visibility into structure before any visual design decisions.</Para>
        <div style={{ marginBottom: 16 }}>{img(glistWireframes, 'Wireframes and user flow')}</div>

        <SubLabel>Style Guide</SubLabel>
        <Para>The visual system used <strong>Poppins</strong> as the primary typeface, with a warm orange (#EB8034) as the brand color, reflecting the app's practical and friendly personality.</Para>
        {/* Style guide — Behance-style card collage */}
        <div style={{ position: 'relative', height: 340, marginBottom: 24, overflow: 'hidden' }}>

          {/* Colors — left card, full & visible */}
          <div
            onClick={() => setExpandedImg({ src: glistStyle03, alt: 'Colors' })}
            style={{
              position: 'absolute', left: 0, top: 0, width: '44%', height: '100%',
              cursor: 'zoom-in', overflow: 'hidden',
            }}
          >
            <img src={glistStyle03} alt="Colors" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
          </div>

          {/* Typography — top right, wider than container so it bleeds off the right edge */}
          <div
            onClick={() => setExpandedImg({ src: glistStyle01, alt: 'Typography' })}
            style={{
              position: 'absolute', left: '46%', top: 0, right: -40, height: '48%',
              cursor: 'zoom-in', overflow: 'hidden',
            }}
          >
            <img src={glistStyle01} alt="Typography" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top', display: 'block' }} />
          </div>

          {/* Components — bottom right, same bleed */}
          <div
            onClick={() => setExpandedImg({ src: glistStyle02, alt: 'Components' })}
            style={{
              position: 'absolute', left: '46%', bottom: 0, right: -40, height: '48%',
              cursor: 'zoom-in', overflow: 'hidden',
            }}
          >
            <img src={glistStyle02} alt="Components" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top', display: 'block' }} />
          </div>

        </div>

        <SubLabel>High-Fidelity Screens</SubLabel>
        <HiFiScreens screens={[glistProto05, glistProto06]} spread={glistProto04} animation={glistAnimation} onExpand={(src, alt) => setExpandedImg({ src, alt })} f={f} />

        {/* 08 · Testing */}
        <SectionLabel n="08" label="Testing" />
        <Para>I conducted <strong>5 moderated usability sessions</strong> online, camera and microphone on. Participants were given tasks to complete while thinking aloud. I observed where they hesitated, where they got lost, and what they expected to find but didn't.</Para>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {[{ value: '5', label: 'Sessions' }, { value: 'Online', label: 'Format' }, { value: 'Think-aloud', label: 'Method' }, { value: '4 KPIs', label: 'Mission success · Duration · Exits · Misclicks' }].map(item => (
            <div key={item.label} style={{ flex: 1, background: OR_BG, border: `1px solid rgba(244,132,26,0.15)`, borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: GR, fontFamily: f, lineHeight: 1, marginBottom: 4 }}>{item.value}</div>
              <div style={{ fontSize: 10, color: '#777', fontFamily: f, letterSpacing: 0.5, lineHeight: 1.4 }}>{item.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 4 }}>
          {[
            { observed: 'Users kept tapping the center of the bottom bar expecting to add items, but that button opened the home screen.', change: 'Changed the main bottom bar icon to a + button for quick item adding.' },
            { observed: 'While at the store, users had no way to track what they had already put in the cart. They kept scrolling back up to recheck.', change: 'Added a checkbox before each item so users can mark it as purchased while shopping.' },
            { observed: 'Users with long lists struggled to find specific items. They expected a search bar at the top of the category view.', change: 'Added a search bar above the categories to quickly locate items already on the list.' },
          ].map((item, i) => (
            <div key={i} style={{ border: `1px solid rgba(0,0,0,0.07)`, borderRadius: 12, overflow: 'hidden', background: `linear-gradient(to right, white 0%, white 48%, rgba(90,180,130,0.10) 58%, rgba(90,180,130,0.13) 100%)` }}>
              <div style={{ display: 'flex', gap: 0 }}>
                <div style={{ flex: 1, padding: '14px 16px' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#888', fontFamily: f, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>👁 Observed</div>
                  <div style={{ fontSize: 11, color: '#555', fontFamily: f, lineHeight: 1.65 }}>{item.observed}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 10px', color: GR, fontSize: 16 }}>→</div>
                <div style={{ flex: 1, padding: '14px 16px' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#3D8B61', fontFamily: f, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>✦ Changed</div>
                  <div style={{ fontSize: 11, color: '#444', fontFamily: f, lineHeight: 1.65, fontWeight: 500 }}>{item.change}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 09 · Key Learnings */}
        <SectionLabel n="09" label="Key Learnings" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 4 }}>
          {[
            { title: "Don't reinvent the wheel", body: "Users expect certain behaviors. Respect them to avoid cognitive errors and unnecessary friction." },
            { title: "People need to find things easily", body: "Simple flows create joy. Don't make users work hard when they're in a hurry to get to the store." },
            { title: "Always ask how they already do it", body: "People are solving your problem already. Understand how and why, then build on top of that." },
          ].map(item => (
            <div key={item.title} style={{ background: OR_BG, border: `1px solid rgba(244,132,26,0.2)`, borderRadius: 12, padding: '16px 14px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#1A1A1A', marginBottom: 8, lineHeight: 1.4 }}>{item.title}</div>
              <div style={{ fontSize: 11, color: '#666', fontFamily: f, lineHeight: 1.65 }}>{item.body}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 28 }}>
          {['UX Research', 'UI Design', 'Usability Testing', 'Double Diamond', 'Mobile Design', 'Personal Challenge'].map(t => chip(t))}
        </div>

      </div>
    </div>
  )
}

// ─── Desktop icon ─────────────────────────────────────────────────────────────

function DesktopIcon({ label, onClick, isOpen, isHome = false, fileType = null, customIcon = null }) {
  const [hovered, setHovered] = useState(false)
  const [bouncing, setBouncing] = useState(false)

  const handleClick = () => {
    setBouncing(true)
    setTimeout(() => setBouncing(false), 600)
    onClick()
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        padding: '6px 8px',
        borderRadius: 8,
        cursor: 'pointer',
        background: hovered ? 'rgba(255,182,210,0.3)' : 'transparent',
        border: hovered ? '1px solid rgba(255,150,200,0.4)' : '1px solid transparent',
        width: 80,
        textAlign: 'center',
        userSelect: 'none',
        animation: bouncing ? 'icon-bounce 0.55s cubic-bezier(0.34,1.56,0.64,1)' : 'none',
        transform: hovered && !bouncing ? 'scale(1.08)' : 'scale(1)',
        transition: bouncing ? 'none' : 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      {isHome
        ? <GlitterStar size={46} />
        : customIcon
          ? customIcon
          : fileType
            ? <FileIcon type={fileType} size={46} />
            : <ClassicFolder isOpen={isOpen} size={46} />
      }
      <span style={{
        fontSize: 11,
        fontFamily: MAC.font,
        color: 'white',
        textShadow: '0 1px 4px rgba(0,0,0,0.7), 0 0 8px rgba(0,0,0,0.4)',
        lineHeight: 1.3,
        wordBreak: 'break-word',
        maxWidth: 76,
      }}>
        {label}
      </span>
    </div>
  )
}

// ─── macOS menu bar ───────────────────────────────────────────────────────────

function MacMenuBar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now  = new Date()
      let h      = now.getHours()
      const m    = String(now.getMinutes()).padStart(2, '0')
      const ampm = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
      setTime(`${h}:${m} ${ampm}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: 24,
      background: 'rgba(255,240,248,0.85)',
      backdropFilter: 'blur(20px) saturate(1.4)',
      WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
      borderBottom: '1px solid rgba(220,140,180,0.2)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      zIndex: 99999,
      fontFamily: MAC.font,
      fontSize: 13,
      color: '#5A2040',
      userSelect: 'none',
    }}>
      <span style={{ fontSize: 14, marginRight: 16 }}>✦</span>
      {['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'].map(item => (
        <span key={item} style={{ marginRight: 14, cursor: 'default', opacity: item === 'Finder' ? 1 : 0.6 }}>
          {item}
        </span>
      ))}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12, opacity: 0.75, fontSize: 12 }}>
        <span>🩷</span>
        <span>📶</span>
        <span>{time}</span>
      </div>
    </div>
  )
}

// ─── Mac Dock ─────────────────────────────────────────────────────────────────

function MacDock({ projects, windows, onOpen }) {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div style={{
      position: 'fixed',
      bottom: 14,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      padding: '10px 18px 8px',
      background: 'rgba(255,255,255,0.18)',
      backdropFilter: 'blur(22px)',
      WebkitBackdropFilter: 'blur(22px)',
      border: '1px solid rgba(255,255,255,0.35)',
      borderRadius: 22,
      boxShadow: '0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.4)',
      zIndex: 99990,
    }}>
      {projects.map(p => {
        const isHovered = hoveredId === p.id
        const isOpen = windows[p.id]?.isOpen && !windows[p.id]?.isMinimized
        const iconSize = isHovered ? 62 : 46
        return (
          <div
            key={p.id}
            onClick={() => onOpen(p.id)}
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              cursor: 'pointer',
              position: 'relative',
              zIndex: isHovered ? 10 : 1,
              transition: 'transform 0.18s cubic-bezier(0.34,1.56,0.64,1)',
              transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
            }}
          >
            {/* Tooltip label */}
            {isHovered && (
              <div style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-6px)',
                background: 'rgba(30,18,26,0.82)',
                color: 'white',
                fontSize: 11,
                fontFamily: MAC.font,
                padding: '3px 9px',
                borderRadius: 7,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}>
                {p.name}
              </div>
            )}

            {/* Icon */}
            <div style={{
              width: iconSize,
              height: iconSize,
              transition: 'width 0.18s cubic-bezier(0.34,1.56,0.64,1), height 0.18s cubic-bezier(0.34,1.56,0.64,1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {p.icon
                ? p.icon(iconSize)
                : <ClassicFolder isOpen={isOpen} size={iconSize} />
              }
            </div>

            {/* Open indicator dot */}
            <div style={{
              width: 4, height: 4,
              borderRadius: '50%',
              background: isOpen ? 'rgba(255,255,255,0.85)' : 'transparent',
              transition: 'background 0.2s',
              flexShrink: 0,
            }} />
          </div>
        )
      })}
    </div>
  )
}

// ─── Desktop ──────────────────────────────────────────────────────────────────

function Desktop({ windows, onOpen }) {
  const [burst, setBurst] = useState(null)

  const leftIcons = [
    { id: 'home',   label: 'tha.design', isHome: true,  fileType: null    },
    { id: 'about',  label: 'about.txt',    isHome: false, fileType: 'txt'   },
    { id: 'resume', label: 'resume.pdf',   isHome: false, fileType: 'pdf'   },
  ]

  const handleDesktopClick = (e) => {
    // Only fire on direct desktop click (not on windows or icons)
    if (e.target !== e.currentTarget) return
    setBurst({ x: e.clientX, y: e.clientY, id: Date.now() })
    setTimeout(() => setBurst(null), 600)
  }

  return (
    <div
      onClick={handleDesktopClick}
      style={{
        position: 'fixed',
        inset: 0,
        paddingTop: 24,
        // Muted dusty pink checkerboard
        backgroundColor: '#9E8A96',
        backgroundImage: `
          linear-gradient(45deg, #8A7480 25%, transparent 25%),
          linear-gradient(-45deg, #8A7480 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #8A7480 75%),
          linear-gradient(-45deg, transparent 75%, #8A7480 75%)
        `,
        backgroundSize: '28px 28px',
        backgroundPosition: '0 0, 0 14px, 14px -14px, -14px 0px',
        overflow: 'hidden',
      }}
    >
      {/* Ambient twinkling stars */}
      <AmbientStars />

      {/* Left — personal folders */}
      <div style={{ position: 'absolute', left: 16, top: 40, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {leftIcons.map(icon => (
          <DesktopIcon
            key={icon.id}
            label={icon.label}
            isOpen={windows[icon.id]?.isOpen}
            onClick={() => onOpen(icon.id)}
            isHome={icon.isHome}
            fileType={icon.fileType}
          />
        ))}
      </div>

      {/* Case studies hint label above dock */}
      <div style={{
        position: 'absolute',
        bottom: 102,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'rgba(255,240,248,0.18)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,200,230,0.35)',
        borderRadius: 20,
        padding: '5px 14px 5px 10px',
        pointerEvents: 'none',
        animation: 'hint-float 3s ease-in-out infinite',
      }}>
        <span style={{ fontSize: 13, color: '#FFD700' }}>✦</span>
        <span style={{
          fontSize: 11,
          fontFamily: MAC.font,
          color: 'rgba(255,235,248,0.95)',
          letterSpacing: 0.4,
          whiteSpace: 'nowrap',
        }}>click to explore my case studies</span>
      </div>

      {/* Click burst */}
      {burst && <ClickBurst key={burst.id} burst={burst} />}
    </div>
  )
}

// ─── Portfolio (main export) ──────────────────────────────────────────────────

export default function Portfolio() {
  const { windows, positions, openWindow, closeWindow, minimizeWindow, focusWindow, setPosition } = useWindowManager()
  const [snappedWindows, setSnappedWindows] = useState({})
  const [snapPreview, setSnapPreview] = useState(null) // 'left' | 'right' | null
  const [isDragging, setIsDragging] = useState(false)

  const openVisible = Object.values(windows).filter(w => w.isOpen && !w.isMinimized)
  const showHandle = isDragging && openVisible.length >= 2

  const handleClose = useCallback((id) => {
    closeWindow(id)
    setSnappedWindows(prev => {
      const next = { ...prev }
      delete next[id]
      return Object.keys(next).length < 2 ? {} : next
    })
  }, [closeWindow])

  const handleMinimize = useCallback((id) => {
    minimizeWindow(id)
    setSnappedWindows(prev => {
      const next = { ...prev }
      delete next[id]
      return Object.keys(next).length < 2 ? {} : next
    })
  }, [minimizeWindow])

  const handleDragStart = useCallback(() => {
    if (openVisible.length >= 2) setIsDragging(true)
  }, [openVisible.length])

  const handleDragMove = useCallback((id, pos, cursorX) => {
    if (!showHandle) return
    const center = window.innerWidth / 2
    if (Math.abs(cursorX - center) < 80) {
      setSnapPreview(cursorX < center ? 'left' : 'right')
    } else {
      setSnapPreview(null)
    }
  }, [showHandle])

  const handleDragEnd = useCallback((id, pos, cursorX) => {
    setIsDragging(false)
    setSnapPreview(null)
    if (!showHandle) return
    const center = window.innerWidth / 2
    if (Math.abs(cursorX - center) < 80) {
      const side = cursorX < center ? 'left' : 'right'
      setPosition(id, side === 'left' ? { x: 0, y: 24 } : { x: center, y: 24 })
      setSnappedWindows(prev => ({ ...prev, [id]: side }))

      const other = openVisible.find(w => w.id !== id)
      if (other) {
        const otherSide = side === 'left' ? 'right' : 'left'
        setPosition(other.id, otherSide === 'left' ? { x: 0, y: 24 } : { x: center, y: 24 })
        setSnappedWindows(prev => ({ ...prev, [other.id]: otherSide }))
      }
    }
  }, [showHandle, openVisible, setPosition])

  const handleSnapRelease = useCallback(() => {
    setSnappedWindows({})
  }, [])

  return (
    <div style={{ cursor: 'default', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <MacMenuBar />
      <Desktop windows={windows} onOpen={openWindow} />

      {/* Snap preview overlay */}
      {snapPreview && (
        <div style={{
          position: 'fixed',
          left: snapPreview === 'left' ? 0 : '50%',
          top: 24,
          width: '50%',
          height: 'calc(100vh - 24px)',
          background: 'rgba(232,96,154,0.08)',
          border: '2px solid rgba(232,96,154,0.35)',
          borderRadius: 10,
          boxSizing: 'border-box',
          zIndex: 999,
          pointerEvents: 'none',
        }} />
      )}

      {/* Center snap handle — visible when 2+ windows open */}
      {showHandle && (
        <div style={{
          position: 'fixed',
          left: '50%',
          top: 24,
          transform: 'translateX(-50%)',
          width: snapPreview ? 4 : 2,
          height: 'calc(100vh - 24px)',
          background: snapPreview ? MAC.rose : 'rgba(232,96,154,0.25)',
          borderRadius: 2,
          zIndex: 1000,
          pointerEvents: 'none',
          transition: 'width 0.15s ease, background 0.15s ease',
        }} />
      )}

      {/* Floating windows */}
      {Object.values(windows).filter(w => w.isOpen).map(w => (
        <MacWindow
          key={w.id}
          id={w.id}
          title={w.title}
          isMinimized={w.isMinimized}
          z={w.z}
          pos={positions[w.id]}
          onClose={handleClose}
          onMinimize={handleMinimize}
          onFocus={focusWindow}
          onMove={setPosition}
          snapSide={snappedWindows[w.id] || null}
          onDragStart={handleDragStart}
          onDragMove={handleDragMove}
          onDragEnd={handleDragEnd}
          onSnapRelease={handleSnapRelease}
          width={
            w.id === 'home'          ? 700 :
            w.id === 'projects'      ? 580 :
            w.id === 'proj-petrobras'? 780 :
            w.id === 'proj-search'   ? 780 :
            w.id === 'proj-glist'    ? 720 :
            w.id.startsWith('proj-') ? 500 : 540
          }
          height={
            w.id === 'home'          ? 520 :
            w.id === 'about'         ? 560 :
            w.id === 'projects'      ? 340 :
            w.id === 'proj-petrobras'? 580 :
            w.id === 'proj-search'   ? 580 :
            w.id === 'proj-glist'    ? 560 :
            w.id.startsWith('proj-') ? 380 : 420
          }
          toolbar={
            w.id === 'home'           ? <BrowserToolbar url="tha.design" /> :
            w.id === 'proj-petrobras' ? <BrowserToolbar url="tha.design/historical-data" /> :
            w.id === 'proj-search'    ? <BrowserToolbar url="tha.design/documents-search-engine" /> :
            null
          }
        >
          {w.id === 'home'              && <HomeContent />}
          {w.id === 'about'             && <AboutContent />}
          {w.id === 'resume'            && <ResumeContent />}
          {w.id === 'projects'          && <ProjectsContent onOpenProject={openWindow} />}
          {w.id === 'proj-petrobras' && <PetrobrasCaseStudy onOpenNext={() => openWindow('proj-search')} />}
          {w.id === 'proj-search'    && <DocumentsSearchEngineCaseStudy />}
          {w.id === 'proj-glist'     && <GlistCaseStudy />}
                    {w.id.startsWith('proj-') && w.id !== 'proj-petrobras' && w.id !== 'proj-search' && w.id !== 'proj-glist' && <ProjectDetailContent projectId={w.id} />}
        </MacWindow>
      ))}

      {/* Floating dock — rendered last so it's above everything */}
      <MacDock projects={PROJECT_DATA} windows={windows} onOpen={openWindow} />

      {/* ✦ Sparkle cursor trail */}
      <SparkleTrail />
    </div>
  )
}

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

import glistHero        from './assets/glist/hero.jpg'
import glistEmpathy    from './assets/glist/empathy-map.png'
import glistPersonas   from './assets/glist/personas.jpg'
import glistMatriz     from './assets/glist/matriz-csd.jpg'
import glistJourney    from './assets/glist/user-journey.jpg'
import glistMoodboard  from './assets/glist/moodboard.jpg'
import glistSketches   from './assets/glist/sketches.jpg'
import glistWireframes from './assets/glist/wireframes.jpg'
import glistStyle01    from './assets/glist/styleguide-01.png'
import glistStyle02    from './assets/glist/styleguide-02.jpg'
import glistStyle03    from './assets/glist/styleguide-03.jpg'
import glistProto01    from './assets/glist/prototype01.jpg'
import glistProto02    from './assets/glist/prototype02.jpg'
import glistProto03    from './assets/glist/prototype03.jpg'
import glistProto04    from './assets/glist/prototype04.jpg'
import glistProto05    from './assets/glist/prototype05.jpg'
import glistProto06    from './assets/glist/prototype06.jpg'
import glistUsertest   from './assets/glist/usertest.jpg'
import glistAnimation  from './assets/glist/animation-transparent.webm'

import hdContext           from './assets/hd-context.png'
import hdProductFraming    from './assets/hd-product-framing.jpg'
import hdUnderstandingUsers from './assets/hd-understanding-users.jpg'
import hdUnderstanding      from './assets/hd-understanding.jpg'
import hdDecisions          from './assets/hd-decisions.gif'
import hdHifi1              from './assets/hd-hifi1.jpg'
import hdHifi2              from './assets/hd-hifi2.jpg'
import hdHifi3              from './assets/hd-hifi3.jpg'
import hdLofi1              from './assets/hd-lofi1.jpg'
import hdLofi2              from './assets/hd-lofi2.jpg'

import dseLeanCanvas  from './assets/dse/dse-lean-canvas.jpg'
import dseValueProp   from './assets/dse/dse-value-prop.jpg'
import dseResearch    from './assets/dse/dse-research.jpg'
import dseIa          from './assets/dse/dse-ia.jpg'
import dseAccess      from './assets/dse/dse-access.jpg'
import dseUi          from './assets/dse/dse-ui.jpg'
import dseFilterTree  from './assets/dse/dse-filter-tree.png'

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
    contact:         { id: 'contact',       title: 'contact.txt',             isOpen: false, isMinimized: false, z: 10 },
  })

  const [positions, setPositions] = useState(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const cx = (w) => Math.max(20, Math.round((vw - w) / 2))
    const cy = (h) => Math.max(44, Math.round((vh - h) / 2))
    return {
      home:            { x: cx(700), y: Math.max(44, cy(520) - 50) },
      about:           { x: cx(600), y: cy(560) },
      resume:          { x: cx(580), y: cy(520) },
      projects:        { x: cx(580), y: cy(340) },
      'proj-cesar':    { x: cx(500), y: cy(380) },
      'proj-bancobr':  { x: cx(500), y: cy(380) },
      'proj-samsung':  { x: cx(500), y: cy(380) },
      'proj-petrobras':{ x: cx(780), y: cy(580) },
      'proj-search':   { x: cx(780), y: cy(580) },
      'proj-glist':    { x: cx(720), y: cy(560) },
      contact:         { x: cx(480), y: cy(500) },
    }
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

// ─── ✦ ChatBubbleIcon — Y2K messenger style ──────────────────────────────────

function ChatBubbleIcon({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(1px 2px 4px rgba(232,96,154,0.45))' }}
    >
      {/* Big bubble */}
      <rect x="2" y="4" width="32" height="22" rx="7" fill="#E8609A" />
      <path d="M8 26 L5 33 L16 27" fill="#E8609A" />
      {/* Dot trio */}
      <circle cx="10" cy="15" r="2.2" fill="white" />
      <circle cx="18" cy="15" r="2.2" fill="white" />
      <circle cx="26" cy="15" r="2.2" fill="white" />
      {/* Small bubble (reply) */}
      <rect x="16" y="22" width="27" height="17" rx="6" fill="#FFB6D9" />
      <path d="M38 39 L43 44 L32 40" fill="#FFB6D9" />
      {/* Dot duo */}
      <circle cx="23" cy="30.5" r="1.8" fill="white" />
      <circle cx="30" cy="30.5" r="1.8" fill="white" />
      <circle cx="37" cy="30.5" r="1.8" fill="white" />
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
const DOCK_CLEARANCE = 80 // dock bottom offset (14) + dock height (~66)

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
      setSize({ w: window.innerWidth, h: window.innerHeight - 24 - DOCK_CLEARANCE })
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
        height: maximized ? window.innerHeight - 24 - DOCK_CLEARANCE : size.h,
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
    { icon: '✦',  title: 'UI Design',      desc: 'Pixel-perfect visual design, component libraries and vibe coding.' },
    { icon: '◈',  title: 'Strategy',       desc: 'Aligning design decisions with business goals, OKRs and user needs.' },
    { icon: '◎',  title: 'Facilitation',   desc: 'Leading product strategy workshops, lean inception sessions and design thinking for cross-functional teams.' },
    { icon: '▷',  title: 'Prototyping',    desc: 'High-fidelity interactive prototypes for testing and stakeholder alignment.' },
    { icon: '♡',  title: 'Leadership',     desc: 'Mentoring designers and facilitating cross-functional collaboration.' },
  ]

  const clients = [
    { name: 'Petrobras',      logo: logoPetrobras },
    { name: 'Samsung',        logo: logoSamsung },
    { name: 'Banco do Brasil',logo: logoBancoBrasil, logoHeight: 50 },
    { name: 'CESAR',          logo: logoCesar },
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
              A Product Designer at{' '}
              <strong style={{ color: MAC.rose }}>CESAR</strong>
              {' '}(Brazil's largest innovation center), with{' '}
              <strong style={{ color: MAC.rose }}>6+ years</strong>{' '}
              building digital products across oil & gas, finance, and government.
              I turn deep research into strategy, and strategy into things people actually use.
            </p>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75 }}>
              I also researched AI in healthcare for my Master's, lead a digital program
              with the Pernambuco Government, and mentor the next generation of designers.
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
              <div style={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={c.logo} alt={c.name} style={{ height: c.logoHeight ?? 34, objectFit: 'contain' }} />
              </div>
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
              Product Design (UX/UI) · Service Design · Design Strategy
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
          I design at the intersection of people, systems, and complexity, which more often than not means
          I'm the one in the room asking{' '}
          <strong style={{ color: MAC.rose }}>"but why does it work this way?"</strong>{' '}
          before anyone opens Figma.
        </p>
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: '0 0 10px' }}>
          Based in Recife (born and raised in Manaus), I've spent 6+ years working with companies
          across oil & gas, finance, and government, turning messy, complex problems into products
          that people actually want to use.
        </p>
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: '0 0 10px' }}>
          My Master's research brought me into{' '}
          <strong style={{ color: MAC.rose }}>AI in healthcare</strong>, using Design Futures and
          Transition Design to imagine what comes next, not just what exists now.
        </p>
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: '0 0 10px' }}>
          I lead the{' '}
          <strong style={{ color: MAC.rose }}>Digital Agents Program</strong>{' '}
          with the Government of Pernambuco, where non-technical civil servants design ideas to bring
          public services into the digital world. I also coordinate{' '}
          <strong style={{ color: MAC.rose }}>FAST</strong>, a data-driven design program where junior
          designers and career-changers learn to work with data without losing sight of the people
          behind the numbers. We won the{' '}
          <strong style={{ color: MAC.rose }}>Brazilian Design Award 2025</strong>.
        </p>
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: 0 }}>
          Design, to me, is less about screens and more about the decisions that shape them,
          and the people those decisions are made with, and for.
        </p>

        {/* Skill tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, margin: '18px 0 0' }}>
          {['Design Strategy', 'Product Design', 'User Research', 'Prototyping', 'Facilitation', 'UX Writing', 'Data-Driven Design', 'Design Futures', 'Mentoring', 'Public Sector'].map(tag => (
            <span key={tag} style={{
              background: '#FFF0F6', border: '1px solid #F0C8DC', borderRadius: 20,
              padding: '4px 13px', fontSize: 11, fontFamily: MAC.font, color: MAC.titleText,
            }}>
              {tag}
            </span>
          ))}
        </div>

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
              { icon: '🎓', title: 'UX Instructor', desc: 'Teaching design and the methods behind it — so students understand what each tool does and how to adapt it, not just follow a process.' },
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
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: 0 }}>
          You'll likely find me planning my next trip, exploring new tools to refine my craft, or enjoying a good book with a chocolate beside me. 🍫
        </p>

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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#1A1A1A', margin: 0, fontFamily: "'Montserrat', sans-serif" }}>Thais Lopes</h1>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <a
              href="https://www.linkedin.com/in/thaiss-lopes/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                background: `linear-gradient(135deg, ${P} 0%, ${R} 100%)`,
                color: 'white', fontSize: 11, fontWeight: 700,
                fontFamily: MAC.font, textDecoration: 'none',
                padding: '7px 14px', borderRadius: 20,
                boxShadow: '0 3px 12px rgba(232,96,154,0.3)',
              }}
            >
              in LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1VJu33U0_8JfcbyE5tr4GKkH9nxf1bA_t/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                background: `linear-gradient(135deg, ${P} 0%, ${R} 100%)`,
                color: 'white', fontSize: 11, fontWeight: 700,
                fontFamily: MAC.font, textDecoration: 'none',
                padding: '7px 14px', borderRadius: 20,
                boxShadow: '0 3px 12px rgba(232,96,154,0.3)',
              }}
            >
              ↓ Download CV
            </a>
          </div>
        </div>
        <div style={{ fontSize: 12, color: R, fontFamily: MAC.font, marginBottom: 12 }}>Product Design (UX/UI) · Service Design · Design Strategy</div>
        <div style={{ fontSize: 11, color: '#666', lineHeight: 1.7, maxWidth: 420, marginBottom: 16 }}>Experience delivering digital products with measurable business impact (Oil &amp; Gas, Finance, Tech).</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 24px' }}>
          {[
            { icon: '📍', text: 'Recife, PE – Brazil (open to relocation)' },
            { icon: '📱', text: '+55 92 99137 2057' },
            { icon: '✉️', text: 'thaislopesdesign@gmail.com' },
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

const PROJECT_DATA_PT = [
  { id: 'proj-petrobras', name: 'dados históricos', tag: 'UX Industrial', role: 'UX Designer', period: '2019–2020', desc: 'Arquitetura de informação e UX para transformação digital no setor energético. Tradução de fluxos industriais complexos em interfaces digitais intuitivas.', logo: logoPetrobras, frames: [], accent: '#009B3A', icon: (size) => <HistoricalDataIcon size={size} /> },
  { id: 'proj-search',    name: 'buscador de documentos', tag: 'Product Design + Pesquisa', role: 'Product Designer', period: '2023–Atual', desc: 'Plataforma de busca e análise de documentos para times de geociências. Liderança de pesquisa, síntese e decisões de design que garantiram a renovação de contrato.', logo: logoPetrobras, frames: [], accent: '#005020', icon: (size) => <DocumentsSearchIcon size={size} /> },
  { id: 'proj-glist',     name: 'glist', tag: 'Desafio UX & UI', role: 'UX/UI Designer', period: '2021', desc: 'Um app para ajudar famílias a calcular facilmente a quantidade de alimentos necessária — reduzindo desperdício com um planejamento de compras mais inteligente.', frames: [], accent: '#F4841A', icon: (size) => <GlistIcon size={size} /> },
]

function ProjectsContent({ onOpenProject, lang = 'en' }) {
  const [hovered, setHovered] = useState(null)
  const data = lang === 'pt' ? PROJECT_DATA_PT : PROJECT_DATA

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
        {data.map(p => (
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

// ─── PasswordGate ────────────────────────────────────────────────────────────

const CASE_PASSWORD = 'welcome14'

function PasswordGate({ children, lang = 'en' }) {
  const [unlocked, setUnlocked]   = useState(false)
  const [value,    setValue]      = useState('')
  const [show,     setShow]       = useState(false)
  const [error,    setError]      = useState(false)
  const [shaking,  setShaking]    = useState(false)

  if (unlocked) return children

  const PG = lang === 'pt'
    ? { title: 'Case study protegido', sub: 'Este case está sob NDA.\nDigite a senha para continuar.', wrong: 'Senha incorreta. Tente novamente.', enter: 'Entrar ✦', placeholder: 'senha' }
    : { title: 'Protected case study', sub: 'This case is under NDA.\nEnter the password to continue.', wrong: 'Wrong password. Try again.', enter: 'Enter ✦', placeholder: 'password' }

  const attempt = () => {
    if (value === CASE_PASSWORD) {
      setUnlocked(true)
    } else {
      setError(true)
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div style={{
      width: '100%', height: '100%', minHeight: 400,
      background: 'linear-gradient(145deg, #FFF5F9 0%, #FFE8F3 50%, #F5EAFF 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        background: 'white',
        borderRadius: 28,
        padding: '44px 40px 40px',
        boxShadow: '0 24px 80px rgba(200,60,120,0.18), 0 0 0 1px rgba(220,120,160,0.18)',
        width: 300,
        textAlign: 'center',
        animation: shaking ? 'shake 0.5s ease' : 'gate-in 0.4s cubic-bezier(0.34,1.56,0.64,1)',
      }}>
        <div style={{ fontSize: 42, marginBottom: 18, lineHeight: 1 }}>🔒</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8, fontFamily: MAC.font }}>
          {PG.title}
        </div>
        <div style={{ fontSize: 12, color: '#888', lineHeight: 1.6, marginBottom: 28 }}>
          {PG.sub.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
        </div>

        {/* input row */}
        <div style={{ position: 'relative', marginBottom: 14 }}>
          <input
            type={show ? 'text' : 'password'}
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && attempt()}
            placeholder={PG.placeholder}
            style={{
              width: '100%', boxSizing: 'border-box',
              border: `1.5px solid ${error ? MAC.red : 'rgba(220,120,160,0.35)'}`,
              borderRadius: 14, outline: 'none',
              padding: '11px 40px 11px 14px', fontSize: 13,
              background: '#FFF9FC', color: '#333',
              fontFamily: MAC.font, cursor: 'text',
              transition: 'border-color 0.2s',
            }}
          />
          <button
            onClick={() => setShow(s => !s)}
            style={{
              position: 'absolute', right: 12, top: '50%',
              transform: 'translateY(-50%)',
              border: 'none', background: 'transparent',
              fontSize: 14, color: '#CCC', cursor: 'pointer',
              padding: 0, lineHeight: 1,
            }}
          >{show ? '🙈' : '👁️'}</button>
        </div>

        {error && (
          <div style={{ fontSize: 11, color: MAC.red, marginBottom: 12, fontFamily: MAC.font }}>
            {PG.wrong}
          </div>
        )}

        <button
          onClick={attempt}
          style={{
            width: '100%', padding: '12px',
            background: `linear-gradient(135deg, ${MAC.pink} 0%, ${MAC.rose} 100%)`,
            border: 'none', borderRadius: 14,
            color: 'white', fontSize: 13, fontWeight: 700,
            fontFamily: MAC.font, cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(232,96,154,0.35)',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          {PG.enter}
        </button>
      </div>
    </div>
  )
}

// ─── PetrobrasCaseStudy ───────────────────────────────────────────────────────

function SimpleCarousel({ images, accentColor, borderColor }) {
  const [idx, setIdx] = useState(0)
  return (
    <div style={{ position: 'relative' }}>
      <img src={images[idx]} alt={`Slide ${idx + 1}`} style={{ width: '100%', borderRadius: 8, display: 'block' }} />
      {images.length > 1 && <>
        <button onClick={() => setIdx(i => (i - 1 + images.length) % images.length)} style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.88)', border: `1px solid ${borderColor}`, borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', fontSize: 15, color: accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', lineHeight: 1 }}>‹</button>
        <button onClick={() => setIdx(i => (i + 1) % images.length)} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.88)', border: `1px solid ${borderColor}`, borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', fontSize: 15, color: accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', lineHeight: 1 }}>›</button>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 8 }}>
          {images.map((_, i) => (
            <div key={i} onClick={() => setIdx(i)} style={{ width: 6, height: 6, borderRadius: '50%', background: i === idx ? accentColor : borderColor, cursor: 'pointer', transition: 'background 0.2s' }} />
          ))}
        </div>
      </>}
    </div>
  )
}

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

function PetrobrasCaseStudy({ onOpenSearch, onOpenGlist }) {
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
      <div style={{ fontSize: 10, color: ROSE, fontFamily: MAC.font, fontWeight: 700 }}>· {attr}</div>
    </div>
  )

  // ── Section content (body + media separated) ──────────────────────────────
  const SECTION_CONTENT = [
    {
      id: 'context', num: '01', title: 'Context',
      body: (
        <>
          {para('Pipeline inspections in pre-salt reservoirs are critical to detecting and preventing stress corrosion cracking caused by CO₂ (SCC-CO₂). Until this project, data from those inspections was manually managed in <strong>spreadsheets and PowerPoint files</strong>, with little traceability, duplicated effort across teams, and frequent errors in data processing.')}
          {para('The need for a centralized, digital system had become urgent: not only to improve operational efficiency, but also to <strong>support strategic decisions through reliable, accessible data</strong>.')}
        </>
      ),
      media: <img src={hdContext} alt="Before state: legacy spreadsheet workflow" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
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
                  <span style={{ color: '#CCC', flexShrink: 0 }}>·</span>{t}
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
            {[{ day: 'Day 01', focus: 'Product vision, pain point mapping, user roles' }, { day: 'Day 02', focus: 'Ideation, card sorting, sketchstorming' }, { day: 'Day 03', focus: 'Technical, business, and UX review: scope sequencing' }].map(item => (
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
              <div style={{ fontSize: 9, fontWeight: 700, color: '#AAA', fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Deferred: and why</div>
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
          {para("Early concepts evolved into high-fidelity prototypes using the company's Design System, ensuring visual consistency and alignment with internal platform standards. As the <strong>sole designer</strong>, I created all flows in Figma and partnered closely with developers.")}
        </>
      ),
      media: (
        <>
          {/* Low Fidelity */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.8, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 18, height: 1.5, background: ROSE_LIGHT }} />
              Low Fidelity
              <span style={{ display: 'inline-block', flex: 1, height: 1.5, background: ROSE_LIGHT }} />
            </div>
            <SimpleCarousel images={[hdLofi1, hdLofi2]} accentColor={ROSE} borderColor={ROSE_LIGHT} />
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
              <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Moderated: Primary Users</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: ROSE, lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, marginBottom: 10 }}>task success rate</div>
              <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7, borderTop: `1px solid #E5EFF8`, paddingTop: 10 }}>All 13 tasks completed. Users flagged inconsistencies in filter behavior and terminology.</div>
            </div>
            <div style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '16px' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#AAA', fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Unmoderated: via Useberry</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#90C4A8', lineHeight: 1 }}>67%</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, marginBottom: 10 }}>task completion success</div>
              <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7, borderTop: `1px solid #E5EFF8`, paddingTop: 10 }}>Identified gaps in dashboard clarity and data interpretation, informing v2 priorities.</div>
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
              { metric: '100%', sub: 'task success, moderated tests' },
              { metric: 'Full', sub: 'MVP adoption, all target teams' },
            ].map(item => (
              <div key={item.metric} style={{ background: `linear-gradient(135deg, #E0ECF8 0%, ${ROSE_BG} 100%)`, border: `1.5px solid ${ROSE_LIGHT}`, borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: ROSE, marginBottom: 6 }}>{item.metric}</div>
                <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, lineHeight: 1.5 }}>{item.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ background: `linear-gradient(135deg, #E0ECF8 0%, ${ROSE_BG} 100%)`, border: `1.5px solid ${ROSE_LIGHT}`, borderRadius: 12, padding: '20px 24px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ fontSize: 32, fontWeight: 900, color: ROSE, flexShrink: 0 }}>R$300M</div>
            <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7 }}>in <strong>risk reduction</strong> over 10 years at Petrobras, enabled by the platform's capacity to centralize inspection data and support strategic decisions at scale</div>
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

  const nextCaseDefs = [{ id: 'proj-search', onOpen: onOpenSearch }, { id: 'proj-glist', onOpen: onOpenGlist }]

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
          <CaseNavCards cases={nextCaseDefs} />
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
            <CaseNavCards cases={nextCaseDefs} />
          </div>

          {/* Right — screens & evidence */}
          <div style={{ width: '44%', minWidth: 200, overflowY: 'auto', background: '#F5FBF7', padding: '20px 16px 48px' }}>
            <div style={{ fontSize: 9, fontFamily: MAC.font, color: '#90C4A8', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Screens & evidence</div>
            {SECTION_CONTENT.filter(s => s.media).map(s => (
              <div key={s.id} style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 9, fontFamily: MAC.font, color: ROSE, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{s.num}: {s.title}</div>
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

function DocumentsSearchEngineCaseStudy({ onOpenPetrobras, onOpenGlist }) {
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
          {para('The platform was used to <strong>search and analyze complex geological and administrative documents</strong>, a critical tool for geoscientific teams making time-sensitive decisions.')}
          {para('Despite its importance, users struggled with <strong>imprecise search results, confusing filters, and inefficient workflows</strong>, especially when searching for well-related data. These friction points were slowing down critical decisions and creating unnecessary manual workarounds.')}
        </>
      ),
      media: null,
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
      media: <SimpleCarousel images={[dseLeanCanvas, dseValueProp, dseResearch]} accentColor={DSE_GREEN} borderColor={DSE_GREEN_LIGHT} />,
    },
    {
      id: 'research', num: '03', title: 'Understanding Users',
      body: (
        <>
          {para('To ground the project in real user behavior, I focused on understanding how different user profiles <strong>searched for and accessed geological and administrative data</strong>. Through interviews and in-platform evaluations, I identified where the search experience was failing and which use cases required immediate attention.')}
          {callout('In parallel with the interviews, 3 designers conducted a heuristic evaluation using Nielsen Norman\'s principles and WCAG criteria. Afterwards, I cross-referenced what users reported as problems in searches with the designers\' perceptions, arriving at a friction map validated from two different angles.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Objectives</div>
              {[
                'Map different user profiles and their search behaviors',
                'Understand how users navigated internal tools and what hacks they had developed in the tangle of documents',
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
                'Imprecise search results, especially for well-related data, made it hard to find relevant documents',
                'Inconsistent filter logic created confusion and reduced trust in search results',
                "Unclear interface elements (e.g., 'Similar Documents') limited discoverability",
                'Users could not request access to restricted documents within the platform itself',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.6, paddingBottom: 7, borderBottom: i < 3 ? `1px solid ${GB}` : 'none', marginBottom: 7 }}>
                  <span style={{ color: '#CCC', flexShrink: 0 }}>·</span>{t}
                </div>
              ))}
            </div>
          </div>
        </>
      ),
      media: null,
    },
    {
      id: 'synthesis', num: '04', title: 'Synthesis & Prioritization',
      body: (
        <>
          {para('Research findings were synthesized into themes and translated into opportunities using an <strong>Opportunity Tree</strong>. I brought this to the Product Owners to prioritize alongside developers and data scientists, ensuring what would be addressed was relevant both technically and for users.')}
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
      media: (
        <div style={{ overflowX: 'auto', borderRadius: 10, border: `1px solid ${DSE_GREEN_LIGHT}` }}>
          <img src={dseIa} alt="Information architecture diagram" style={{ width: 900, maxWidth: 'none', display: 'block' }} />
        </div>
      ),
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
          <img src={dseFilterTree} alt="Filter tree behavior" style={{ width: '100%', borderRadius: 10, display: 'block' }} />
        </>
      ),
      media: null,
    },
    {
      id: 'execution', num: '06', title: 'Prototyping & Execution',
      body: (
        <>
          {callout("This case's strength is research and strategy. UI execution was handled by a dedicated UI designer based on the design decisions and specifications produced in the previous phase.")}
          {para('Based on the defined design decisions, I produced <strong>detailed specifications</strong> for each area: search behavior, filter logic, taxonomy structure, and access flows. These were handed off to a dedicated UI designer responsible for visual implementation, ensuring design intent was preserved throughout execution.')}
          {para('This collaboration model allowed research and product strategy to drive the design, with visual execution moving quickly because the decisions had already been carefully grounded in user needs.')}
        </>
      ),
      media: <SimpleCarousel images={[dseAccess, dseUi]} accentColor={DSE_GREEN} borderColor={DSE_GREEN_LIGHT} />,
    },
    {
      id: 'testing', num: '07', title: 'Testing & Validation',
      body: (
        <>
          <div style={{ background: 'white', border: `1px solid ${GL}`, borderRadius: 10, padding: '20px', textAlign: 'center', marginBottom: 16 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 10 }}>Post-launch · UMUX Score</div>
            <div style={{ fontSize: 48, fontWeight: 900, color: G, lineHeight: 1 }}>83</div>
            <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, marginTop: 6 }}>out of 100</div>
            <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7, borderTop: `1px solid ${GB}`, paddingTop: 12, marginTop: 12 }}>The improvements meaningfully addressed the core usability issues identified earlier. Users also reported faster and more accurate searches.</div>
          </div>
        </>
      ),
      media: null,
    },
    {
      id: 'impact', num: '08', title: 'Impact',
      body: (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
            <div style={{ background: `linear-gradient(135deg, ${GB} 0%, #EFF8F3 100%)`, border: `1.5px solid ${GL}`, borderRadius: 12, padding: '20px 16px', textAlign: 'center', gridColumn: '1 / -1' }}>
              <div style={{ fontSize: 9, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>Business</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: G, marginBottom: 4 }}>$1.2M</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font }}>contract renewal secured, directly tied to platform improvements</div>
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
      media: null,
    },
    {
      id: 'learnings', num: '09', title: 'Key Learnings',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { num: '01', title: 'Strategy is design work too',    body: 'Research and framing guided product decisions before visual execution, proving that upstream work has direct, measurable impact.' },
            { num: '02', title: 'Cross-functional leadership',    body: 'Led workshops and alignment across technical teams (developers, data scientists, and product owners) to surface shared goals.' },
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
          <CaseNavCards cases={[{ id: 'proj-petrobras', onOpen: onOpenPetrobras }, { id: 'proj-glist', onOpen: onOpenGlist }]} />
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
                <div style={{ fontSize: 9, fontFamily: MAC.font, color: G, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{s.num}: {s.title}</div>
                {s.media}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

// ─── Case navigation cards (shown at bottom of every case study) ─────────────

const CASE_META = {
  'proj-petrobras': {
    title: 'Historical Data',
    summary: 'Redesigning how Petrobras engineers navigate 30 years of oil well data.',
    badges: ['Product Design', 'Research', 'Data Viz'],
    color: '#C94F7C', bg: '#FFF0F5', border: 'rgba(201,79,124,0.2)',
  },
  'proj-search': {
    title: 'Documents Search Engine',
    summary: 'AI-powered search that helped Petrobras teams find critical documents 3× faster.',
    badges: ['Product Design', 'Research', 'AI Tools'],
    color: '#3D8B61', bg: '#EFF8F3', border: 'rgba(61,139,97,0.2)',
  },
  'proj-glist': {
    title: 'Glist',
    summary: 'An iOS app that helps families plan groceries and stop wasting food.',
    badges: ['UX/UI Design', 'Mobile', 'Personal Project'],
    color: '#E07A20', bg: '#FFF8F2', border: 'rgba(224,122,32,0.2)',
  },
}

const CASE_META_PT = {
  'proj-petrobras': {
    title: 'Dados Históricos',
    summary: 'Redesenhando como engenheiros da Petrobras navegam em 30 anos de dados de poços de petróleo.',
    badges: ['Product Design', 'Pesquisa', 'Data Viz'],
    color: '#C94F7C', bg: '#FFF0F5', border: 'rgba(201,79,124,0.2)',
  },
  'proj-search': {
    title: 'Buscador de Documentos',
    summary: 'Busca com IA que ajudou times da Petrobras a encontrar documentos críticos 3× mais rápido.',
    badges: ['Product Design', 'Pesquisa', 'Ferramentas de IA'],
    color: '#3D8B61', bg: '#EFF8F3', border: 'rgba(61,139,97,0.2)',
  },
  'proj-glist': {
    title: 'Glist',
    summary: 'Um app iOS que ajuda famílias a planejar compras e parar de desperdiçar comida.',
    badges: ['UX/UI Design', 'Mobile', 'Projeto Pessoal'],
    color: '#E07A20', bg: '#FFF8F2', border: 'rgba(224,122,32,0.2)',
  },
}

function CaseNavCards({ cases, lang = 'en' }) {
  const f = MAC.font
  const meta = lang === 'pt' ? CASE_META_PT : CASE_META
  const label = lang === 'pt' ? 'continue explorando' : 'keep exploring'
  const readLabel = lang === 'pt' ? 'ler case' : 'read case'
  return (
    <div style={{ margin: '8px 32px 48px' }}>
      <div style={{ fontSize: 11, fontFamily: f, color: '#AAA', textTransform: 'uppercase', letterSpacing: 2.5, fontWeight: 600, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
        {label}
        <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, #DDD, transparent)' }} />
      </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
      {cases.map(({ id, onOpen }) => {
        const m = meta[id]
        return (
          <div key={id} onClick={onOpen} style={{ cursor: 'pointer', background: m.bg, border: `1.5px solid ${m.border}`, borderRadius: 16, padding: '20px 20px 16px', display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', overflow: 'hidden', transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${m.border}` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <span style={{ position: 'absolute', top: -12, right: 16, fontSize: 72, opacity: 0.05, color: m.color, lineHeight: 1, pointerEvents: 'none' }}>✦</span>
            <div style={{ fontSize: 9, fontFamily: f, color: m.color, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700 }}>Case Study</div>
            <div style={{ fontSize: 15, fontWeight: 900, color: '#1A1A1A', lineHeight: 1.25 }}>{m.title} <span style={{ color: m.color }}>✦</span></div>
            <div style={{ fontSize: 11, color: '#666', fontFamily: f, lineHeight: 1.65, flex: 1 }}>{m.summary}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 4 }}>
              {m.badges.map(b => (
                <span key={b} style={{ background: 'white', border: `1px solid ${m.border}`, borderRadius: 20, padding: '2px 10px', fontSize: 9, fontFamily: f, color: m.color, fontWeight: 600, letterSpacing: 0.3 }}>{b}</span>
              ))}
            </div>
            <div style={{ alignSelf: 'flex-end', fontSize: 11, color: m.color, fontFamily: f, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>{readLabel} <span style={{ fontSize: 14 }}>→</span></div>
          </div>
        )
      })}
    </div>
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
        {anchor('problem')}
        <SectionLabel n="01" label="Problem" />
        <Para>
          Glist started as a challenge to discover a way to help people <strong>reduce food waste</strong> through smarter grocery planning. Most people don't realize how much food they throw away daily, from uneaten leftovers to spoiled produce.
        </Para>

        {/* 02 · Research */}
        {anchor('research')}
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
        {anchor('define')}
        <SectionLabel n="03" label="Define" />
        <Para>
          With the research done, I synthesized what I learned into personas and a user journey to align on who I was designing for and where the real pain lived.
        </Para>
        <div style={{ marginBottom: 16 }}>{img(glistPersonas, 'User personas')}</div>
        <div style={{ marginBottom: 16 }}>{img(glistJourney, 'User journey map')}</div>

        {/* 04 · Project Goal — now earned by research */}
        {anchor('goal')}
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
        {anchor('solution')}
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
        {anchor('ideate')}
        <SectionLabel n="06" label="Ideate" />
        <Para>A moodboard set the tone: <strong>Fast, Practical, Easy, Convenient, Helpful, Handy</strong>. This guided all visual and interaction decisions forward.</Para>
        <div style={{ marginBottom: 16 }}>{img(glistMoodboard, 'Moodboard')}</div>

        {/* 07 · Prototype */}
        {anchor('prototype')}
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
        {anchor('testing')}
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
        {anchor('learnings')}
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
      <CaseNavCards cases={[{ id: 'proj-petrobras', onOpen: onOpenPetrobras }, { id: 'proj-search', onOpen: onOpenSearch }]} />
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

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactForm({ lang }) {
  const isEn = lang !== 'pt'
  const [status, setStatus] = useState('idle')
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const P  = MAC.rose
  const f  = MAC.font
  const RULED_LINE = 'rgba(232,96,154,0.13)'

  const t = isEn
    ? { heading: 'say hello ✦', sub: "let's work together? it'll be awesome!", namePh: 'your name', emailPh: 'your email', msgPh: 'write your message here...', btn: 'send', sending: 'sending...', done: "message sent! i'll get back to you soon ✦", err: 'something went wrong. try again?' }
    : { heading: 'oie, feliz de ter você aqui! ✦', sub: 'vamos trabalhar juntos? vai ser massa!', namePh: 'seu nome', emailPh: 'seu e-mail', msgPh: 'escreva sua mensagem aqui...', btn: 'enviar', sending: 'enviando...', done: 'mensagem enviada! te respondo em breve ✦', err: 'algo deu errado. tenta de novo?' }

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xvzdnyvr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const lineStyle = {
    width: '100%', boxSizing: 'border-box',
    border: 'none', borderBottom: `1.5px solid ${RULED_LINE}`,
    outline: 'none', background: 'transparent',
    padding: '6px 0 5px', fontSize: 13, fontFamily: 'Georgia, serif',
    color: '#3A1A2A', lineHeight: 1.8,
  }

  const labelStyle = {
    fontSize: 8, fontFamily: f, color: P,
    letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 2, display: 'block',
  }

  // Ruler tick marks
  const ticks = Array.from({ length: 9 }, (_, i) => i)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#FFF8FB', overflowY: 'auto' }}>

      {/* Ruler */}
      <div style={{
        flexShrink: 0,
        background: 'linear-gradient(to bottom, #F9EEF4 0%, #F2E2EC 100%)',
        borderBottom: `2px solid ${P}`,
        padding: '0 20px',
        height: 32,
        display: 'flex',
        alignItems: 'flex-end',
        position: 'relative',
        userSelect: 'none',
      }}>
        {/* Ruler triangle marker */}
        <div style={{
          position: 'absolute', left: 20, top: 4,
          width: 0, height: 0,
          borderLeft: '5px solid transparent', borderRight: '5px solid transparent',
          borderTop: `8px solid ${P}`,
        }} />
        {ticks.map(i => (
          <div key={i} style={{
            position: 'absolute',
            left: `calc(20px + ${i * 12.5}%)`,
            bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}>
            <span style={{ fontSize: 7, fontFamily: f, color: 'rgba(232,96,154,0.5)', marginBottom: 1 }}>{i * 2}</span>
            <div style={{ width: 1, height: i % 2 === 0 ? 8 : 5, background: `rgba(232,96,154,${i % 2 === 0 ? 0.4 : 0.2})` }} />
          </div>
        ))}
      </div>

      {/* Page body with margin line */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>

        {/* Pink left margin */}
        <div style={{ width: 36, flexShrink: 0, borderRight: `2px solid rgba(232,96,154,0.35)`, background: 'rgba(255,200,225,0.08)' }} />

        {/* Lined content area */}
        <div style={{ flex: 1, padding: '18px 24px 24px 18px', backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 27px, ${RULED_LINE} 27px, ${RULED_LINE} 28px)`, backgroundSize: '100% 28px' }}>

          {/* Heading + sub */}
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 15, fontWeight: 700, color: P, marginBottom: 2, lineHeight: 1.8 }}>
            {t.heading}
          </div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 12, color: 'rgba(58,26,42,0.55)', marginBottom: 20, fontStyle: 'italic', lineHeight: 1.8 }}>
            {t.sub}
          </div>

          {status === 'done' ? (
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 13, color: P, lineHeight: 1.8, fontStyle: 'italic' }}>
              ✦ {t.done}
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={labelStyle}>{isEn ? 'name' : 'nome'}</label>
                <input name="name" placeholder={t.namePh} value={form.name} onChange={handleChange} required style={lineStyle}
                  onFocus={e => e.target.style.borderBottomColor = P}
                  onBlur={e => e.target.style.borderBottomColor = RULED_LINE} />
              </div>
              <div>
                <label style={labelStyle}>{isEn ? 'e-mail' : 'e-mail'}</label>
                <input name="email" type="email" placeholder={t.emailPh} value={form.email} onChange={handleChange} required style={lineStyle}
                  onFocus={e => e.target.style.borderBottomColor = P}
                  onBlur={e => e.target.style.borderBottomColor = RULED_LINE} />
              </div>
              <div>
                <label style={labelStyle}>{isEn ? 'message' : 'mensagem'}</label>
                <textarea name="message" placeholder={t.msgPh} value={form.message} onChange={handleChange} required rows={4}
                  style={{ ...lineStyle, resize: 'none', width: '100%', borderBottom: 'none',
                    backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 27px, ${RULED_LINE} 27px, ${RULED_LINE} 28px)`,
                    backgroundSize: '100% 28px', paddingBottom: 0 }}
                  onFocus={e => { e.target.style.outline = 'none' }}
                  onBlur={() => {}} />
              </div>
              {status === 'error' && (
                <div style={{ fontFamily: f, fontSize: 11, color: '#C00', fontStyle: 'italic' }}>{t.err}</div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                <button type="submit" disabled={status === 'sending'} style={{
                  background: P, color: '#fff', border: 'none',
                  padding: '7px 20px', fontFamily: f, fontSize: 11, fontWeight: 700,
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1,
                  letterSpacing: 1.5, textTransform: 'uppercase',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  transition: 'opacity 0.15s',
                }}>
                  {status === 'sending' ? t.sending : t.btn}
                </button>
                <div style={{ display: 'flex', gap: 8 }}>
                  <a href="mailto:thaislopesdesign@gmail.com" style={{ fontFamily: f, fontSize: 10, color: P, textDecoration: 'underline', letterSpacing: 0.5 }}>
                    ✉ email
                  </a>
                  <span style={{ color: RULED_LINE }}>·</span>
                  <a href="https://www.linkedin.com/in/thaiss-lopes/" target="_blank" rel="noreferrer" style={{ fontFamily: f, fontSize: 10, color: P, textDecoration: 'underline', letterSpacing: 0.5 }}>
                    ↗ linkedin
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── macOS menu bar ───────────────────────────────────────────────────────────

function MacMenuBar({ lang = 'en', onLangChange }) {
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
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }}>
        {/* Language switcher — right side, before heart */}
        <button
          onClick={() => onLangChange?.(lang === 'en' ? 'pt' : 'en')}
          title={lang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
          style={{
            background: 'rgba(232,96,154,0.1)',
            border: '1px solid rgba(232,96,154,0.25)',
            borderRadius: 6,
            padding: '1px 7px',
            fontSize: 10,
            fontWeight: 700,
            color: MAC.rose,
            cursor: 'pointer',
            letterSpacing: 0.3,
            lineHeight: '18px',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,96,154,0.2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(232,96,154,0.1)'}
        >
          {lang === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}
        </button>
        <span style={{ opacity: 0.75 }}>🩷</span>
        <span style={{ opacity: 0.75 }}>📶</span>
        <span style={{ opacity: 0.75 }}>{time}</span>
      </div>
    </div>
  )
}

// ─── Mac Dock ─────────────────────────────────────────────────────────────────

const PT_PROJECT_NAMES = { 'proj-petrobras': 'dados históricos', 'proj-search': 'buscador de documentos', 'proj-glist': 'glist' }

function MacDock({ projects, windows, onOpen, lang = 'en' }) {
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
      background: 'rgba(255, 210, 230, 0.45)',
      backdropFilter: 'blur(22px)',
      WebkitBackdropFilter: 'blur(22px)',
      border: '1px solid rgba(255,170,210,0.65)',
      borderRadius: 22,
      boxShadow: '0 8px 32px rgba(200,80,130,0.15), inset 0 1px 0 rgba(255,255,255,0.6)',
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
                {lang === 'pt' ? (PT_PROJECT_NAMES[p.id] || p.name) : p.name}
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

function Desktop({ windows, onOpen, lang = 'en' }) {
  const [burst, setBurst] = useState(null)

  const leftIcons = lang === 'pt'
    ? [
        { id: 'home',    label: 'tha.design',    isHome: true,  fileType: null,  customIcon: null },
        { id: 'about',   label: 'sobre.txt',      isHome: false, fileType: 'txt',  customIcon: null },
        { id: 'resume',  label: 'curriculo.pdf',  isHome: false, fileType: 'pdf',  customIcon: null },
        { id: 'contact', label: 'contato.txt',    isHome: false, fileType: null,   customIcon: <ChatBubbleIcon size={46} /> },
      ]
    : [
        { id: 'home',    label: 'tha.design',  isHome: true,  fileType: null,  customIcon: null },
        { id: 'about',   label: 'about.txt',   isHome: false, fileType: 'txt', customIcon: null },
        { id: 'resume',  label: 'resume.pdf',  isHome: false, fileType: 'pdf', customIcon: null },
        { id: 'contact', label: 'contact.txt', isHome: false, fileType: null,  customIcon: <ChatBubbleIcon size={46} /> },
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
            customIcon={icon.customIcon}
          />
        ))}
      </div>

      {/* Case studies hint — left of dock */}
      <div style={{
        position: 'fixed',
        bottom: 34,
        right: 'calc(50% + 130px)',
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        background: 'linear-gradient(135deg, #FF85C2 0%, #E8609A 100%)',
        border: 'none',
        borderRadius: 20,
        padding: '7px 14px',
        pointerEvents: 'none',
        animation: 'hint-float 3s ease-in-out infinite',
        boxShadow: '0 3px 12px rgba(232,96,154,0.3)',
        zIndex: 99991,
      }}>
        <span style={{ fontSize: 11, fontFamily: MAC.font, color: 'white', fontWeight: 700, whiteSpace: 'nowrap' }}>{lang === 'pt' ? 'explore meus cases' : 'explore my cases'}</span>
        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', animation: 'hint-arrow 1.2s ease-in-out infinite' }}>→</span>
      </div>

      {/* Click burst */}
      {burst && <ClickBurst key={burst.id} burst={burst} />}
    </div>
  )
}

// ─── Portfolio (main export) ──────────────────────────────────────────────────

function playICQSound() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)()
  const notes = [520, 660, 780, 980, 1200, 1400]
  notes.forEach((freq, i) => {
    const osc  = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'square'
    osc.frequency.value = freq
    const t = ctx.currentTime + i * 0.09
    gain.gain.setValueAtTime(0.12, t)
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.13)
    osc.start(t)
    osc.stop(t + 0.13)
  })
}

function EnterScreen({ onEnter }) {
  const [hoverPt, setHoverPt]   = useState(false)
  const [hoverEn, setHoverEn]   = useState(false)
  const [exiting, setExiting]   = useState(false)

  const handleEnter = (lang) => {
    if (exiting) return
    playICQSound()
    setExiting(true)
    setTimeout(() => onEnter(lang), 480)
  }

  const btnStyle = (hovered) => ({
    background: hovered
      ? 'linear-gradient(135deg, #FF85C2 0%, #E8609A 100%)'
      : 'rgba(255,255,255,0.12)',
    border: '1.5px solid rgba(255,200,230,0.5)',
    borderRadius: 999, padding: '10px 30px',
    color: hovered ? 'white' : 'rgba(255,220,240,0.9)',
    fontSize: 12, fontWeight: 700, cursor: 'pointer',
    letterSpacing: 1.5, textTransform: 'uppercase',
    transition: 'all 0.22s ease',
    boxShadow: hovered
      ? '0 0 28px rgba(232,96,154,0.55), inset 0 1px 0 rgba(255,255,255,0.2)'
      : 'inset 0 1px 0 rgba(255,255,255,0.15)',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  })

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      backgroundColor: '#9E8A96',
      backgroundImage: `
        linear-gradient(45deg, #8A7480 25%, transparent 25%),
        linear-gradient(-45deg, #8A7480 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #8A7480 75%),
        linear-gradient(-45deg, transparent 75%, #8A7480 75%)
      `,
      backgroundSize: '28px 28px',
      backgroundPosition: '0 0, 0 14px, 14px -14px, -14px 0px',
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
    }}>
      <style>{`
        @keyframes enter-out {
          0%   { transform: scale(1);    opacity: 1; filter: blur(0px); }
          20%  { transform: scale(1.04); opacity: 0.9; }
          100% { transform: scale(0.82); opacity: 0; filter: blur(6px); }
        }
        @keyframes enter-in {
          0%   { transform: scale(0.84); opacity: 0; filter: blur(8px); }
          65%  { transform: scale(1.02); opacity: 1; filter: blur(0px); }
          100% { transform: scale(1);    opacity: 1; filter: blur(0px); }
        }
      `}</style>

      {/* Ambient sparkles on the checkerboard */}
      {[
        { t: '12%', l: '18%', s: 16, d: '0s'   },
        { t: '22%', l: '78%', s: 11, d: '0.7s'  },
        { t: '70%', l: '12%', s: 13, d: '1.3s'  },
        { t: '78%', l: '82%', s: 18, d: '0.4s'  },
        { t: '45%', l: '6%',  s: 9,  d: '1.8s'  },
        { t: '8%',  l: '52%', s: 10, d: '1.1s'  },
        { t: '88%', l: '46%', s: 14, d: '0.2s'  },
      ].map((p, i) => (
        <span key={i} style={{
          position: 'absolute', top: p.t, left: p.l,
          fontSize: p.s, color: 'rgba(255,200,230,0.55)',
          animation: `twinkle 2.4s ease-in-out ${p.d} infinite`,
          pointerEvents: 'none', userSelect: 'none',
        }}>✦</span>
      ))}

      {/* Card */}
      <div style={{
        animation: exiting ? 'enter-out 0.48s cubic-bezier(0.4,0,1,1) forwards' : 'enter-in 0.55s cubic-bezier(0.34,1.36,0.64,1) forwards',
        background: 'rgba(60,20,40,0.52)',
        backdropFilter: 'blur(28px) saturate(1.3)',
        WebkitBackdropFilter: 'blur(28px) saturate(1.3)',
        border: '1px solid rgba(255,200,230,0.18)',
        borderRadius: 28,
        padding: '52px 64px 48px',
        textAlign: 'center',
        boxShadow: '0 12px 60px rgba(60,0,40,0.45), 0 0 0 1px rgba(255,200,230,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
        minWidth: 340,
      }}>
        {/* Thin top gloss line */}
        <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(to right, transparent, rgba(255,200,230,0.4), transparent)', borderRadius: 1 }} />

        {/* THAIS LOPES */}
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 32, fontWeight: 900,
          color: 'rgba(255,220,238,0.95)',
          letterSpacing: 4, textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: 6,
          textShadow: '0 0 32px rgba(255,133,194,0.35)',
        }}>
          thais lopes
        </div>

        {/* ✦ portfolio */}
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 32, fontWeight: 900,
          color: 'white',
          letterSpacing: 2,
          lineHeight: 1,
          marginBottom: 14,
          textShadow: '0 0 40px rgba(255,133,194,0.6)',
        }}>
          portfolio ✦
        </div>

        {/* product design · ux/ui */}
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 10, fontWeight: 500,
          color: 'rgba(255,200,228,0.5)',
          letterSpacing: 3.5, textTransform: 'uppercase',
          marginBottom: 44,
        }}>
          product design (ux/ui) · service design · design strategy
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(255,200,230,0.2), transparent)', marginBottom: 28 }} />

        {/* Language label */}
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 9, fontWeight: 600,
          color: 'rgba(255,200,228,0.4)',
          letterSpacing: 3, textTransform: 'uppercase',
          marginBottom: 16,
        }}>
          choose language
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button
            onClick={() => handleEnter('pt')}
            onMouseEnter={() => setHoverPt(true)}
            onMouseLeave={() => setHoverPt(false)}
            style={btnStyle(hoverPt)}
          >
            🇧🇷 português
          </button>
          <button
            onClick={() => handleEnter('en')}
            onMouseEnter={() => setHoverEn(true)}
            onMouseLeave={() => setHoverEn(false)}
            style={btnStyle(hoverEn)}
          >
            🇺🇸 english
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── PT Content Components ────────────────────────────────────────────────────

function HomeContentPt() {
  const skills = [
    { icon: '🔍', title: 'UX Research',    desc: 'Entrevistas com usuários, testes de usabilidade, análise competitiva e síntese.' },
    { icon: '✦',  title: 'UI Design',      desc: 'Design visual pixel-perfect, bibliotecas de componentes e vibe coding.' },
    { icon: '◈',  title: 'Estratégia',     desc: 'Alinhando decisões de design com objetivos de negócio, OKRs e necessidades dos usuários.' },
    { icon: '◎',  title: 'Facilitação',    desc: 'Conduzindo workshops de estratégia de produto, sessões de Lean Inception e design thinking para times multidisciplinares.' },
    { icon: '▷',  title: 'Prototipação',   desc: 'Protótipos interativos de alta fidelidade para testes e alinhamento com stakeholders.' },
    { icon: '♡',  title: 'Liderança',      desc: 'Mentoria de designers e facilitação de colaboração entre times multidisciplinares.' },
  ]
  const clients = [
    { name: 'Petrobras',      logo: logoPetrobras },
    { name: 'Samsung',        logo: logoSamsung },
    { name: 'Banco do Brasil',logo: logoBancoBrasil, logoHeight: 50 },
    { name: 'CESAR',          logo: logoCesar },
  ]
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#FDFAFC' }}>
      <div style={{ padding: '56px 44px 48px', borderBottom: '1px solid #F5E6EF', background: 'linear-gradient(150deg, #FFF5F9 0%, #FFF0FB 40%, white 100%)', position: 'relative', overflow: 'hidden' }}>
        {[{ top: 12, right: 32, size: 18, color: '#FFD700', delay: '0s' }, { top: 40, right: 80, size: 10, color: '#FF85C2', delay: '0.5s' }, { top: 80, right: 20, size: 14, color: '#FFB3D9', delay: '1s' }, { top: 20, left: 90, size: 8, color: '#FF85C2', delay: '1.5s' }].map((s, i) => (
          <span key={i} style={{ position: 'absolute', top: s.top, right: s.right, left: s.left, fontSize: s.size, color: s.color, animation: `twinkle 2.5s ease-in-out ${s.delay} infinite`, pointerEvents: 'none' }}>✦</span>
        ))}
        <p style={{ fontFamily: MAC.font, fontSize: 11, color: '#C090B0', textTransform: 'uppercase', letterSpacing: 2.5, marginBottom: 14 }}>
          simplificando a complexidade por meio de
        </p>
        <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A', letterSpacing: '-1.5px', marginBottom: 32 }}>
          estratégia{' '}
          <span style={{ background: 'linear-gradient(135deg, #FF85C2, #E8609A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>&amp;</span>
          {' '}empatia
        </h1>
        <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <img src={thaisImg} alt="Thaís Lopes" style={{ width: 180, height: 220, objectFit: 'cover', objectPosition: '50% 8%', borderRadius: 14, border: '2px solid #F0C0D8', display: 'block' }} />
            <span style={{ position: 'absolute', bottom: -8, right: -8, fontSize: 20, filter: 'drop-shadow(0 1px 4px rgba(255,180,60,0.6))', animation: 'glitter-spin 3s ease-in-out infinite' }}>✦</span>
          </div>
          <div style={{ flex: 1, minWidth: 180 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>Olá, me chamo Thaís!</p>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75, marginBottom: 10 }}>
              Product Designer no{' '}<strong style={{ color: MAC.rose }}>CESAR</strong>{' '}(o maior centro de inovação do Brasil), com{' '}<strong style={{ color: MAC.rose }}>6+ anos</strong>{' '}construindo produtos digitais em óleo & gás, finanças e governo. Transformo pesquisa profunda em estratégia, e estratégia em coisas que as pessoas realmente usam.
            </p>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75 }}>
              Também pesquisei IA na saúde no meu Mestrado, lidero um programa digital com o Governo de Pernambuco e mentoro a próxima geração de designers.
            </p>
          </div>
        </div>
      </div>
      <div style={{ padding: '44px 44px 36px', borderBottom: '1px solid #F5E6EF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 14, color: MAC.pink }}>✦</span>
          <p style={{ fontFamily: MAC.font, fontSize: 11, color: '#C090B0', textTransform: 'uppercase', letterSpacing: 2.5 }}>Especialidades</p>
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A1A', marginBottom: 24, letterSpacing: '-0.5px' }}>Habilidades &amp; Competências</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
          {skills.map(s => (
            <div key={s.title} style={{ background: 'white', border: '1px solid #F0D4E8', borderRadius: 10, padding: '16px', transition: 'border-color 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF85C2'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#F0D4E8'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ fontSize: 18, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', marginBottom: 5 }}>{s.title}</div>
              <p style={{ fontFamily: MAC.font, fontSize: 11, color: '#999', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '44px 44px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 14, color: MAC.pink }}>✦</span>
          <p style={{ fontFamily: MAC.font, fontSize: 11, color: '#C090B0', textTransform: 'uppercase', letterSpacing: 2.5 }}>Clientes</p>
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A1A', marginBottom: 24, letterSpacing: '-0.5px' }}>Empresas com quem trabalhei</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {clients.map(c => (
            <div key={c.name} style={{ background: 'white', border: '1px solid #F0D4E8', borderRadius: 10, padding: '18px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, minWidth: 110, transition: 'border-color 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF85C2'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#F0D4E8'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={c.logo} alt={c.name} style={{ height: c.logoHeight ?? 34, objectFit: 'contain' }} />
              </div>
              <span style={{ fontFamily: MAC.font, fontSize: 10, color: '#BBA0B0' }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AboutContentPt() {
  const [lightbox, setLightbox] = useState(null)
  const openPhoto = (i) => setLightbox(i)
  const closePhoto = () => setLightbox(null)
  const prevPhoto = () => setLightbox(i => (i - 1 + ABOUT_PHOTOS.length) % ABOUT_PHOTOS.length)
  const nextPhoto = () => setLightbox(i => (i + 1) % ABOUT_PHOTOS.length)
  const sectionLabel = (text) => (
    <div style={{ fontSize: 9, fontWeight: 700, color: MAC.rose, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 2.2, marginBottom: 12, marginTop: 22, display: 'flex', alignItems: 'center', gap: 8 }}>
      {text}
      <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, #F0D4E8, transparent)' }} />
    </div>
  )
  return (
    <div style={{ overflowY: 'auto', flex: 1, minHeight: 0, fontFamily: "'Montserrat', sans-serif" }}>
      {lightbox !== null && <PhotoLightbox index={lightbox} onClose={closePhoto} onPrev={prevPhoto} onNext={nextPhoto} />}
      <div style={{ padding: '24px 28px 36px' }}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', marginBottom: 20 }}>
          <div style={{ paddingTop: 2 }}>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: '#1A1A1A', margin: '0 0 4px', lineHeight: 1.2 }}>
              Olá, eu sou a Thaís <span style={{ color: MAC.pink }}>✦</span>
            </h2>
            <div style={{ fontFamily: MAC.font, color: MAC.rose, fontSize: 11, marginBottom: 8 }}>Product Design (UX/UI) · Service Design · Design Strategy</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
              {[{ emoji: '📍', text: 'Manaus → Recife, Brasil' }, { emoji: '🐶', text: 'dog mom' }, { emoji: '📷', text: 'fotografia' }].map(f => (
                <span key={f.text} style={{ fontSize: 11, fontFamily: MAC.font, color: '#888', display: 'flex', alignItems: 'center', gap: 4 }}>{f.emoji} {f.text}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, marginBottom: 6, paddingBottom: 4, justifyContent: 'center' }}>
          <AboutPolaroid src={aboutManaus} label="Manaus 🌅"    rotate={-2.5} photoIndex={0} onOpen={openPhoto} />
          <AboutPolaroid src={aboutDogs}   label="os bebês 🐶"  rotate={1.5}  photoIndex={1} onOpen={openPhoto} />
          <AboutPolaroid src={aboutTravel} label="Porto ✈️"     rotate={-1.5} photoIndex={2} onOpen={openPhoto} />
          <AboutPolaroid src={aboutMuseum} label="arte 🎨"      rotate={2}    photoIndex={3} onOpen={openPhoto} />
          <AboutPolaroid src={aboutFunny}  label="100% real 😂" rotate={-1}   photoIndex={4} onOpen={openPhoto} />
        </div>
        {sectionLabel('sobre mim')}
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: '0 0 10px' }}>
          Eu faço design na interseção de pessoas, sistemas e complexidade, o que, na maioria das vezes, significa que sou eu quem está na sala perguntando{' '}
          <strong style={{ color: MAC.rose }}>"mas por que funciona assim?"</strong>{' '}antes de alguém abrir o Figma.
        </p>
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: '0 0 10px' }}>
          Morando em Recife (natural de Manaus), tenho 6+ anos trabalhando com empresas de óleo & gás, finanças e governo, transformando problemas complexos e confusos em produtos que as pessoas realmente querem usar.
        </p>
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: '0 0 10px' }}>
          No Mestrado, pesquisei{' '}<strong style={{ color: MAC.rose }}>IA na saúde</strong>, usando Design de Futuros e Transition Design para imaginar o que vem a seguir em áreas como experiência, sistema, processo e cultura.
        </p>
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: '0 0 10px' }}>
          Lidero o{' '}<strong style={{ color: MAC.rose }}>Programa de Agentes Digitais</strong>{' '}com o Governo de Pernambuco, onde servidores públicos sem perfil técnico criam ideias para digitalizar serviços públicos. Também coordeno o{' '}
          <strong style={{ color: MAC.rose }}>FAST</strong>, um programa de design orientado a dados onde designers júnior e pessoas em transição de carreira aprendem a trabalhar com dados sem perder de vista as pessoas por trás dos números. Ganhamos o{' '}
          <strong style={{ color: MAC.rose }}>Prêmio Brasileiro de Design 2025</strong>.
        </p>
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: 0 }}>
          Design, pra mim, é menos sobre telas e mais sobre as decisões que as moldam: as pessoas com quem e para quem essas decisões são tomadas.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, margin: '18px 0 0' }}>
          {['Estratégia de Design', 'Product Design', 'Pesquisa com Usuários', 'Prototipação', 'Facilitação', 'UX Writing', 'Design Orientado a Dados', 'Design Futuros', 'Mentoria', 'Setor Público'].map(tag => (
            <span key={tag} style={{ background: '#FFF0F6', border: '1px solid #F0C8DC', borderRadius: 20, padding: '4px 13px', fontSize: 11, fontFamily: MAC.font, color: MAC.titleText }}>{tag}</span>
          ))}
        </div>
        {sectionLabel('ensino & mentoria')}
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
            <img src={aboutTeach} alt="Facilitação de workshop" onClick={() => openPhoto(5)}
              style={{ width: 110, height: 130, objectFit: 'cover', objectPosition: '50% 20%', borderRadius: 10, border: '2px solid #F0C8DC', cursor: 'pointer', transition: 'transform 0.15s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <img src={aboutGroup} alt="Grupo de mentoria" onClick={() => openPhoto(6)}
              style={{ width: 110, height: 72, objectFit: 'cover', objectPosition: '50% 30%', borderRadius: 10, border: '2px solid #F0C8DC', cursor: 'pointer', transition: 'transform 0.15s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
            {[
              { icon: '🎓', title: 'Professora de UX', desc: 'Ensinando design e os métodos por trás dele, para que os alunos entendam o que cada ferramenta faz e como adaptá-la, não apenas seguir um processo.' },
              { icon: '🤝', title: 'Mentora de Design', desc: 'Orientando designers júnior em revisões de portfólio, transições de carreira e desafios do dia a dia.' },
              { icon: '🧩', title: 'Facilitadora de Workshops', desc: 'Conduzindo Lean Inception, Design Sprint e sessões de alinhamento que ajudam times a tomar decisões mais rápidas e melhores.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#FFF8FC', border: '1px solid #F5DCE8', borderLeft: `3px solid ${MAC.pink}`, borderRadius: '0 10px 10px 0', padding: '10px 12px' }}>
                <span style={{ fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 12, color: '#1A1A1A', marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: '#666', lineHeight: 1.6, fontFamily: MAC.font }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {sectionLabel('fora do trabalho')}
        <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.85, margin: 0 }}>
          Provavelmente você me encontrará planejando minha próxima viagem, explorando novas ferramentas para aprimorar meu craft, ou curtindo um bom livro com um chocolate do lado. 🍫
        </p>
      </div>
    </div>
  )
}

function ResumeContentPt() {
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
      <div style={{ padding: '28px 32px 20px', background: 'linear-gradient(150deg, #FFF0F8 0%, #FFE4F2 60%, white 100%)', borderBottom: '1px solid #F0D4E8' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#1A1A1A', margin: 0, fontFamily: "'Montserrat', sans-serif" }}>Thais Lopes</h1>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <a href="https://www.linkedin.com/in/thaiss-lopes/" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 5, background: `linear-gradient(135deg, ${P} 0%, ${R} 100%)`, color: 'white', fontSize: 11, fontWeight: 700, fontFamily: MAC.font, textDecoration: 'none', padding: '7px 14px', borderRadius: 20, boxShadow: '0 3px 12px rgba(232,96,154,0.3)' }}>
              in LinkedIn
            </a>
            <a href="https://drive.google.com/file/d/1XuCq_Po46CAk2Fr-04SMm19VXyeUDDK1/view?usp=sharing" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 5, background: `linear-gradient(135deg, ${P} 0%, ${R} 100%)`, color: 'white', fontSize: 11, fontWeight: 700, fontFamily: MAC.font, textDecoration: 'none', padding: '7px 14px', borderRadius: 20, boxShadow: '0 3px 12px rgba(232,96,154,0.3)' }}>
              ↓ Baixar CV
            </a>
          </div>
        </div>
        <div style={{ fontSize: 12, color: R, fontFamily: MAC.font, marginBottom: 12 }}>Product Design (UX/UI) · Service Design · Estratégia de Design</div>
        <div style={{ fontSize: 11, color: '#666', lineHeight: 1.7, maxWidth: 420, marginBottom: 16 }}>Experiência entregando produtos digitais com impacto mensurável (Óleo & Gás, Finanças, Tecnologia).</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 24px' }}>
          {[{ icon: '📍', text: 'Recife, PE – Brasil (aberta a realocação)' }, { icon: '📱', text: '+55 92 99137 2057' }, { icon: '✉️', text: 'thaislopesdesign@gmail.com' }].map(item => (
            <div key={item.text} style={{ fontSize: 11, color: '#555', fontFamily: MAC.font, display: 'flex', alignItems: 'center', gap: 5 }}>
              <span>{item.icon}</span>{item.text}
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 32px 40px', fontFamily: "'Montserrat', sans-serif" }}>
        {section('Experiência')}
        {[
          {
            title: 'Product Designer', company: 'CESAR', location: 'Recife', period: 'Nov 2021 – Presente',
            sub: 'O maior centro de inovação do Nordeste do Brasil · Destaque na Forbes e BBC',
            bullets: [
              'Liderou projetos de design para um grande cliente de óleo & gás, gerando impacto de R$1,5M e garantindo renovações de longo prazo.',
              'Definiu e facilitou workshops de estratégia de produto (visão de produto, design thinking, lean inception) para líderes e times diversos, alinhando lançamentos de MVP e conduzindo 6 releases de produto.',
              'Conduziu pesquisa com usuários (entrevistas, surveys, análise de mercado) para MVPs em projetos de óleo & gás e finanças, clarificando espaços de problema, validando soluções e acelerando entregas.',
            ],
          },
          {
            title: 'Product Designer', company: 'Sidia', location: 'Manaus', period: 'Set 2020 – Nov 2021',
            sub: 'Um dos maiores institutos de P&D do Brasil',
            bullets: [
              'Liderou discovery, pesquisa e prototipação de 5 ferramentas internas automatizando o desenvolvimento Android da Samsung LATAM.',
              'Integrou design centrado no usuário a fluxos ágeis, reduzindo lacunas de handoff e melhorando usabilidade.',
              'Estabeleceu práticas de design do discovery à entrega com engenharia e QA para ferramentas de suporte às releases Android da Samsung na América Latina.',
            ],
          },
          {
            title: 'Designer UX/UI', company: 'Fermen.to Innovation Lab', location: 'Manaus', period: 'Jun 2019 – Dez 2019',
            sub: 'Lab de inovação independente',
            bullets: [
              'Gerenciou o design ponta a ponta de 3 produtos digitais em estágio inicial, supervisionando pesquisa e entrega de interfaces junto com desenvolvedores.',
              'Liderou pesquisa de mercado e design UX para um site de associação de clube de futebol, aumentando o engajamento e a afinidade com a marca.',
              'Influenciou a direção de produto apresentando soluções diretamente a stakeholders e validando decisões de design por meio de ciclos de feedback.',
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
        {section('Formação')}
        {[
          { degree: 'Mestrado em Design', school: 'CESAR School', period: '2022–2024', note: 'Dissertação: Fenômenos Emergentes na Integração de IA na Saúde' },
          { degree: 'Bacharelado em Design', school: 'Universidade Federal do Amazonas – UFAM', period: '2015–2019', note: '' },
        ].map(ed => (
          <div key={ed.school} style={{ marginBottom: 12, paddingLeft: 12, borderLeft: '2px solid #F0D4E8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 700, fontSize: 12, color: '#1A1A1A' }}>{ed.degree}, <span style={{ fontWeight: 400 }}>{ed.school}</span></span>
              <span style={{ fontFamily: MAC.font, fontSize: 10, color: '#BBA0B0', flexShrink: 0, marginLeft: 12 }}>{ed.period}</span>
            </div>
            {ed.note && <div style={{ fontSize: 10, color: '#888', fontStyle: 'italic', marginTop: 2 }}>{ed.note}</div>}
          </div>
        ))}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 8 }}>
          <div>
            {section('Habilidades')}
            {[
              { cat: 'Pesquisa & Estratégia', items: 'Pesquisa com Usuários, Estratégia de Produto, Validação de Hipóteses, Análise de Dados' },
              { cat: 'Design & Entrega', items: 'Product Design (UX/UI), Design Systems, Prototipação (Figma), Testes de Usabilidade, Design de Interação' },
              { cat: 'Colaboração', items: 'Fluxos Ágeis, Times Multidisciplinares, Alinhamento com Stakeholders' },
            ].map(s => (
              <div key={s.cat} style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#333' }}>{s.cat}: </span>
                <span style={{ fontSize: 11, color: '#666' }}>{s.items}</span>
              </div>
            ))}
          </div>
          <div>
            {section('Certificações')}
            {[
              'Inovação e Liderança em Gestão de Projetos — ISCTE Executive Education, 2025',
              'Lean Inception Facilitator — Caroli.org, 2024',
              'Product Management, PM3 – 2024',
              'Product Discovery, PM3 – 2023',
            ].map((c) => bullet(c))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            {section('Idiomas')}
            {[['Português', 'Nativo (C2)'], ['Inglês', 'Fluente (C1)'], ['Espanhol', 'Intermediário (B2)']].map(([lang, level]) => (
              <div key={lang} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#555', marginBottom: 6, paddingBottom: 6, borderBottom: '1px solid #F8EEF4' }}>
                <span style={{ fontWeight: 600 }}>{lang}</span>
                <span style={{ color: R, fontFamily: MAC.font }}>{level}</span>
              </div>
            ))}
          </div>
          <div>
            {section('Projetos Especiais')}
            {[
              'Mentora de times de intraempreendedorismo em saúde e aeroespacial.',
              'Coordenadora acadêmica do Design Orientado a Dados (FAST) e Gestão de Produtos (Banco do Brasil).',
              'Líder do Programa de Agentes Digitais (UPE) com o Governo de Pernambuco.',
            ].map((p) => bullet(p))}
          </div>
        </div>
      </div>
    </div>
  )
}

const HD_SECTIONS_PT = [
  { id: 'context',   title: 'Contexto',                  num: '01' },
  { id: 'framing',   title: 'Framing do Produto',         num: '02' },
  { id: 'research',  title: 'Entendendo os Usuários',     num: '03' },
  { id: 'synthesis', title: 'Síntese',                    num: '04' },
  { id: 'decisions', title: 'Decisões de Design',         num: '05' },
  { id: 'execution', title: 'Prototipação & Execução',    num: '06' },
  { id: 'testing',   title: 'Testes & Validação',         num: '07' },
  { id: 'impact',    title: 'Impacto',                    num: '08' },
  { id: 'learnings', title: 'Aprendizados',               num: '09' },
]

const GLIST_SECTIONS_PT = [
  { id: 'problem',   title: 'Problema',           num: '01' },
  { id: 'research',  title: 'Pesquisa',           num: '02' },
  { id: 'define',    title: 'Definir',            num: '03' },
  { id: 'goal',      title: 'Objetivo do Projeto',num: '04' },
  { id: 'solution',  title: 'Solução',            num: '05' },
  { id: 'ideate',    title: 'Ideação',            num: '06' },
  { id: 'prototype', title: 'Protótipo',          num: '07' },
  { id: 'testing',   title: 'Testes',             num: '08' },
  { id: 'learnings', title: 'Aprendizados',       num: '09' },
]

function PetrobrasCaseStudyPt({ onOpenSearch, onOpenGlist }) {
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

  const para = (html) => (
    <p style={{ fontSize: 13, color: '#444', lineHeight: 1.9, marginBottom: 14, marginTop: 0 }} dangerouslySetInnerHTML={{ __html: html }} />
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
      <div style={{ fontSize: 10, color: ROSE, fontFamily: MAC.font, fontWeight: 700 }}>· {attr}</div>
    </div>
  )

  const SECTION_CONTENT = [
    {
      id: 'context', num: '01', title: 'Contexto',
      body: (
        <>
          {para('Inspeções de dutos em reservatórios de pré-sal são críticas para detectar e prevenir corrosão sob tensão causada por CO₂ (SCC-CO₂). Até este projeto, os dados dessas inspeções eram gerenciados manualmente em <strong>planilhas e arquivos PowerPoint</strong>, com pouca rastreabilidade, esforço duplicado entre times e erros frequentes no processamento de dados.')}
          {para('A necessidade de um sistema centralizado e digital havia se tornado urgente: não apenas para melhorar a eficiência operacional, mas também para <strong>apoiar decisões estratégicas com dados confiáveis e acessíveis</strong>.')}
        </>
      ),
      media: <img src={hdContext} alt="Estado anterior: fluxo legado em planilhas" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
    },
    {
      id: 'framing', num: '02', title: 'Framing do Produto',
      body: (
        <>
          {para('Para orientar o projeto desde o início, facilitei uma sessão de <strong>Lean Canvas</strong> para mapear dores dos usuários, valor do produto e prioridades. Esse exercício visual ajudou a alinhar o time em torno de uma direção clara antes de qualquer trabalho de design.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            {[
              { label: 'Dores',              value: 'Planilhas manuais, baixa automação e comunicação fragmentada entre times' },
              { label: 'Valor do produto',   value: 'Centralizar e automatizar dados de inspeção para reduzir erros e economizar tempo' },
              { label: 'Escopo do MVP',      value: 'Focado nas necessidades de três áreas operacionais específicas' },
              { label: 'Métricas de sucesso',value: 'Menos erros, tempo economizado, automação de processos e adoção pelos usuários' },
            ].map(item => (
              <div key={item.label} style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 9, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 5 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </>
      ),
      media: <img src={hdProductFraming} alt="Artefato da sessão de Lean Canvas" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
    },
    {
      id: 'research', num: '03', title: 'Entendendo os Usuários',
      body: (
        <>
          {para('Para enraizar o projeto em necessidades reais dos usuários, realizei uma imersão profunda nos fluxos atuais de dados de inspeção. Por meio de <strong>entrevistas, sessões de pesquisa e discussões estratégicas</strong>, descobri como as informações eram acessadas, compartilhadas e interpretadas nas diferentes áreas da empresa.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Objetivos</div>
              {['Mapear perfis e responsabilidades dos usuários nas três áreas-alvo', 'Entender como cada área experienciava e valorizava os dados de inspeção', 'Identificar quais perspectivas de usuário deveriam ser priorizadas no MVP'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.7, paddingBottom: 8, borderBottom: i < 2 ? '1px solid #E5EFF8' : 'none', marginBottom: 8 }}>
                  <span style={{ color: ROSE, flexShrink: 0 }}>✦</span>{t}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Principais Achados</div>
              {['Falta de acesso centralizado aos resultados de inspeção entre os times', 'Baixa automação na formatação e gestão de relatórios de inspeção', 'Dependência de outros departamentos e ferramentas externas para recuperar dados', 'Alto esforço manual para criar e compartilhar visuais ou resumos'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.6, paddingBottom: 7, borderBottom: i < 3 ? '1px solid #E5EFF8' : 'none', marginBottom: 7 }}>
                  <span style={{ color: '#CCC', flexShrink: 0 }}>·</span>{t}
                </div>
              ))}
            </div>
          </div>
        </>
      ),
      media: <img src={hdUnderstanding} alt="Pesquisa de entendimento dos usuários" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
    },
    {
      id: 'synthesis', num: '04', title: 'Síntese & Priorização',
      body: (
        <>
          {para('Para consolidar os insights da fase de imersão, criei um <strong>mapa de jornada cross-funcional</strong> que visualizou os fluxos atuais e evidenciou pontos de atrito nos três times. Os problemas foram categorizados por papel, frequência e impacto.')}
          {bullet(['A fragmentação entre ferramentas dificultava o acesso consistente aos dados', 'A falta de automação aumentava o esforço manual e as taxas de erro nos times', 'A ausência de acesso unificado aos resultados de inspeção atrasava decisões e reduzia a visibilidade'])}
          <div style={{ background: `linear-gradient(135deg, ${ROSE_BG} 0%, #EEF5FC 100%)`, border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '12px 16px', fontSize: 12, color: '#555', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 14 }}>
            Esta etapa transformou a pesquisa em um entendimento compartilhado que guiou a conversa sobre o escopo do MVP.
          </div>
        </>
      ),
      media: <img src={hdUnderstandingUsers} alt="Artefatos de síntese" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
    },
    {
      id: 'decisions', num: '05', title: 'Decisões de Design',
      body: (
        <>
          {para('Um <strong>workshop de três dias</strong> combinando ferramentas de Lean Inception e Design Sprint foi realizado para definir colaborativamente o escopo do MVP.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
            {[{ day: 'Dia 01', focus: 'Visão de produto, mapeamento de dores, papéis dos usuários' }, { day: 'Dia 02', focus: 'Ideação, card sorting, sketchstorming' }, { day: 'Dia 03', focus: 'Revisão técnica, de negócio e UX: sequenciamento de escopo' }].map(item => (
              <div key={item.day} style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: ROSE, marginBottom: 6 }}>{item.day}</div>
                <div style={{ fontSize: 11, color: '#666', lineHeight: 1.6 }}>{item.focus}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
            <div style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Funcionalidades priorizadas</div>
              {['Acesso centralizado aos resultados de inspeção', 'Geração mais rápida de relatórios visuais', 'Redução da dependência de planilhas'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.6, marginBottom: 6 }}><span style={{ color: ROSE }}>✓</span>{f}</div>
              ))}
            </div>
            <div style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#AAA', fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Adiado: e por quê</div>
              {[{ f: 'Edição em tempo real', r: 'mudanças arquiteturais inviáveis para v1' }, { f: 'Análise preditiva', r: 'precisava de mais dados históricos para ser relevante' }, { f: 'Integrações via API', r: 'times ainda em transição de fluxos manuais' }].map((item, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 12, color: '#777', fontWeight: 600 }}>– {item.f}</div>
                  <div style={{ fontSize: 11, color: '#AAA', paddingLeft: 12 }}>{item.r}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      ),
      media: <img src={hdDecisions} alt="Workshop de decisões de design" style={{ width: '75%', borderRadius: 10, margin: '12px auto', display: 'block' }} />,
    },
    {
      id: 'execution', num: '06', title: 'Prototipação & Execução',
      body: (
        <>
          {para('Minha abordagem foi <strong>co-participativa e iterativa</strong>. Facilitei sessões de sketching e rodadas rápidas de critique com stakeholders e desenvolvedores, testando continuamente a viabilidade e a usabilidade.')}
          {para('Os conceitos iniciais evoluíram para protótipos de alta fidelidade usando o Design System da empresa, garantindo consistência visual e alinhamento com os padrões internos da plataforma. Como <strong>designer solo</strong>, criei todos os fluxos no Figma e trabalhei lado a lado com os desenvolvedores.')}
        </>
      ),
      media: (
        <>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.8, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 18, height: 1.5, background: ROSE_LIGHT }} />
              Baixa Fidelidade
              <span style={{ display: 'inline-block', flex: 1, height: 1.5, background: ROSE_LIGHT }} />
            </div>
            <SimpleCarousel images={[hdLofi1, hdLofi2]} accentColor={ROSE} borderColor={ROSE_LIGHT} />
          </div>
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.8, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 18, height: 1.5, background: ROSE_LIGHT }} />
              Alta Fidelidade
              <span style={{ display: 'inline-block', flex: 1, height: 1.5, background: ROSE_LIGHT }} />
            </div>
            <img src={hdHifi1} alt="Tela de alta fidelidade 1" style={{ width: '75%', borderRadius: 10, margin: '6px auto', display: 'block' }} />
            <img src={hdHifi2} alt="Tela de alta fidelidade 2" style={{ width: '75%', borderRadius: 10, margin: '6px auto', display: 'block' }} />
            <img src={hdHifi3} alt="Tela de alta fidelidade 3" style={{ width: '75%', borderRadius: 10, margin: '6px auto', display: 'block' }} />
          </div>
        </>
      ),
    },
    {
      id: 'testing', num: '07', title: 'Testes & Validação',
      body: (
        <>
          {para('Para garantir usabilidade e adoção entre os segmentos de usuários, projetei e conduzi <strong>duas rodadas de testes</strong>.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
            <div style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '16px' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: ROSE, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Moderado: Usuários Primários</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: ROSE, lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, marginBottom: 10 }}>taxa de sucesso nas tarefas</div>
              <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7, borderTop: '1px solid #E5EFF8', paddingTop: 10 }}>Todas as 13 tarefas concluídas. Usuários identificaram inconsistências no comportamento dos filtros e na terminologia.</div>
            </div>
            <div style={{ background: 'white', border: `1px solid ${ROSE_LIGHT}`, borderRadius: 10, padding: '16px' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#AAA', fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Não moderado: via Useberry</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#90C4A8', lineHeight: 1 }}>67%</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, marginBottom: 10 }}>sucesso na conclusão de tarefas</div>
              <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7, borderTop: '1px solid #E5EFF8', paddingTop: 10 }}>Identificou lacunas na clareza do dashboard e na interpretação de dados, informando as prioridades da v2.</div>
            </div>
          </div>
          {pullquote('"A ferramenta é muito intuitiva e bem organizada."', 'Usuário 01')}
          {pullquote('"Agora eu não preciso esperar alguém me mandar os dados de inspeção."', 'Usuário 02')}
        </>
      ),
      media: null,
    },
    {
      id: 'impact', num: '08', title: 'Impacto',
      body: (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 12 }}>
            {[
              { metric: '~3h',  sub: 'economizadas por usuário por semana' },
              { metric: '100%', sub: 'sucesso nas tarefas, testes moderados' },
              { metric: 'Total', sub: 'adoção do MVP, todos os times-alvo' },
            ].map(item => (
              <div key={item.metric} style={{ background: `linear-gradient(135deg, #E0ECF8 0%, ${ROSE_BG} 100%)`, border: `1.5px solid ${ROSE_LIGHT}`, borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: ROSE, marginBottom: 6 }}>{item.metric}</div>
                <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, lineHeight: 1.5 }}>{item.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ background: `linear-gradient(135deg, #E0ECF8 0%, ${ROSE_BG} 100%)`, border: `1.5px solid ${ROSE_LIGHT}`, borderRadius: 12, padding: '20px 24px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ fontSize: 32, fontWeight: 900, color: ROSE, flexShrink: 0 }}>R$300M</div>
            <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7 }}>em <strong>redução de riscos</strong> ao longo de 10 anos na Petrobras, viabilizados pela capacidade da plataforma de centralizar dados de inspeção e apoiar decisões estratégicas em escala</div>
          </div>
          {bullet(['Eliminou completamente os processos baseados em planilhas', 'Usuários relataram maior autonomia e mais confiança nas decisões operacionais'])}
        </>
      ),
      media: null,
    },
    {
      id: 'learnings', num: '09', title: 'Aprendizados',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { num: '01', title: 'Síntese antes da solução',    body: 'Alinhar sobre o valor para o usuário antes de ir para o design foi fundamental para a clareza estratégica.' },
            { num: '02', title: 'Designing com restrições',    body: 'Equilibrar necessidades dos usuários e limitações da plataforma interna exige negociação constante.' },
            { num: '03', title: 'Discovery nunca para',        body: 'Ciclos contínuos de feedback devem guiar iterações futuras, especialmente em dashboards em evolução.' },
            { num: '04', title: 'Combinar frameworks funciona',body: 'Combinar Lean Inception com ferramentas do Design Sprint deu a mistura certa de estrutura e criatividade.' },
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
    const onScroll = () => { trackActive(container, refs); setTabScrolled(container.scrollTop > 60) }
    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [splitView])
  const updateTabArrows = () => {
    const el = tabBarRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }
  const shiftTabs = (dir) => { tabBarRef.current?.scrollBy({ left: dir * 160, behavior: 'smooth' }) }
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
      <span style={{ fontSize: 10, fontWeight: 700, color: ROSE, fontFamily: MAC.font }}>{num}</span>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: '#1A1A1A', margin: 0 }}>{title}</h2>
    </div>
  )
  const sectionDiv = (last = false) => ({ paddingTop: 34, paddingBottom: 34, borderBottom: last ? 'none' : '1px solid #E4F2EA' })

  const Hero = () => (
    <div style={{ padding: '32px 40px 24px', background: `linear-gradient(150deg, ${ROSE_BG} 0%, #EEF5FC 55%, white 100%)`, borderBottom: `1px solid ${ROSE_LIGHT}` }}>
      <div style={{ fontSize: 9, fontFamily: MAC.font, color: ROSE, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 10 }}>Case Study 01 · Product Design + Pesquisa · Petrobras</div>
      <h1 style={{ fontSize: 24, fontWeight: 900, color: '#1A1A1A', margin: '0 0 20px', lineHeight: 1.2 }}>Dados Históricos <span style={{ color: ROSE }}>✦</span></h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px' }}>
        {[{ label: 'Papel', value: 'Product Designer (designer solo)' }, { label: 'Período', value: 'Fev 2024 – Ago 2024' }, { label: 'Impacto', value: '~3h economizadas/usuário/semana · 100% sucesso nas tarefas · Adoção total' }].map(item => (
          <div key={item.label}>
            <div style={{ fontSize: 9, fontFamily: MAC.font, color: ROSE, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 3 }}>{item.label}</div>
            <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const nextCaseDefs = [{ id: 'proj-search', onOpen: onOpenSearch }, { id: 'proj-glist', onOpen: onOpenGlist }]
  const TabArrow = ({ label, dir, scrolled }) => (
    <button onClick={() => shiftTabs(dir)} style={{ flexShrink: 0, border: 'none', background: 'transparent', borderBottom: '2px solid transparent', padding: '0 8px', cursor: 'pointer', color: scrolled ? 'white' : ROSE, fontSize: 14, fontWeight: 700, zIndex: 2 }}>{label}</button>
  )

  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', fontFamily: "'Montserrat', sans-serif" }}>
      <div style={{ flexShrink: 0, background: tabScrolled ? ROSE : 'white', borderBottom: tabScrolled ? 'none' : `1px solid ${ROSE_LIGHT}`, display: 'flex', alignItems: 'stretch', zIndex: 10, transition: 'background 0.25s ease' }}>
        {canScrollLeft && <TabArrow label="‹" dir={-1} scrolled={tabScrolled} />}
        <div ref={tabBarRef} style={{ flex: 1, display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {HD_SECTIONS_PT.map(s => {
            const active = activeTab === s.id
            return <button key={s.id} onClick={() => scrollTo(s.id)} style={{ background: 'none', border: 'none', borderBottom: active ? `2px solid ${tabScrolled ? 'white' : ROSE}` : '2px solid transparent', padding: '9px 12px', fontSize: 11, fontFamily: MAC.font, color: active ? (tabScrolled ? 'white' : ROSE) : (tabScrolled ? 'rgba(255,255,255,0.6)' : '#999'), fontWeight: active ? 700 : 400, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.2s', marginBottom: -1 }}>{s.title}</button>
          })}
        </div>
        {canScrollRight && <TabArrow label="›" dir={1} scrolled={tabScrolled} />}
        <button onClick={() => setSplitView(v => !v)} title={splitView ? 'Coluna única' : 'Visão dividida'} style={{ flexShrink: 0, border: 'none', borderLeft: `1px solid ${tabScrolled ? 'rgba(255,255,255,0.2)' : ROSE_LIGHT}`, borderBottom: '2px solid transparent', padding: '0 13px', background: 'transparent', color: splitView ? (tabScrolled ? 'white' : ROSE) : (tabScrolled ? 'rgba(255,255,255,0.5)' : '#BBB'), cursor: 'pointer', fontSize: 15, transition: 'all 0.2s' }}>⊞</button>
      </div>
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
          <CaseNavCards cases={nextCaseDefs} lang="pt" />
        </div>
      )}
      {splitView && (
        <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
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
            <CaseNavCards cases={nextCaseDefs} lang="pt" />
          </div>
          <div style={{ width: '44%', minWidth: 200, overflowY: 'auto', background: '#F5FBF7', padding: '20px 16px 48px' }}>
            <div style={{ fontSize: 9, fontFamily: MAC.font, color: '#90C4A8', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Telas & evidências</div>
            {SECTION_CONTENT.filter(s => s.media).map(s => (
              <div key={s.id} style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 9, fontFamily: MAC.font, color: ROSE, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{s.num}: {s.title}</div>
                {s.media}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function DocumentsSearchEngineCaseStudyPt({ onOpenPetrobras, onOpenGlist }) {
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
    <p style={{ fontSize: 13, color: '#444', lineHeight: 1.9, marginBottom: 14, marginTop: 0 }} dangerouslySetInnerHTML={{ __html: html }} />
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
    <div style={{ background: `linear-gradient(135deg, ${GB} 0%, #EFF8F3 100%)`, borderLeft: `3px solid ${G}`, borderRadius: '0 10px 10px 0', padding: '12px 16px', marginBottom: 16, fontSize: 12, color: '#555', lineHeight: 1.8, fontStyle: 'italic' }}>{text}</div>
  )

  const DSE_SECTION_CONTENT = [
    {
      id: 'context', num: '01', title: 'Contexto',
      body: (
        <>
          {para('A plataforma era utilizada para <strong>pesquisar e analisar documentos geológicos e administrativos complexos</strong>, uma ferramenta crítica para times geocientíficos tomando decisões sensíveis ao tempo.')}
          {para('Apesar de sua importância, os usuários enfrentavam <strong>resultados de busca imprecisos, filtros confusos e fluxos ineficientes</strong>, especialmente ao buscar dados de poços. Esses pontos de atrito estavam atrasando decisões críticas e criando contornos manuais desnecessários.')}
        </>
      ),
      media: null,
    },
    {
      id: 'framing', num: '02', title: 'Framing do Produto',
      body: (
        <>
          {para('Para alinhar o time em torno de uma visão compartilhada de produto, facilitei uma sessão de <strong>Lean Canvas</strong> para definir dores dos usuários, valor do produto e prioridades. Complementei isso com um Team Alignment Board e um canvas de Value Proposition para guiar decisões além do framing inicial.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            {[
              { label: 'Alinhamento de time & visão',     value: 'Sessões com desenvolvedores, cientistas de dados e times do cliente para alinhar objetivos e restrições' },
              { label: 'Valor do produto definido',        value: 'Melhorar a precisão da busca e reduzir contornos manuais em fluxos geológicos críticos' },
              { label: 'Foco nos usuários prioritários',   value: 'Soluções direcionadas às necessidades das principais áreas operacionais' },
              { label: 'Métricas de sucesso',              value: 'Menos erros, tempo economizado, automação de processos e adoção pelos usuários' },
            ].map(item => (
              <div key={item.label} style={{ background: 'white', border: `1px solid ${GL}`, borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 9, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 5 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </>
      ),
      media: <SimpleCarousel images={[dseLeanCanvas, dseValueProp, dseResearch]} accentColor={DSE_GREEN} borderColor={DSE_GREEN_LIGHT} />,
    },
    {
      id: 'research', num: '03', title: 'Entendendo os Usuários',
      body: (
        <>
          {para('Para enraizar o projeto no comportamento real dos usuários, foquei em entender como diferentes perfis <strong>buscavam e acessavam dados geológicos e administrativos</strong>. Por meio de entrevistas e avaliações na plataforma, identifiquei onde a experiência de busca estava falhando e quais casos de uso precisavam de atenção imediata.')}
          {callout('Em paralelo às entrevistas, 3 designers conduziram uma avaliação heurística usando os princípios de Nielsen Norman e critérios de WCAG. Depois, cruzei o que os usuários relatavam como problemas nas buscas com as percepções dos designers, chegando a um mapa de fricções validado por dois ângulos diferentes.')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Objetivos</div>
              {['Mapear diferentes perfis de usuários e seus comportamentos de busca', 'Entender como os usuários navegavam nas ferramentas internas e quais hacks haviam desenvolvido no emaranhado de documentos', 'Identificar cenários críticos de busca para priorizar nas decisões de design'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.7, paddingBottom: 8, borderBottom: i < 2 ? `1px solid ${GB}` : 'none', marginBottom: 8 }}>
                  <span style={{ color: G, flexShrink: 0 }}>✦</span>{t}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Principais Achados</div>
              {['Resultados de busca imprecisos, especialmente para dados de poços, dificultavam encontrar documentos relevantes', 'Lógica de filtros inconsistente criava confusão e reduzia a confiança nos resultados', 'Elementos de interface pouco claros (ex: "Documentos Similares") limitavam a descoberta', 'Usuários não conseguiam solicitar acesso a documentos restritos dentro da própria plataforma'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.6, paddingBottom: 7, borderBottom: i < 3 ? `1px solid ${GB}` : 'none', marginBottom: 7 }}>
                  <span style={{ color: '#CCC', flexShrink: 0 }}>·</span>{t}
                </div>
              ))}
            </div>
          </div>
        </>
      ),
      media: null,
    },
    {
      id: 'synthesis', num: '04', title: 'Síntese & Priorização',
      body: (
        <>
          {para('Os achados da pesquisa foram sintetizados em temas e traduzidos em oportunidades por meio de uma <strong>Árvore de Oportunidades</strong>. Levei isso para os Product Owners priorizarem junto com desenvolvedores e cientistas de dados, garantindo que o que seria endereçado fosse relevante tanto tecnicamente quanto para os usuários.')}

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 12 }}>Antes → Depois</div>
            {[
              { before: 'Resultados imprecisos',    after: 'Taxonomia clara e ranking de relevância consistente' },
              { before: 'Filtros confusos',         after: 'Lógica e interações de filtros padronizadas' },
              { before: 'Contornos manuais',        after: 'Fluxos simplificados dentro da plataforma' },
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
      media: (
        <div style={{ overflowX: 'auto', borderRadius: 10, border: `1px solid ${DSE_GREEN_LIGHT}` }}>
          <img src={dseIa} alt="Diagrama de arquitetura da informação" style={{ width: 900, maxWidth: 'none', display: 'block' }} />
        </div>
      ),
    },
    {
      id: 'decisions', num: '05', title: 'Decisões de Design',
      body: (
        <>
          {para('Os achados consolidados guiaram um conjunto de decisões de design claras em <strong>três áreas</strong>:')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
            {[
              { area: 'Comportamento da busca',    icon: '🔍', desc: 'Definiu mudanças para melhorar a relevância em buscas relacionadas a poços; priorizou clareza e consistência no ranking de resultados.' },
              { area: 'Filtros & taxonomia',       icon: '🗂', desc: 'Padronizou a lógica e interações de filtros; refinou as categorias de taxonomia para reduzir ambiguidade.' },
              { area: 'Fluxo de acesso',           icon: '🔓', desc: 'Projetou um fluxo de solicitação de acesso a documentos dentro da plataforma; eliminou contornos manuais e externos.' },
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
          <img src={dseFilterTree} alt="Comportamento da árvore de filtros" style={{ width: '100%', borderRadius: 10, display: 'block' }} />
        </>
      ),
      media: null,
    },
    {
      id: 'execution', num: '06', title: 'Prototipação & Execução',
      body: (
        <>
          {callout('O ponto forte deste case é pesquisa e estratégia. A execução de UI foi feita por uma designer de UI dedicada com base nas decisões e especificações de design produzidas na fase anterior.')}
          {para('Com base nas decisões de design definidas, produzi <strong>especificações detalhadas</strong> para cada área: comportamento da busca, lógica de filtros, estrutura de taxonomia e fluxos de acesso. Essas especificações foram passadas para uma designer de UI responsável pela implementação visual, garantindo que a intenção do design fosse preservada durante toda a execução.')}
          {para('Esse modelo de colaboração permitiu que a pesquisa e a estratégia de produto guiassem o design, com a execução visual avançando rapidamente porque as decisões já estavam solidamente fundamentadas nas necessidades dos usuários.')}
        </>
      ),
      media: <SimpleCarousel images={[dseAccess, dseUi]} accentColor={DSE_GREEN} borderColor={DSE_GREEN_LIGHT} />,
    },
    {
      id: 'testing', num: '07', title: 'Testes & Validação',
      body: (
        <>
          <div style={{ background: 'white', border: `1px solid ${GL}`, borderRadius: 10, padding: '20px', textAlign: 'center', marginBottom: 16 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 10 }}>Pós-lançamento · Pontuação UMUX</div>
            <div style={{ fontSize: 48, fontWeight: 900, color: G, lineHeight: 1 }}>83</div>
            <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font, marginTop: 6 }}>de 100</div>
            <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7, borderTop: `1px solid ${GB}`, paddingTop: 12, marginTop: 12 }}>As melhorias abordaram significativamente os principais problemas de usabilidade identificados anteriormente. Os usuários também relataram buscas mais rápidas e precisas.</div>
          </div>
        </>
      ),
      media: null,
    },
    {
      id: 'impact', num: '08', title: 'Impacto',
      body: (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
            <div style={{ background: `linear-gradient(135deg, ${GB} 0%, #EFF8F3 100%)`, border: `1.5px solid ${GL}`, borderRadius: 12, padding: '20px 16px', textAlign: 'center', gridColumn: '1 / -1' }}>
              <div style={{ fontSize: 9, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>Negócio</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: G, marginBottom: 4 }}>$1.2M</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font }}>renovação de contrato garantida, diretamente ligada às melhorias da plataforma</div>
            </div>
            <div style={{ background: `linear-gradient(135deg, ${GB} 0%, #EFF8F3 100%)`, border: `1.5px solid ${GL}`, borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: 9, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>Usuário</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: G, lineHeight: 1, marginBottom: 4 }}>83</div>
              <div style={{ fontSize: 11, color: '#888', fontFamily: MAC.font }}>pontuação de satisfação UMUX</div>
            </div>
            <div style={{ background: 'white', border: `1px solid ${GL}`, borderRadius: 12, padding: '16px' }}>
              <div style={{ fontSize: 9, color: G, fontFamily: MAC.font, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>Produto</div>
              {['Taxonomias simplificadas e comportamento de filtros mais claro', 'Ambiguidade reduzida nos resultados de busca', 'Fluxo de solicitação de acesso na plataforma substituiu contornos manuais'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#444', lineHeight: 1.6, marginBottom: 6 }}>
                  <span style={{ color: G, flexShrink: 0 }}>✓</span>{t}
                </div>
              ))}
            </div>
          </div>
        </>
      ),
      media: null,
    },
    {
      id: 'learnings', num: '09', title: 'Aprendizados',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { num: '01', title: 'Estratégia também é trabalho de design',  body: 'Pesquisa e framing guiaram decisões de produto antes da execução visual, provando que o trabalho upstream tem impacto direto e mensurável.' },
            { num: '02', title: 'Liderança cross-funcional',               body: 'Liderou workshops e alinhamento entre times técnicos (desenvolvedores, cientistas de dados e product owners) para evidenciar objetivos compartilhados.' },
            { num: '03', title: 'Pesquisa que gera resultados comprovados', body: 'Demonstrou resultados claros em usabilidade, eficiência operacional e continuidade do negócio por meio de uma abordagem orientada pela pesquisa.' },
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
  const shiftTabs = (dir) => { tabBarRef.current?.scrollBy({ left: dir * 160, behavior: 'smooth' }) }
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
  const sectionDiv = (last = false) => ({ paddingTop: 34, paddingBottom: 34, borderBottom: last ? 'none' : '1px solid #D8EDE1' })

  const Hero = () => (
    <div style={{ padding: '32px 40px 24px', background: `linear-gradient(150deg, ${GB} 0%, #EFF8F3 55%, white 100%)`, borderBottom: `1px solid ${GL}` }}>
      <div style={{ fontSize: 9, fontFamily: MAC.font, color: G, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 10 }}>Case Study 02 · Product Design + Pesquisa · Petrobras</div>
      <h1 style={{ fontSize: 24, fontWeight: 900, color: '#1A1A1A', margin: '0 0 20px', lineHeight: 1.2 }}>Buscador de Documentos <span style={{ color: G }}>✦</span></h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px' }}>
        {[{ label: 'Papel', value: 'Product Designer' }, { label: 'Período', value: 'Fev 2024 – Ago 2024' }, { label: 'Impacto', value: 'Renovação de contrato de $1.2M garantida · UMUX score: 83' }].map(item => (
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
      <div style={{ flexShrink: 0, background: 'white', borderBottom: `1px solid ${GL}`, display: 'flex', alignItems: 'stretch', zIndex: 10 }}>
        {canScrollLeft && <TabArrow label="‹" dir={-1} />}
        <div ref={tabBarRef} style={{ flex: 1, display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {HD_SECTIONS_PT.map(s => {
            const active = activeTab === s.id
            return <button key={s.id} onClick={() => scrollTo(s.id)} style={{ background: 'none', border: 'none', borderBottom: active ? `2px solid ${G}` : '2px solid transparent', padding: '9px 12px', fontSize: 11, fontFamily: MAC.font, color: active ? G : '#999', fontWeight: active ? 700 : 400, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.15s', marginBottom: -1 }}>{s.title}</button>
          })}
        </div>
        {canScrollRight && <TabArrow label="›" dir={1} />}
        <button onClick={() => setSplitView(v => !v)} title={splitView ? 'Coluna única' : 'Visão dividida'} style={{ flexShrink: 0, border: 'none', borderLeft: `1px solid ${GL}`, borderBottom: '2px solid transparent', padding: '0 13px', background: splitView ? GB : 'white', color: splitView ? G : '#BBB', cursor: 'pointer', fontSize: 15, transition: 'all 0.15s' }}>⊞</button>
      </div>
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
          <CaseNavCards cases={[{ id: 'proj-petrobras', onOpen: onOpenPetrobras }, { id: 'proj-glist', onOpen: onOpenGlist }]} lang="pt" />
        </div>
      )}
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
            <CaseNavCards cases={[{ id: 'proj-petrobras', onOpen: onOpenPetrobras }, { id: 'proj-glist', onOpen: onOpenGlist }]} lang="pt" />
          </div>
          <div style={{ width: '44%', minWidth: 200, overflowY: 'auto', background: '#F2F9F5', padding: '20px 16px 48px' }}>
            <div style={{ fontSize: 9, fontFamily: MAC.font, color: GL, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Telas & evidências</div>
            {DSE_SECTION_CONTENT.filter(s => s.media).map(s => (
              <div key={s.id} style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 9, fontFamily: MAC.font, color: G, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{s.num}: {s.title}</div>
                {s.media}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function GlistCaseStudyPt({ onOpenPetrobras, onOpenSearch }) {
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
      let current = GLIST_SECTIONS_PT[0].id
      for (const s of GLIST_SECTIONS_PT) {
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
    <div style={{ background: OR_BG, border: '1px solid rgba(244,132,26,0.2)', borderLeft: `3px solid ${OR}`, borderRadius: '0 10px 10px 0', padding: '12px 16px', margin: '8px 0', fontFamily: f, fontSize: 12, color: '#555', lineHeight: 1.7, fontStyle: 'italic' }}>
      "{text}"
    </div>
  )
  const img = (src, alt = '') => (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
      <div role="button" tabIndex={0} aria-label={`Expandir imagem: ${alt}`}
        onClick={() => setExpandedImg({ src, alt })}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setExpandedImg({ src, alt })}
        style={{ position: 'relative', width: '55%', cursor: 'zoom-in', flexShrink: 0 }}
      >
        <img src={src} alt={alt} style={{ width: '100%', borderRadius: 10, display: 'block' }} />
        <div style={{ position: 'absolute', bottom: 6, right: 6, background: 'rgba(0,0,0,0.4)', borderRadius: 5, padding: '2px 7px', fontSize: 9, color: 'rgba(255,255,255,0.88)', fontFamily: f, letterSpacing: 0.5, backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', pointerEvents: 'none' }}>↗ expandir</div>
      </div>
    </div>
  )
  const chip = (text) => (
    <span key={text} style={{ background: OR_LIGHT, border: '1px solid rgba(244,132,26,0.25)', borderRadius: 20, padding: '3px 12px', fontSize: 11, fontFamily: f, color: OR }}>{text}</span>
  )

  const imgLightbox = expandedImg && createPortal(
    <div onClick={() => setExpandedImg(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(10,6,12,0.78)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', zIndex: 999996, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}>
      <div onClick={e => e.stopPropagation()} style={{ animation: 'window-open 0.2s cubic-bezier(0.34,1.56,0.64,1) forwards', position: 'relative', maxWidth: '88vw', maxHeight: '88vh' }}>
        <img src={expandedImg.src} alt={expandedImg.alt} style={{ maxWidth: '88vw', maxHeight: '84vh', borderRadius: 12, display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.5)', objectFit: 'contain' }} />
        <button onClick={() => setExpandedImg(null)} aria-label="Fechar imagem" style={{ position: 'absolute', top: -14, right: -14, width: 30, height: 30, borderRadius: '50%', background: 'white', border: 'none', cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>✕</button>
      </div>
    </div>,
    document.body
  )

  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', fontFamily: f }}>
      {imgLightbox}
      <div style={{ flexShrink: 0, background: 'white', borderBottom: 'rgba(244,132,26,0.2) 1px solid', display: 'flex', alignItems: 'stretch', zIndex: 10 }}>
        {canScrollLeft && <button onClick={() => shiftTabs(-1)} style={{ flexShrink: 0, border: 'none', background: 'white', borderBottom: '2px solid transparent', padding: '0 8px', cursor: 'pointer', color: OR, fontSize: 14, fontWeight: 700 }}>‹</button>}
        <div ref={tabBarRef} style={{ flex: 1, display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {GLIST_SECTIONS_PT.map(s => {
            const active = activeTab === s.id
            return <button key={s.id} onClick={() => scrollTo(s.id)} style={{ background: 'none', border: 'none', borderBottom: active ? `2px solid ${OR}` : '2px solid transparent', padding: '9px 12px', fontSize: 11, fontFamily: f, color: active ? OR : '#999', fontWeight: active ? 700 : 400, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.2s', marginBottom: -1 }}>{s.title}</button>
          })}
        </div>
        {canScrollRight && <button onClick={() => shiftTabs(1)} style={{ flexShrink: 0, border: 'none', background: 'white', borderBottom: '2px solid transparent', padding: '0 8px', cursor: 'pointer', color: OR, fontSize: 14, fontWeight: 700 }}>›</button>}
      </div>

      <div ref={scrollRef} style={{ flex: 1, minHeight: 0, overflowY: 'auto', fontFamily: f }}>
        <div style={{ position: 'relative', background: `linear-gradient(150deg, ${OR_BG} 0%, #FFF8EC 60%, white 100%)`, borderBottom: '1px solid #FFD4A8', overflow: 'hidden' }}>
          <div style={{ padding: '32px 40px 28px', maxWidth: 460 }}>
            <div style={{ fontSize: 9, fontFamily: f, color: OR, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 10 }}>Case Study · Desafio UX & UI · 2021</div>
            <h1 style={{ fontSize: 24, fontWeight: 900, color: '#1A1A1A', margin: '0 0 6px', lineHeight: 1.2 }}>Glist <span style={{ color: OR }}>✦</span></h1>
            <p style={{ fontSize: 13, color: '#666', fontFamily: f, margin: '0 0 22px', lineHeight: 1.6 }}>Um app para calcular facilmente a quantidade de alimentos que sua família precisa e parar de desperdiçar comida.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px' }}>
              {[{ label: 'Papel', value: 'Designer UX/UI (designer solo)' }, { label: 'Período', value: '2021' }, { label: 'Tipo', value: 'Desafio Pessoal' }, { label: 'Plataforma', value: 'Mobile · iOS' }].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: 9, fontFamily: f, color: OR, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 3 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={glistHero} alt="Mockup do app Glist" style={{ position: 'absolute', right: -10, bottom: 0, height: '112%', objectFit: 'cover', objectPosition: 'left center', maxWidth: '50%', display: 'block' }} />
        </div>

        <div style={{ padding: '0 40px 56px' }}>
          {anchor('problem')}
          <SectionLabel n="01" label="Problema" />
          <Para>
            O Glist começou como um desafio para descobrir uma forma de ajudar as pessoas a <strong>reduzir o desperdício de comida</strong> por meio de um planejamento de compras mais inteligente. A maioria das pessoas não percebe o quanto de comida joga fora diariamente — de sobras não consumidas a produtos estragados.
          </Para>

          {anchor('research')}
          <SectionLabel n="02" label="Pesquisa" />
          <Para>Antes de definir qualquer solução, precisei entender como as pessoas realmente fazem compras. Comecei com uma Matriz CSD para separar o que eu sabia do que estava assumindo.</Para>
          <div style={{ marginBottom: 16 }}>{img(glistMatriz, 'Matriz CSD')}</div>

          <SubLabel>Pesquisa Quantitativa</SubLabel>
          <Para>Um survey com <strong>68 pessoas em todo o Brasil</strong> explorou o comportamento de consumo em compras de supermercado: com que frequência vão, se fazem listas e se têm dificuldade com quantidades.</Para>
          <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
            {[{ value: '68', label: 'Participantes' }, { value: 'Brasil', label: 'Local' }, { value: 'Quantitativo', label: 'Método' }].map(item => (
              <div key={item.label} style={{ background: OR_BG, border: 'rgba(244,132,26,0.25) 1px solid', borderRadius: 12, padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: OR, fontFamily: f, lineHeight: 1 }}>{item.value}</div>
                <div style={{ fontSize: 9, color: '#999', fontFamily: f, textTransform: 'uppercase', letterSpacing: 1.5 }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
            {[
              { pct: '86,8%', label: 'Usam o celular para manter uma lista de compras' },
              { pct: '65,2%', label: 'São responsáveis pelas compras do supermercado em casa' },
              { pct: '60%',   label: 'Tiveram problemas para calcular quanto de comida comprar' },
              { pct: '46%',   label: 'Frequentemente esquecem de comprar itens importantes sem lista' },
            ].map(item => (
              <div key={item.pct} style={{ background: OR_BG, border: 'rgba(244,132,26,0.2) 1px solid', borderRadius: 12, padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: OR, fontFamily: f, lineHeight: 1, flexShrink: 0 }}>{item.pct}</div>
                <div style={{ fontSize: 11, color: '#666', fontFamily: f, lineHeight: 1.55, paddingTop: 2 }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: OR_BG, border: 'rgba(244,132,26,0.2) 1px solid', borderRadius: 12, padding: '16px 18px', marginBottom: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#888', fontFamily: f, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>Com que frequência você vai ao supermercado?</div>
            {[{ label: '1–4 vezes por semana', pct: 36.8 }, { label: 'Semanalmente', pct: 26.5 }, { label: 'Quinzenalmente', pct: 23.5 }, { label: 'Mensalmente', pct: 22.1 }, { label: 'Compras grandes + pequenas', pct: 3 }].map(row => (
              <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
                <div style={{ fontSize: 10, fontFamily: f, color: '#666', width: 150, flexShrink: 0, lineHeight: 1.3 }}>{row.label}</div>
                <div style={{ flex: 1, height: 8, background: 'rgba(244,132,26,0.12)', borderRadius: 99 }}>
                  <div style={{ height: '100%', width: `${row.pct * (100 / 37)}%`, background: `linear-gradient(to right, ${OR}, #FFB347)`, borderRadius: 99 }} />
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: OR, fontFamily: f, width: 36, textAlign: 'right' }}>{row.pct}%</div>
              </div>
            ))}
          </div>

          <SubLabel>Entrevistas Qualitativas</SubLabel>
          <Para>Realizei <strong>5 entrevistas em profundidade</strong> com pessoas responsáveis pelas compras em suas casas. Três falas que ficaram comigo:</Para>
          <Quote text="Moramos juntos desde novembro e até hoje não conseguimos fazer compras para o mês inteiro. Sempre calculamos algo errado." />
          <Quote text="Normalmente faço a lista em 10 minutos dentro do carro antes de entrar no mercado. Quando lembro de coisas, escrevo num grupo do WhatsApp que tenho comigo mesma." />
          <Quote text="Compramos em pequenas quantidades. A gente não calcula e geralmente fica sem carne até alguém comprar mais." />

          <SubLabel>Mapa de Empatia</SubLabel>
          <div style={{ marginBottom: 16 }}>{img(glistEmpathy, 'Mapa de empatia')}</div>

          {anchor('define')}
          <SectionLabel n="03" label="Definir" />
          <Para>Com a pesquisa concluída, sintetizei o que aprendi em personas e uma jornada do usuário para alinhar para quem estava desenhando e onde vivia a dor real.</Para>
          <div style={{ marginBottom: 16 }}>{img(glistPersonas, 'Personas de usuário')}</div>
          <div style={{ marginBottom: 16 }}>{img(glistJourney, 'Mapa de jornada do usuário')}</div>

          {anchor('goal')}
          <SectionLabel n="04" label="Objetivo do Projeto" />
          <div style={{ background: `linear-gradient(135deg, ${OR_BG}, white)`, border: 'rgba(244,132,26,0.25) 1px solid', borderLeft: `4px solid ${OR}`, borderRadius: '0 12px 12px 0', padding: '18px 20px', marginBottom: 4 }}>
            <Para>A pesquisa deixou claro: as pessoas precisavam de <strong>uma forma fácil e rápida de planejar as compras</strong> antes de ir ao supermercado, onde pudessem informar o tamanho da família, definir para quantos dias planejar e compartilhar a lista com outras pessoas.</Para>
            <Para>O problema com as quantidades não era falta de força de vontade ou memória. Era simplesmente não ter uma ferramenta que ajudasse a calculá-las.</Para>
          </div>

          {anchor('solution')}
          <SectionLabel n="05" label="Solução" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 4 }}>
            {[
              { n: '01', text: 'Informe o número de pessoas que dividem as compras e defina por quantos dias elas devem durar' },
              { n: '02', text: 'O app calcula automaticamente as quantidades dos itens com base no tamanho da família' },
              { n: '03', text: 'Os usuários podem editar individualmente as quantidades, porque nem todo mundo come as mesmas coisas' },
              { n: '04', text: 'Crie e compartilhe listas com os membros da família para compras colaborativas' },
            ].map(item => (
              <div key={item.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: OR_BG, border: 'rgba(244,132,26,0.15) 1px solid', borderLeft: `3px solid ${OR}`, borderRadius: '0 10px 10px 0', padding: '11px 16px' }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: OR, fontFamily: f, flexShrink: 0, marginTop: 2 }}>{item.n}</span>
                <span style={{ fontSize: 12, color: '#555', fontFamily: f, lineHeight: 1.6 }}>{item.text}</span>
              </div>
            ))}
          </div>

          {anchor('ideate')}
          <SectionLabel n="06" label="Ideação" />
          <Para>Um moodboard definiu o tom: <strong>Rápido, Prático, Fácil, Conveniente, Útil, Prático</strong>. Isso guiou todas as decisões visuais e de interação.</Para>
          <div style={{ marginBottom: 16 }}>{img(glistMoodboard, 'Moodboard')}</div>

          {anchor('prototype')}
          <SectionLabel n="07" label="Protótipo" />
          <Para>Sketches ajudaram a transmitir ideias rapidamente, demonstrando funcionalidades e visualizando o fluxo do usuário antes de investir em trabalho de maior fidelidade.</Para>
          <div onClick={() => setExpandedImg({ src: glistSketches, alt: 'Sketches à mão' })} style={{ cursor: 'zoom-in', marginBottom: 16, marginLeft: -40, marginRight: -40 }}>
            <img src={glistSketches} alt="Sketches à mão" style={{ width: '100%', display: 'block' }} />
          </div>
          <Para>Wireframes combinados com o fluxo do usuário ajudaram a planejar como o conteúdo seria exibido na tela, dando visibilidade à estrutura antes de qualquer decisão de design visual.</Para>
          <div style={{ marginBottom: 16 }}>{img(glistWireframes, 'Wireframes e fluxo do usuário')}</div>

          <SubLabel>Style Guide</SubLabel>
          <Para>O sistema visual usou <strong>Poppins</strong> como tipografia principal, com um laranja quente (#EB8034) como cor da marca, refletindo a personalidade prática e amigável do app.</Para>
          <div style={{ position: 'relative', height: 340, marginBottom: 24, overflow: 'hidden' }}>
            <div onClick={() => setExpandedImg({ src: glistStyle03, alt: 'Cores' })} style={{ position: 'absolute', left: 0, top: 0, width: '44%', height: '100%', cursor: 'zoom-in', overflow: 'hidden' }}>
              <img src={glistStyle03} alt="Cores" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
            </div>
            <div onClick={() => setExpandedImg({ src: glistStyle01, alt: 'Tipografia' })} style={{ position: 'absolute', left: '46%', top: 0, right: -40, height: '48%', cursor: 'zoom-in', overflow: 'hidden' }}>
              <img src={glistStyle01} alt="Tipografia" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top', display: 'block' }} />
            </div>
            <div onClick={() => setExpandedImg({ src: glistStyle02, alt: 'Componentes' })} style={{ position: 'absolute', left: '46%', bottom: 0, right: -40, height: '48%', cursor: 'zoom-in', overflow: 'hidden' }}>
              <img src={glistStyle02} alt="Componentes" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top', display: 'block' }} />
            </div>
          </div>

          <SubLabel>Telas de Alta Fidelidade</SubLabel>
          <HiFiScreens screens={[glistProto05, glistProto06]} spread={glistProto04} animation={glistAnimation} onExpand={(src, alt) => setExpandedImg({ src, alt })} f={f} />

          {anchor('testing')}
          <SectionLabel n="08" label="Testes" />
          <Para>Conduzi <strong>5 sessões moderadas de usabilidade</strong> online, com câmera e microfone ligados. Os participantes receberam tarefas para completar enquanto pensavam em voz alta. Observei onde hesitavam, onde se perdiam e o que esperavam encontrar mas não encontravam.</Para>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
            {[{ value: '5', label: 'Sessões' }, { value: 'Online', label: 'Formato' }, { value: 'Think-aloud', label: 'Método' }, { value: '4 KPIs', label: 'Sucesso na missão · Duração · Saídas · Misclicks' }].map(item => (
              <div key={item.label} style={{ flex: 1, background: OR_BG, border: 'rgba(244,132,26,0.15) 1px solid', borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: GR, fontFamily: f, lineHeight: 1, marginBottom: 4 }}>{item.value}</div>
                <div style={{ fontSize: 10, color: '#777', fontFamily: f, letterSpacing: 0.5, lineHeight: 1.4 }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 4 }}>
            {[
              { observed: 'Os usuários ficavam tocando no centro da barra inferior esperando adicionar itens, mas aquele botão abria a tela inicial.', change: 'Alterado o ícone principal da barra inferior para um botão + de adição rápida de itens.' },
              { observed: 'No mercado, os usuários não tinham como acompanhar o que já tinham colocado no carrinho. Ficavam rolando para cima para verificar novamente.', change: 'Adicionado um checkbox antes de cada item para que o usuário possa marcá-lo como comprado enquanto faz as compras.' },
              { observed: 'Usuários com listas longas tinham dificuldade para encontrar itens específicos. Esperavam uma barra de busca no topo da visualização de categorias.', change: 'Adicionada uma barra de busca acima das categorias para localizar rapidamente itens já na lista.' },
            ].map((item, i) => (
              <div key={i} style={{ border: '1px solid rgba(0,0,0,0.07)', borderRadius: 12, overflow: 'hidden', background: 'linear-gradient(to right, white 0%, white 48%, rgba(90,180,130,0.10) 58%, rgba(90,180,130,0.13) 100%)' }}>
                <div style={{ display: 'flex', gap: 0 }}>
                  <div style={{ flex: 1, padding: '14px 16px' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#888', fontFamily: f, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>👁 Observado</div>
                    <div style={{ fontSize: 11, color: '#555', fontFamily: f, lineHeight: 1.65 }}>{item.observed}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 10px', color: GR, fontSize: 16 }}>→</div>
                  <div style={{ flex: 1, padding: '14px 16px' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#3D8B61', fontFamily: f, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>✦ Alterado</div>
                    <div style={{ fontSize: 11, color: '#444', fontFamily: f, lineHeight: 1.65, fontWeight: 500 }}>{item.change}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {anchor('learnings')}
          <SectionLabel n="09" label="Aprendizados" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 4 }}>
            {[
              { title: 'Não reinvente a roda', body: 'Os usuários esperam certos comportamentos. Respeite-os para evitar erros cognitivos e fricção desnecessária.' },
              { title: 'As pessoas precisam encontrar as coisas facilmente', body: 'Fluxos simples criam alegria. Não faça os usuários trabalhar quando estão com pressa para ir ao mercado.' },
              { title: 'Sempre pergunte como elas já fazem', body: 'As pessoas já estão resolvendo seu problema. Entenda como e por quê, depois construa em cima disso.' },
            ].map(item => (
              <div key={item.title} style={{ background: OR_BG, border: 'rgba(244,132,26,0.2) 1px solid', borderRadius: 12, padding: '16px 14px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#1A1A1A', marginBottom: 8, lineHeight: 1.4 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: '#666', fontFamily: f, lineHeight: 1.65 }}>{item.body}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 28 }}>
            {['UX Research', 'UI Design', 'Testes de Usabilidade', 'Double Diamond', 'Design Mobile', 'Desafio Pessoal'].map(t => chip(t))}
          </div>
        </div>
        <CaseNavCards cases={[{ id: 'proj-petrobras', onOpen: onOpenPetrobras }, { id: 'proj-search', onOpen: onOpenSearch }]} lang="pt" />
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [entered, setEntered] = useState(false)
  const [lang, setLang] = useState('en')
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

  if (!entered) return <EnterScreen onEnter={(l) => { setLang(l); setEntered(true) }} />

  const ptTitles = { about: 'sobre.txt', resume: 'curriculo.pdf', projects: 'projetos/', contact: 'contato.txt', 'proj-petrobras': 'Dados Históricos', 'proj-search': 'Buscador de Docs', 'proj-glist': 'Glist' }
  const getTitle = (w) => lang === 'pt' && ptTitles[w.id] ? ptTitles[w.id] : w.title
  const getPtUrl = (id) => id === 'proj-petrobras' ? 'tha.design/dados-historicos' : id === 'proj-search' ? 'tha.design/buscador-docs' : null

  return (
    <div style={{ cursor: 'default', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <MacMenuBar lang={lang} onLangChange={setLang} />
      <Desktop windows={windows} onOpen={openWindow} lang={lang} />

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
          title={getTitle(w)}
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
            w.id === 'contact'       ? 480 :
            w.id === 'proj-petrobras'? 780 :
            w.id === 'proj-search'   ? 780 :
            w.id === 'proj-glist'    ? 720 :
            w.id.startsWith('proj-') ? 500 : 540
          }
          height={
            w.id === 'home'          ? 520 :
            w.id === 'about'         ? 560 :
            w.id === 'projects'      ? 340 :
            w.id === 'contact'       ? 500 :
            w.id === 'proj-petrobras'? 580 :
            w.id === 'proj-search'   ? 580 :
            w.id === 'proj-glist'    ? 560 :
            w.id.startsWith('proj-') ? 380 : 420
          }
          toolbar={
            w.id === 'home'           ? <BrowserToolbar url="tha.design" /> :
            w.id === 'proj-petrobras' ? <BrowserToolbar url={lang === 'pt' ? getPtUrl(w.id) : 'tha.design/historical-data'} /> :
            w.id === 'proj-search'    ? <BrowserToolbar url={lang === 'pt' ? getPtUrl(w.id) : 'tha.design/documents-search-engine'} /> :
            null
          }
        >
          {w.id === 'home'    && (lang === 'pt' ? <HomeContentPt /> : <HomeContent />)}
          {w.id === 'contact' && <ContactForm lang={lang} />}
          {w.id === 'about'   && (lang === 'pt' ? <AboutContentPt /> : <AboutContent />)}
          {w.id === 'resume'  && (lang === 'pt' ? <ResumeContentPt /> : <ResumeContent />)}
          {w.id === 'projects' && <ProjectsContent onOpenProject={openWindow} lang={lang} />}
          {w.id === 'proj-petrobras' && <PasswordGate lang={lang}>{lang === 'pt' ? <PetrobrasCaseStudyPt onOpenSearch={() => openWindow('proj-search')} onOpenGlist={() => openWindow('proj-glist')} /> : <PetrobrasCaseStudy onOpenSearch={() => openWindow('proj-search')} onOpenGlist={() => openWindow('proj-glist')} />}</PasswordGate>}
          {w.id === 'proj-search'    && <PasswordGate lang={lang}>{lang === 'pt' ? <DocumentsSearchEngineCaseStudyPt onOpenPetrobras={() => openWindow('proj-petrobras')} onOpenGlist={() => openWindow('proj-glist')} /> : <DocumentsSearchEngineCaseStudy onOpenPetrobras={() => openWindow('proj-petrobras')} onOpenGlist={() => openWindow('proj-glist')} />}</PasswordGate>}
          {w.id === 'proj-glist'     && (lang === 'pt' ? <GlistCaseStudyPt onOpenPetrobras={() => openWindow('proj-petrobras')} onOpenSearch={() => openWindow('proj-search')} /> : <GlistCaseStudy onOpenPetrobras={() => openWindow('proj-petrobras')} onOpenSearch={() => openWindow('proj-search')} />)}
          {w.id.startsWith('proj-') && w.id !== 'proj-petrobras' && w.id !== 'proj-search' && w.id !== 'proj-glist' && <ProjectDetailContent projectId={w.id} />}
        </MacWindow>
      ))}

      {/* Floating dock — rendered last so it's above everything */}
      <MacDock projects={PROJECT_DATA} windows={windows} onOpen={openWindow} lang={lang} />

      {/* ✦ Sparkle cursor trail */}
      <SparkleTrail />
    </div>
  )
}

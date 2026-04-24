import { useEffect, useRef, useState } from 'react'
import styles from './ProjectStack.module.css'

const SCROLL_PER_CARD = 600

const projects = [
  {
    id: '01',
    title: 'Dough',
    description: 'Redesigning personal finance to feel less like a spreadsheet and more like a game you\'re winning.',
    tags: ['Fintech', 'App Design'],
    bg: '#e4d9ff',
    accent: '#9066ff',
    mockup: 'mockup1',
  },
  {
    id: '02',
    title: 'CollabOS',
    description: 'A brutalist-lite component library built for a team that moves fast and breaks rules intentionally.',
    tags: ['SaaS', 'Design System'],
    bg: '#ffd6f7',
    accent: '#ff68de',
    mockup: 'mockup2',
  },
  {
    id: '03',
    title: 'Aura',
    description: 'Visual identity and onboarding flow for a decentralized social protocol.',
    tags: ['Web3', 'Identity'],
    bg: '#d6f9c0',
    accent: '#5cb800',
    mockup: 'mockup3',
  },
  {
    id: '04',
    title: 'Thread',
    description: 'Streamlining the checkout experience for Gen-Z fashion brands.',
    tags: ['E-commerce', 'UX Research'],
    bg: '#fff0b8',
    accent: '#c89000',
    mockup: 'mockup4',
  },
]

function Mockup({ type, accent }) {
  if (type === 'mockup1') return (
    <div className={styles.mockupShell}>
      <div className={styles.mockupCard} style={{ top: '10%', left: '5%', rotate: '-4deg' }}>
        <div className={styles.mBar} />
        <div className={styles.mBar} style={{ width: '60%' }} />
        <div className={styles.mCircle} style={{ background: accent }} />
      </div>
      <div className={styles.mockupCard} style={{ top: '40%', left: '30%', rotate: '3deg' }}>
        <div className={styles.mBar} />
        <div className={styles.mBar} style={{ width: '40%' }} />
      </div>
    </div>
  )
  if (type === 'mockup2') return (
    <div className={styles.mockupShell}>
      <div className={styles.mockupCard} style={{ top: '5%', left: '10%', rotate: '-2deg', background: '#1c1c21', gap: '12px' }}>
        <div className={styles.mBar} style={{ background: accent }} />
        <div className={styles.mBar} style={{ background: '#444', width: '70%' }} />
        <div className={styles.mBar} style={{ background: '#444', width: '50%' }} />
      </div>
      <div className={styles.mockupCard} style={{ top: '42%', left: '25%', rotate: '4deg' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: 32, height: 20, borderRadius: 10, background: accent }} />
          <div style={{ width: 32, height: 20, borderRadius: 10, background: '#e0e0e0' }} />
          <div style={{ width: 32, height: 20, borderRadius: 10, background: '#e0e0e0' }} />
        </div>
      </div>
    </div>
  )
  if (type === 'mockup3') return (
    <div className={styles.mockupShell}>
      <div className={styles.mockupCard} style={{ top: '8%', left: '15%', rotate: '3deg', alignItems: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: accent, opacity: 0.7 }} />
        <div className={styles.mBar} style={{ width: '80%' }} />
      </div>
      <div className={styles.mockupCard} style={{ top: '45%', left: '5%', rotate: '-3deg' }}>
        <div className={styles.mBar} />
        <div className={styles.mBar} style={{ width: '50%' }} />
      </div>
    </div>
  )
  if (type === 'mockup4') return (
    <div className={styles.mockupShell}>
      <div className={styles.mockupCard} style={{ top: '5%', left: '10%', rotate: '-2deg' }}>
        <div className={styles.mBar} />
        <div className={styles.mBar} style={{ width: '60%' }} />
        <div style={{ height: 32, borderRadius: 8, background: accent, width: '100%' }} />
      </div>
      <div className={styles.mockupCard} style={{ top: '42%', left: '28%', rotate: '4deg' }}>
        <div className={styles.mBar} />
        <div className={styles.mBar} style={{ width: '40%' }} />
      </div>
    </div>
  )
}

export default function ProjectStack() {
  const wrapperRef = useRef(null)
  const [offsets, setOffsets] = useState(() => projects.map((_, i) => i === 0 ? 0 : 1))
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const scrolled = -rect.top

      const newOffsets = projects.map((_, i) => {
        if (i === 0) return 0
        const start = (i - 1) * SCROLL_PER_CARD
        const progress = Math.min(1, Math.max(0, (scrolled - start) / SCROLL_PER_CARD))
        return 1 - progress
      })

      setOffsets(newOffsets)

      // active = topmost card that is fully visible
      const active = newOffsets.reduce((acc, offset, i) => offset < 0.5 ? i : acc, 0)
      setActiveIndex(active)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToCard = (i) => {
    if (!wrapperRef.current) return
    const wrapperTop = wrapperRef.current.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: wrapperTop + i * SCROLL_PER_CARD, behavior: 'smooth' })
  }

  const wrapperHeight = `calc(100vh + ${(projects.length - 1) * SCROLL_PER_CARD}px)`

  return (
    <div ref={wrapperRef} style={{ height: wrapperHeight, position: 'relative' }}>
      <div className={styles.stickyContainer}>

        {/* Cards area */}
        <div className={styles.cardsArea}>
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={styles.card}
              style={{
                background: p.bg,
                zIndex: i + 1,
                transform: `translateY(calc(-50% + ${offsets[i] * 110}vh))`,
              }}
            >
              {/* Tab bar attached to top of card */}
              <div className={styles.tabBar}>
                {projects.map((tp, ti) => (
                  <button
                    key={tp.id}
                    className={`${styles.folderTab} ${activeIndex === ti ? styles.folderTabActive : ''}`}
                    style={activeIndex === ti
                      ? { background: projects[ti].bg, borderColor: projects[ti].accent + '66', color: projects[ti].accent }
                      : {}
                    }
                    onClick={() => scrollToCard(ti)}
                  >
                    {tp.id}
                  </button>
                ))}
              </div>

              <div className={styles.cardInner}>
                <div className={styles.cardLeft}>
                  <div className={styles.cardMeta}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag} style={{ borderColor: p.accent + '44', color: p.accent }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.description}</p>
                  <a href="#" className={styles.cardLink} style={{ color: p.accent }}>View project →</a>
                </div>
                <div className={styles.cardRight}>
                  <Mockup type={p.mockup} accent={p.accent} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
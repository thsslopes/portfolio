import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

function StickerAwaken() {
  return (
    <div className={`${styles.sticker} ${styles.stickerAwaken} sticker`}>
      <span className={styles.bubbleSmall}>hello oo!</span>
      <h3 className={styles.awakenTitle}>
        awaken<br />new<br />horizons
        <div className={styles.circleDoodle} />
      </h3>
      <svg className={styles.yellowArm} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 20C80 20 70 40 50 60C30 80 10 70 0 50" stroke="var(--yellow)" strokeWidth="15" strokeLinecap="round" />
        <path d="M40 50 L50 40 M45 60 L55 50 M35 55 L45 45" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '20px', right: '20px', width: '20px' }} viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </div>
  )
}

function StickerLime() {
  return (
    <div className={`${styles.sticker} ${styles.stickerLime} sticker`}>
      <svg className={styles.sparkle} viewBox="0 0 50 50">
        <path d="M25 0 L30 20 L50 25 L30 30 L25 50 L20 30 L0 25 L20 20 Z" fill="var(--white)" stroke="var(--ink)" strokeLinejoin="round" />
      </svg>
      <svg className={styles.lines} viewBox="0 0 40 40" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M10 30 C15 20 20 10 30 0" />
        <path d="M20 40 C25 30 30 20 40 10" />
        <path d="M0 20 C10 15 20 5 25 -5" />
      </svg>
      <h2 className={styles.limeTitle}>let&apos;s<br />gooo<br />ooo?!</h2>
    </div>
  )
}

function StickerPink() {
  return (
    <div className={`${styles.sticker} ${styles.stickerPink} sticker`}>
      <div className={styles.bgText}>talk<br />talk<br />talk</div>
      <svg className={styles.doodleOverlay} viewBox="0 0 200 200">
        <path d="M120 30 C 170 30, 180 80, 150 120 C 120 160, 80 150, 90 100 C 100 60, 130 50, 140 60" />
        <path d="M50 30 L 40 100 L 20 80 M 40 100 L 60 90" />
        <path d="M120 170 L 140 150 L 130 130 L 150 110 L 140 90" />
        <g transform="translate(40, 120) scale(0.6)">
          <path d="M30 10 C 50 10, 60 30, 50 50 C 45 60, 40 70, 40 80 L 20 80 C 20 70, 15 60, 10 50 C 0 30, 10 10, 30 10 Z" fill="var(--purple)" />
          <path d="M20 80 L 40 80 M 25 90 L 35 90 M 28 100 L 32 100" />
        </g>
      </svg>
    </div>
  )
}

function StickerPurple() {
  return (
    <div className={`${styles.sticker} ${styles.stickerPurple} sticker`}>
      <svg className={styles.face} viewBox="0 0 100 100" fill="none">
        <path d="M10 30 C 20 20, 40 20, 50 30 C 40 40, 20 40, 10 30 Z" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="25" cy="30" r="5" fill="var(--ink)" />
        <path d="M15 20 L 45 25" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 0 C 20 -10, 30 0, 20 10 C 10 20, 20 30, 30 20 C 40 10, 50 20, 40 30 C 30 40, 40 50, 50 40" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        <path d="M80 30 C 90 20, 110 30, 120 10" stroke="var(--ink)" strokeWidth="15" strokeLinecap="round" fill="none" strokeLinejoin="round" />
        <path d="M120 10 L 115 -5 M 120 10 L 135 5" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      if (!contentRef.current) return
      const x = (window.innerWidth / 2 - e.clientX) * 0.02
      const y = (window.innerHeight / 2 - e.clientY) * 0.02
      contentRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <header className={styles.hero}>
      <StickerAwaken />
      <StickerLime />
      <StickerPink />
      <StickerPurple />

      <div ref={contentRef} className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          hi, i&apos;m thais!<br />
          i&apos;m a product designer<br />
          simplifying complexity<br />
          through <span className={styles.highlight}>strategy</span><br />
          and <span className={styles.selectionBox}>
            empathy
            <span className={styles.handle} style={{top:'-4px',left:'-4px'}}/>
            <span className={styles.handle} style={{top:'-4px',right:'-4px'}}/>
            <span className={styles.handle} style={{bottom:'-4px',left:'-4px'}}/>
            <span className={styles.handle} style={{bottom:'-4px',right:'-4px'}}/>
            <svg className={styles.selectionCursor} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L10 22L13 14L21 11L2 2Z" fill="#a8c8f8" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              <line x1="19" y1="17" x2="23" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="21" y1="15" x2="21" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>
        <p className={styles.heroSub}></p>
      </div>

      <div className={styles.scrollIndicator}>
        scroll
        <svg viewBox="0 0 24 24">
          <path d="M12 4 L12 20 M5 13 L12 20 L19 13" />
        </svg>
      </div>
    </header>
  )
}

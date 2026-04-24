import styles from './ProjectCard.module.css'

function Mockup1({ style }) {
  return (
    <div className={`${styles.cardImage} ${styles.mockup1}`} style={style}>
      <div className={styles.mockup1Inner}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div className={styles.mCircle} />
          <div className={`${styles.mBar} ${styles.short}`} style={{ width: '20%' }} />
        </div>
        <div className={styles.mBar} />
        <div className={`${styles.mBar} ${styles.short}`} />
        <div className={styles.mBar} />
      </div>
    </div>
  )
}

function Mockup1Alt() {
  return (
    <div
      className={`${styles.cardImage} ${styles.mockup1}`}
      style={{ background: 'linear-gradient(135deg, #ffc3a0 0%, #ffafbd 100%)' }}
    >
      <div className={styles.mockup1Inner} style={{ borderRadius: '40px', justifyContent: 'center', alignItems: 'center' }}>
        <div className={styles.mCircle} style={{ width: '80px', height: '80px', background: 'var(--yellow)' }} />
      </div>
    </div>
  )
}

function Mockup2({ style, innerStyle, children }) {
  return (
    <div className={`${styles.cardImage} ${styles.mockup2}`} style={style}>
      <div className={styles.mockup2Inner} style={innerStyle}>
        {children}
      </div>
    </div>
  )
}

const projects = [
  {
    id: 1,
    title: 'Dough',
    description: 'Redesigning personal finance to feel less like a spreadsheet and more like a game you\'re winning.',
    tags: ['Fintech', 'App Design'],
    doodle: (
      <svg className={`${styles.cardDoodle} ${styles.cd1}`} viewBox="0 0 50 50" fill="none" strokeWidth="3" strokeLinecap="round">
        <path d="M10 25 L 40 25 M 25 10 L 25 40 M 15 15 L 35 35 M 15 35 L 35 15" />
      </svg>
    ),
    mockup: <Mockup1 />,
  },
  {
    id: 2,
    title: 'CollabOS',
    description: 'A brutalist-lite component library built for a team that moves fast and breaks rules intentionally.',
    tags: ['SaaS', 'Design System'],
    doodle: (
      <svg className={`${styles.cardDoodle} ${styles.cd2}`} viewBox="0 0 50 50" fill="none" strokeWidth="3" strokeLinecap="round">
        <path d="M10 40 C 20 10, 30 10, 40 40 C 30 30, 20 30, 10 40 Z" />
      </svg>
    ),
    mockup: (
      <Mockup2>
        <div className={`${styles.mPill} ${styles.active}`} />
        <div className={styles.mPill} />
        <div className={styles.mPill} />
      </Mockup2>
    ),
  },
  {
    id: 3,
    title: 'Aura',
    description: 'Visual identity and onboarding flow for a decentralized social protocol.',
    tags: ['Web3', 'Identity'],
    mockup: <Mockup1Alt />,
  },
  {
    id: 4,
    title: 'Thread',
    description: 'Streamlining the checkout experience for Gen-Z fashion brands.',
    tags: ['E-commerce', 'UX Research'],
    mockup: (
      <Mockup2
        style={{ background: 'var(--purple)' }}
        innerStyle={{ background: 'white', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}
      >
        <div className={styles.mBar} style={{ width: '80%', background: 'var(--bg)' }} />
        <div className={styles.mBar} style={{ width: '60%', background: 'var(--bg)' }} />
      </Mockup2>
    ),
  },
]

function Card({ project }) {
  return (
    <a href="#" className={styles.projectCard}>
      {project.doodle}
      {project.mockup}
      <div className={styles.cardMeta}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>
    </a>
  )
}

export default function WorkSection() {
  return (
    <main className={styles.workSection}>
      <div className={styles.grid}>
        {projects.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </main>
  )
}

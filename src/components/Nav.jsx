import styles from './Nav.module.css'

const links = ['Work', 'Playground', 'About', 'Resume']

export default function Nav({ active = 'Work' }) {
  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className={`${styles.link} ${active === link ? styles.active : ''}`}
        >
          {link}
        </a>
      ))}
    </nav>
  )
}

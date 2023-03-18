import styles from '@/styles/Nav.module.css'

export default function NavContent() {
  return (
    <div className={styles['nav-content']}>
      <div className={styles['logo']}>DA</div>
      <ul className={styles['nav-links']}>
        <li><a href="#home">HOME</a></li>
        <li><a href="#profile">PROFILE</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#photography">PHOTOGRAPHY</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <a
        href="/daniel-apodaca-resume.pdf"
        target="_blank"
        className={styles['resume']}
      >
        RESUME
      </a>
    </div>
  )
}

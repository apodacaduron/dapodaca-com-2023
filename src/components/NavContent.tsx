import styles from '@/styles/Nav.module.css'

export default function NavContent() {
  return (
    <div className={styles['nav-content']}>
      <div>DA</div>
      <ul className={styles['nav-links']}>
        <li>HOME</li>
        <li>PROFILE</li>
        <li>PROJECTS</li>
        <li>EXPERIENCE</li>
        <li>PHOTOGRAPHY</li>
        <li>CONTACT</li>
      </ul>
      <button className={styles['resume']}>RESUME</button>
    </div>
  )
}

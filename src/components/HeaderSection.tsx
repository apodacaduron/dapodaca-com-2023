import NavContent from "./NavContent";
import styles from '@/styles/Home.module.css'

export default function HeaderSection() {
  return (
    <section id="home" className={styles['header-section']}>
      <div className={styles['nav']}>
        <NavContent />
      </div>
      <div className={styles['heading']}>
        <h1>DANIEL APODACA</h1>
        <p>FRONTEND DEVELOPER</p>
      </div>
      <div className="scroll-down">
        Scroll down
      </div>
    </section>
  )
}

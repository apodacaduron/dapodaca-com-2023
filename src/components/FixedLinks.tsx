import styles from '@/styles/FixedLinks.module.css'
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGithub,
  IconCamera,
} from '@tabler/icons-react'

export default function FixedLinks() {
  return (
    <div className={styles["fixed-links"]}>
      <div className={styles["left-links"]}>
        <div className={styles["vertical-icons"]}>
          <a
            href="https://www.linkedin.com/in/danielapodaca96/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <IconBrandLinkedin className={styles["icon"]} size={32} />
          </a>
          <a
            href="https://www.instagram.com/danielapodaca96"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <IconBrandInstagram className={styles["icon"]} size={32} />
          </a>
          <a
            href="https://github.com/apodacaduron"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <IconBrandGithub className={styles["icon"]} size={32} />
          </a>
          <a
            href="https://unsplash.com/@danielapodaca96"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unsplash"
          >
            <IconCamera className={styles["icon"]} size={32} />
          </a>
        </div>
        <div className={styles["vertical-line"]}></div>
      </div>
      <div className={styles["right-links"]}>
        <div className={styles["vertical-email"]}>
          <a href="mailto:apodacaduron@outlook.com" aria-label="Email">
            apodacaduron@outlook.com
          </a>
        </div>
        <div className={styles["vertical-line"]}></div>
      </div>
    </div>
  )
}

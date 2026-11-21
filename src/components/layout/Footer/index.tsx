import Image from 'next/image'
import styles from './index.module.css'

const website = 'https://www.phoenix-fitness.in'
const socials = [
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/phoenixfitnessbanglore/' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/phoenixfitness_bangalore/' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/phoenix-fitness-solutions/' },
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/channel/UC1q-dfQ2T2euEbMSeJ3_PBA' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href={website}>
            <Image
              src="/images/home/home_footer_logo.png"
              alt="Phoenix Fitness"
              width={1184}
              height={201}
              className={styles.logo}
            />
          </a>
        </div>

        <small className={styles.copyright}>&copy; {new Date().getFullYear()}. All rights reserved.</small>

        <nav className={styles.socials} aria-label="Phoenix Fitness social media">
          {socials.map(({ label, icon, href }) => (
            <a key={icon} href={href} aria-label={label}>
              <Image src={`/images/home/${icon}.png`} alt="" width={27} height={27} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

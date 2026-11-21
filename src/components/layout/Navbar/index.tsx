'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Phone } from 'lucide-react'
import styles from './index.module.css'

export default function Navbar({ contactHref = '#franchise-form' }: { contactHref?: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarInner}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/images/logo.png" alt="Phoenix Fitness" width={391} height={57} className={styles.logo} priority />
        </Link>

        <nav className={styles.actions} aria-label="Contact options">
          <a href="tel:+919880537297" className={`${styles.action} ${styles.outlineAction}`}>
            <span className={styles.actionLabel}>Call now</span>
            <span className={styles.actionIcon} aria-hidden="true"><Phone size={18} /></span>
          </a>
          <Link href={contactHref} className={styles.action}>
            <span className={styles.actionLabel}>Book appointment</span>
            <span className={styles.actionIcon} aria-hidden="true"><ArrowUpRight size={23} /></span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

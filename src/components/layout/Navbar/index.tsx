'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import styles from './index.module.css'
import Button from '../../ui/Button'

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

        <div className={styles.actions}>
          <Button variant="white" pill href={contactHref} className={styles.contactBtn}>
            Contact us
          </Button>
          <Link href={contactHref} className={styles.arrowBtn} aria-label="Contact us">
            <ArrowUpRight size={25} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </header>
  )
}

import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "./site-header";
import { contactDetails, navigationLinks } from "./site-content";
import styles from "./page.module.css";
import inner from "./supporting-pages.module.css";

export function Eyebrow({ children }: { children: string }) {
  return <p className={styles.eyebrow}><span className={styles.accent} aria-hidden="true" />{children}</p>;
}

export function Arrow({ down = false }: { down?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={down ? styles.arrowDown : styles.arrow}>
    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

export function ContactDetails({ className = "" }: { className?: string }) {
  return <div className={`${styles.contactDetails} ${className}`}>
    <div><p className={styles.contactLabel}>Email</p><a href={contactDetails.emailHref}>{contactDetails.email}</a></div>
    <div><p className={styles.contactLabel}>Phone</p><a href={contactDetails.phoneHref}>{contactDetails.phone}</a></div>
  </div>;
}

export function ContactPanel() {
  return <section id="contact" tabIndex={-1} className={styles.contact} aria-labelledby="contact-heading">
    <div className={styles.sectionHeading}>
      <Eyebrow>Let’s connect</Eyebrow>
      <h2 id="contact-heading" className={styles.sectionTitle}>I’d be glad<br /> to hear from you.</h2>
    </div>
    <div className={styles.sectionCopy}>
      <p>Have an insurance question or an introduction in mind? Email or call me.</p>
      <a href={contactDetails.emailHref} className={`${styles.primaryLink} ${styles.emailButton}`}>Email me <Arrow /></a>
      <ContactDetails />
    </div>
  </section>;
}

export function SiteFooter() {
  return <footer className={styles.footer}>
    <div className={styles.footerIdentity}>
      <Link href="/" className={styles.wordmark} aria-label="Ted Leung, home">Ted Leung<span aria-hidden="true">.</span></Link>
      <p>Group 7 Insurance Brokers Inc.<br />Life &amp; Wealth Division</p>
    </div>
    <nav aria-label="Footer navigation" className={styles.footerNav}>
      {navigationLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
    </nav>
    <ContactDetails className={styles.footerContact} />
    <p className={styles.copyright}>© {new Date().getFullYear()} Ted Leung</p>
  </footer>;
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div id="top" tabIndex={-1} className={styles.page}>
    <a className={styles.skipLink} href="#main">Skip to content</a>
    <div className={styles.frame}>
      <SiteHeader />
      <main id="main" tabIndex={-1} className={`${styles.main} ${inner.main}`}>{children}</main>
      <SiteFooter />
    </div>
  </div>;
}
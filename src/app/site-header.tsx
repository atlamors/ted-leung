"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import pageStyles from "./page.module.css";
import styles from "./site-header.module.css";
import { contactDetails, navigationLinks } from "./site-content";

function MenuIcon({ expanded = false }: { expanded?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"
      className={styles.menuIcon} data-expanded={expanded}>
      <rect x="2.75" y="2.75" width="14.5" height="14.5" rx="3.25"
        stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.25 5.5v9" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" className={styles.iconDivider} />
    </svg>
  );
}

function Wordmark({ onClick }: { onClick?: (event: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <Link href="/" className={pageStyles.wordmark} aria-label="Ted Leung, home"
      onClick={onClick}>
      Ted Leung<span aria-hidden="true">.</span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingDestination = useRef<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function finishClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
    dialogRef.current?.close();
    setIsOpen(false);
    setIsClosing(false);
  }

  function openMenu() {
    pendingDestination.current = null;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsClosing(false);
    // Preserve the header alignment when locking a page with a classic scrollbar.
    dialogRef.current?.style.setProperty("--menu-scrollbar-width",
      `${window.innerWidth - document.documentElement.clientWidth}px`);
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  function closeMenu() {
    if (isClosing) return;
    setIsClosing(true);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimer.current = setTimeout(finishClose, reducedMotion ? 0 : 200);
  }

  function navigateTo(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    pendingDestination.current = href;
    closeMenu();
  }

  function containFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = event.currentTarget.querySelectorAll<HTMLElement>("a[href], button");
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  useEffect(() => {
    if (!isOpen) {
      const href = pendingDestination.current;
      pendingDestination.current = null;
      if (href) router.push(href);
      return;
    }

    const body = document.body;
    const scrollY = window.scrollY;
    const original = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    Object.assign(body.style, {
      position: "fixed", top: `-${scrollY}px`, width: "100%", overflow: "hidden",
    });

    return () => {
      Object.assign(body.style, original);
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [isOpen, router]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const onResize = () => {
      if (desktop.matches) {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        dialogRef.current?.close();
        setIsOpen(false);
        setIsClosing(false);
        pendingDestination.current = null;
      }
    };
    desktop.addEventListener("change", onResize);
    return () => {
      desktop.removeEventListener("change", onResize);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <header className={pageStyles.header}>
        <Wordmark />
        <nav aria-label="Main navigation" className={styles.desktopNav}>
          {navigationLinks.map((link) => (
            <Link key={link.href} className={pageStyles.navLink} href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button type="button" className={`${styles.toggle} ${styles.mobileToggle}`}
          onClick={openMenu} aria-label="Open menu" aria-expanded={isOpen}
          aria-controls="mobile-menu" aria-haspopup="dialog">
          <MenuIcon />
        </button>
      </header>

      <dialog ref={dialogRef} id="mobile-menu" aria-label="Site navigation"
        className={styles.menu} data-closing={isClosing}
        onKeyDown={containFocus}
        onCancel={(event) => { event.preventDefault(); closeMenu(); }}>
        <div className={styles.menuFrame}>
          <div className={`${pageStyles.header} ${styles.menuHeader}`}>
            <Wordmark onClick={(event) => navigateTo(event, "/")} />
            <button type="button" className={styles.toggle} onClick={closeMenu}
              aria-label="Close menu" autoFocus>
              <MenuIcon expanded={!isClosing} />
            </button>
          </div>
          <div className={styles.menuBody}>
            <div className={styles.menuContent}>
              <nav aria-label="Mobile navigation" className={styles.menuNav}>
                <ul>
                  {navigationLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined}
                        onClick={(event) => navigateTo(event, link.href)}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <footer className={styles.menuFooter}>
                <p className={styles.contactLabel}>Get in touch</p>
                <div className={styles.contactLinks}>
                  <a href={contactDetails.emailHref} onClick={closeMenu}>
                    {contactDetails.email}
                  </a>
                  <a href={contactDetails.phoneHref} onClick={closeMenu}
                    aria-label={`Call me at ${contactDetails.phone}`}>
                    {contactDetails.phone}
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

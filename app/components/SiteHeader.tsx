"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#ventures", label: "Ventures" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

const SCROLL_THRESHOLD = 6;

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";

      if (wasMenuOpenRef.current) {
        menuButtonRef.current?.focus();
      }

      wasMenuOpenRef.current = false;
      return;
    }

    wasMenuOpenRef.current = true;
    document.body.style.overflow = "hidden";
    firstMenuLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menuPanelRef.current) {
        return;
      }

      const focusable = menuPanelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header" data-scrolled={isScrolled ? "true" : "false"}>
        <div className="content-container site-header-inner">
          <Link href="/" className="site-logo" aria-label="EQUITES home">
            <Image
              src="/logo.png"
              alt="EQUITES"
              width={310}
              height={62}
              priority
              className="site-logo-image"
            />
          </Link>

          <nav className="site-nav-desktop" aria-label="Primary navigation">
            <ul className="site-nav-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header-actions">
            <button
              ref={menuButtonRef}
              type="button"
              className="site-menu-button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="site-mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="site-menu-line" aria-hidden="true" />
              <span className="site-menu-line" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          className="site-mobile-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeMenu();
            }
          }}
        >
          <div
            id="site-mobile-menu"
            ref={menuPanelRef}
            className="site-mobile-panel"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <nav aria-label="Mobile primary navigation">
              <ul className="site-mobile-nav-list">
                {NAV_ITEMS.map((item, index) => (
                  <li key={`${item.href}-mobile`}>
                    <Link
                      ref={index === 0 ? firstMenuLinkRef : undefined}
                      href={item.href}
                      className="site-mobile-nav-link"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}

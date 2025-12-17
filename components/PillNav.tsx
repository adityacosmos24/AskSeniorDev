import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './PillNav.css';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;

  /* ✅ ADDITION */
  variant?: 'nav' | 'tabs';
  onTabChange?: (value: string) => void;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,

  /* ✅ ADDITION */
  variant = 'nav',
  onTabChange
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);

  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLElement | null>(null);

  /* ================= SETUP (ORIGINAL SPEED RESTORED) ================= */
  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(
          R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))
        ) + 1;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${D - delta}px`
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const hover = pill.querySelector<HTMLElement>('.pill-label-hover');

        gsap.set(label, { y: 0 });
        gsap.set(hover, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, duration: 2, ease }, 0);
        tl.to(label, { y: -(h + 8), duration: 2, ease }, 0);
        tl.to(hover, { y: 0, opacity: 1, duration: 2, ease }, 0);

        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);
    return () => window.removeEventListener('resize', layout);
  }, [items, ease]);

  /* ================= HOVER (VISIBLE + SMOOTH) ================= */
  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.35,
      ease
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.25,
      ease
    });
  };

  /* ================= MOBILE MENU ================= */
  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);

    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (next) {
      gsap.set(menu, { visibility: 'visible' });
      gsap.fromTo(
        menu,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease }
      );
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: 10,
        duration: 0.25,
        ease,
onComplete: () => {
  gsap.set(menu, { visibility: 'hidden' });
}
      });
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor
  } as React.CSSProperties;

  const isTabs = variant === 'tabs';

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${isTabs ? 'pill-tabs' : ''} ${className}`} style={cssVars}>
        {/* LOGO ONLY FOR NAV */}
        {!isTabs && (
          <Link
            className="pill-logo"
            to="/"
            ref={logoRef}
            onMouseEnter={() => {
              if (!logoImgRef.current) return;
              logoTweenRef.current?.kill();
              logoTweenRef.current = gsap.to(logoImgRef.current, {
                rotate: 360,
                duration: 0.3,
                ease
              });
            }}
          >
            <img src={logo} alt={logoAlt} ref={logoImgRef} />
          </Link>
        )}

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list">
            {items.map((item, i) => (
              <li key={item.href}>
                <a
                  href={isTabs ? '#' : item.href}
                  className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  onClick={(e) => {
                    if (isTabs) {
                      e.preventDefault();
                      onTabChange?.(item.href);
                    }
                  }}
                >
                  <span
                    className="hover-circle"
                    ref={el => (circleRefs.current[i] = el)}
                  />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover">{item.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE BUTTON FOR BOTH VARIANTS */}
        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* MOBILE POPOVER FOR BOTH VARIANTS */}
      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map(item => (
            <li key={item.href}>
              {isTabs ? (
                <button
                  className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
                  onClick={() => {
                    onTabChange?.(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
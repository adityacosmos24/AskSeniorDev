'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-[#F7F7F7] shadow-sm'
          : 'bg-white border-[#F7F7F7]'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Logo (unchanged on mobile) */}
          <div className="flex-1 flex justify-start">
            <Link href="/">
              <h1 className="text-[#00A3FF] font-bold text-2xl cursor-pointer tracking-tight">
                Senior
              </h1>
            </Link>
          </div>

          {/* Desktop Nav (unchanged) */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
            <Link href="/" className="hover:text-[#00A3FF] transition-colors">Home</Link>
            <Link href="/cm-sheet" className="hover:text-[#00A3FF] transition-colors">CM Sheet</Link>
            <Link href="/blog" className="hover:text-[#00A3FF] transition-colors">Blog</Link>
            <Link href="/ask-code" className="hover:text-[#00A3FF] transition-colors">Ask Code</Link>
            <Link href="/qa" className="hover:text-[#00A3FF] transition-colors">QA</Link>
          </nav>

          {/* Desktop Actions (unchanged) */}
          <div className="hidden md:flex flex-1 justify-end gap-3">
            <Link
              href="/profile"
              className="inline-block bg-[#00A3FF] hover:bg-sky-600 text-white px-6 py-2 rounded font-semibold text-sm shadow-sm transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/profile"
              className="inline-block bg-[#00A3FF] hover:bg-sky-600 text-white px-6 py-2 rounded font-semibold text-sm shadow-sm transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-700"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#F7F7F7] bg-white/90 backdrop-blur-md">
          <div className="px-6 py-5 flex flex-col gap-4 text-sm font-medium text-slate-700">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/cm-sheet" onClick={() => setOpen(false)}>CM Sheet</Link>
            <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/ask-code" onClick={() => setOpen(false)}>Ask Code</Link>
            <Link href="/qa" onClick={() => setOpen(false)}>QA</Link>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="w-full text-center bg-[#00A3FF] hover:bg-sky-600 text-white px-4 py-2 rounded font-semibold shadow-sm transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="w-full text-center bg-[#00A3FF] hover:bg-sky-600 text-white px-4 py-2 rounded font-semibold shadow-sm transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

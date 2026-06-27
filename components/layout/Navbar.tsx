"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#c8a45d]/10 bg-[#f8f6f2]/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/MMLogo-v2.png"
              alt="Models + Misfits Salon + Spa"
              width={220}
              height={80}
              priority
              className="h-auto w-[120px] md:w-[180px] lg:w-[220px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">

            <Link
              href="/"
              className="text-sm uppercase tracking-wider transition hover:text-[#c8a45d]"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="
                text-sm
                uppercase
                tracking-wider
                transition
                hover:text-[#c8a45d]
              "
            >
              Services
            </Link>

            <Link
              href="/bridal"
              className="
                text-sm
                uppercase
                tracking-wider
                transition
                hover:text-[#c8a45d]
              "
            >
              Bridal
            </Link>

            <Link
              href="/gallery"
              className="
                text-sm
                uppercase
                tracking-wider
                transition
                hover:text-[#c8a45d]
              "
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="
                text-sm
                uppercase
                tracking-wider
                transition
                hover:text-[#c8a45d]
              "
            >
              Contact
            </Link>

          </nav>

          {/* Desktop CTA */}
          <a
            href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              rounded-full
              bg-[#c8a45d]
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              md:block
            "
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#c8a45d]/20
              transition
              hover:border-[#c8a45d]
              md:hidden
            "
          >
            <span className="text-2xl">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            border-t
            border-[#c8a45d]/10
            bg-[#f8f6f2]
            md:hidden
          "
        >
          <nav className="flex flex-col p-6">

            <Link
              href="/"
              className="py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/services"
              className="py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/bridal"
              className="py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Bridal
            </Link>

            <Link
              href="/gallery"
              className="py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <a
              href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="
                mt-6
                rounded-full
                bg-[#c8a45d]
                px-6
                py-4
                text-center
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              Book Now
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}
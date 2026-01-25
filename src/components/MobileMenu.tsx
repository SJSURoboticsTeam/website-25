"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
      </button>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link href="/board" onClick={closeMenu}>Leadership</Link>
        <Link href="/updates" onClick={closeMenu}>Updates</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
}

 "use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/our-plants", "Our Plants"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact Us"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.jpg" alt="Sri Suryadeva Nursery logo" />
          <span>
            <strong>Sri Suryadeva</strong>
            <small>Nursery · Kadiyam</small>
          </span>
        </Link>

        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`nav-links ${open ? "show" : ""}`}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Visit Nursery
          </Link>
        </nav>
      </div>
    </header>
  );
}
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SwipeThemeToggle from './SwipeThemeToggle'; // Adjust path if needed

export default function Navbar({ toggleTheme, isDark }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 py-3
        flex items-center justify-between
        bg-white/20 dark:bg-dark/20 backdrop-blur-md
        border-b border-white/10 dark:border-dark/30
        before:absolute before:inset-0 before:rounded-none
        before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-rose-500
        before:blur-2xl before:opacity-20 before:z-[-1]
        transition-all duration-500
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
      `}
    >
      {/* Brand */}
      <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 text-transparent bg-clip-text drop-shadow-md whitespace-nowrap">
        MaDycloud
      </h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300 ml-auto">
        {navLinks.map(link => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-primary">{link.name}</a>
          </li>
        ))}

        {/* Resume + Theme Toggle */}
        <li>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="bg-primary text-black px-3 py-1 rounded hover:bg-yellow-400 font-semibold transition"
          >
            Resume
          </a>
        </li>
        <li>
          <SwipeThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
        </li>
      </ul>

      {/* Mobile Toggle + Swipe (optional on small screens) */}
      <div className="md:hidden flex items-center gap-3">
        <SwipeThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-3 px-6 py-4 bg-white/95 dark:bg-dark/90 rounded-xl shadow-lg md:hidden backdrop-blur-md transition-all duration-300">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
             <a
                href="https://drive.google.com/file/d/10xY7o6qFecJF_GX6MKf0AEX3lKPVxLeg/view?usp=sharing"
                className="bg-primary text-black px-3 py-1 rounded hover:bg-yellow-400 font-semibold transition inline-block"
                download
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

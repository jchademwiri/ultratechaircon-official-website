"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, Phone, Menu } from "lucide-react";
import { logo } from "@/data/images";
import { icons } from "./data";
import { TLink } from "@/lib/types";
import { navLinks } from "@/data/links";

// Optimized button component for navbar
const NavCTAButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
    >
      <Phone className="h-4 w-4" />
      {label}
    </Link>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [nav]);

  // Close mobile menu on route change
  useEffect(() => {
    closeNav();
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
        shadow
          ? "bg-blue-950 shadow-lg shadow-blue-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-[90%] max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          aria-label="Ultra Tech Aircons - Home"
          className="relative z-[101] transition-transform hover:scale-105"
        >
          <Image
            src={logo}
            alt="Ultra Tech Aircons logo"
            width={160}
            height={40}
            className="h-auto w-40"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link: TLink) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium text-white transition-colors hover:text-blue-300 ${
                    isActive(link.href) ? "text-blue-300" : ""
                  }`}
                  aria-label={link.ariaLabel}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-4">
            <NavCTAButton href="tel:+27737671328" label="073 767 1328" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleNav}
          className="relative z-[101] rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={nav ? "Close menu" : "Open menu"}
          aria-expanded={nav}
          aria-controls="mobile-menu"
        >
          {nav ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {nav && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[98] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={closeNav}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="fixed right-0 top-0 z-[99] h-screen w-[85%] max-w-sm overflow-y-auto bg-blue-950 shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="border-b border-blue-900/50 p-6">
                <Link 
                  href="/" 
                  onClick={closeNav}
                  aria-label="Ultra Tech Aircons - Home"
                  className="block"
                >
                  <Image
                    src={logo}
                    alt="Ultra Tech Aircons logo"
                    width={160}
                    height={40}
                    className="h-auto w-40"
                  />
                </Link>
                <p className="mt-4 text-sm text-gray-300">
                  We give you the right temperature at the right time, always.
                </p>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-2">
                  {navLinks.map((link: TLink) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeNav}
                        className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                          isActive(link.href)
                            ? "bg-blue-600 text-white"
                            : "text-gray-200 hover:bg-blue-900/50"
                        }`}
                        aria-label={link.ariaLabel}
                        aria-current={isActive(link.href) ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-8">
                  <Link
                    href="tel:+27737671328"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700"
                  >
                    <Phone className="h-5 w-5" />
                    Call 073 767 1328
                  </Link>
                </div>
              </nav>

              {/* Social Links */}
              <div className="border-t border-blue-900/50 p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Connect With Us
                </p>
                <div className="flex gap-3">
                  {icons.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-blue-800/50 p-3 text-white transition-all hover:bg-blue-600 hover:scale-110"
                      aria-label={`Visit our ${item.link.includes('facebook') ? 'Facebook' : item.link.includes('instagram') ? 'Instagram' : 'social media'} page`}
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
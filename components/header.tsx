"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import { ModalPopup } from "@/components/modal-popup";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/venture-studio", label: "Venture Studio" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/venture-fund", label: "Venture Fund" },
  { href: "/impact", label: "Impact" },
  { href: "/future-initiatives", label: "Future Initiatives" },
  { href: "/partners-ecosystem", label: "Partners & Ecosystem" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Header */}
      <header
        className="hidden md:block sticky top-0 z-40 w-full bg-background/95 backdrop-blur border-b border-border"
        style={{ fontFamily: "'Geist', 'Geist Fallback', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/salvy-logo.png"
                alt="Salvy"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </Link>

            {/* Center Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium ${
                      isActive ? "text-red-800" : "text-foreground/75"
                    } hover:text-red-800 transition-colors`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                className="bg-red-600 text-white hover:bg-red-700 rounded-full px-6"
                onClick={() => setShowModal(true)}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className="md:hidden sticky top-0 z-40 w-full bg-background/95 backdrop-blur border-b border-border"
        style={{ fontFamily: "'Geist', 'Geist Fallback', sans-serif" }}
      >
        <div className="flex items-center justify-between px-4 h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/salvy-logo.png"
              alt="Salvy"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 md:hidden z-30 overflow-hidden">
          {/* Blurred background - 30% */}
          <div
            className="absolute inset-0 w-3/10 backdrop-blur-md bg-black/20"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar - 70% */}
          <div
            className="absolute inset-y-0 left-0 w-7/10 bg-background shadow-lg overflow-y-auto"
            style={{ fontFamily: "'Geist', 'Geist Fallback', sans-serif" }}
          >
            <div className="p-4 pt-24 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium ${
                      isActive ? "text-red-800" : "text-foreground"
                    } hover:text-red-800 rounded-lg transition-colors`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button
                className="w-full mt-6 bg-red-600 text-white hover:bg-red-700 rounded-full"
                onClick={() => setShowModal(true)}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Modal Popup */}
      <ModalPopup open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

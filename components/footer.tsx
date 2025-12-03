"use client"
import { Linkedin, Facebook } from "lucide-react"

const FOOTER_SECTIONS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Venture Studio", href: "#venture-studio" },
      { label: "Venture Fund", href: "#venture-fund" },
      { label: "Portfolio", href: "#portfolio" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Partners & Ecosystems", href: "#partners" },
      { label: "Careers", href: "#careers" },
      { label: "Impact", href: "#impact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Media", href: "#media" },
      { label: "Gallery", href: "#gallery" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Policy", href: "#policy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Let's Talk", href: "#contact" },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "Facebook", href: "https://facebook.com", external: true },
    ],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Main Footer */}
      <footer className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-lg mb-6 text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-12 pb-12 border-b border-gray-800">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </footer>

      {/* Site Footer */}
      <div className="w-full bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">© {currentYear} Salvy VentureCorp. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

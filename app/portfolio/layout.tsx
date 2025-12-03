import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio - Salvy VentureCorp",
  description: "Explore Salvy VentureCorp's portfolio of high-impact ventures across Africa.",
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

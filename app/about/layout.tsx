import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Salvy VentureCorp",
  description:
    "Learn about Salvy VentureCorp's mission, vision, and core values. Meet the team building Africa's next generation of companies.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

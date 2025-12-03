import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Salvy VentureCorp",
  description: "Get in touch with Salvy VentureCorp. We'd love to hear from you and discuss how we can work together.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

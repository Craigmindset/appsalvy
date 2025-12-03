import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers - Salvy Venture",
  description: "Join our team and help us build Africa's next generation of companies.",
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

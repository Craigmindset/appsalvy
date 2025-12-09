"use client"

import { Suspense, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

function SuccessContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "application"

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  const getTitle = () => {
    switch (type) {
      case "founder":
        return "Founder Application Submitted!"
      case "partner":
        return "Partner Application Submitted!"
      default:
        return "Application Submitted Successfully!"
    }
  }

  const getMessage = () => {
    switch (type) {
      case "founder":
        return "Thank you for submitting your founder application. Our team will review your submission and get back to you within 2 weeks."
      case "partner":
        return "Thank you for your interest in partnering with us. Our team will review your application and contact you soon."
      default:
        return "Thank you for your submission. We will be in touch soon."
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 md:w-14 md:h-14 text-green-600 dark:text-green-400" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {getTitle()}
        </h1>

        <p className="text-lg text-foreground/70 mb-8">
          {getMessage()}
        </p>

        <div className="space-y-4">
          <p className="text-sm text-foreground/60">
            Redirecting to home page in 5 seconds...
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Go to Home Now
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-foreground/60">
            Need help?{" "}
            <a
              href="mailto:info@salvy.ng"
              className="text-primary hover:underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground">Loading...</p>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}

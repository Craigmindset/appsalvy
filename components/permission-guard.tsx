"use client"

import type React from "react"

import { useAuth, type UserRole } from "@/lib/auth-context"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface PermissionGuardProps {
  requiredRole: UserRole
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function PermissionGuard({ requiredRole, children, fallback }: PermissionGuardProps) {
  const { hasPermission, role } = useAuth()

  if (!hasPermission(requiredRole)) {
    return (
      fallback || (
        <div className="flex items-center justify-center min-h-[400px] px-4">
          <Card className="p-8 max-w-md text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-xl font-bold text-foreground mb-2">Access Denied</h2>
            <p className="text-foreground/60 mb-4">
              This page requires <span className="font-semibold capitalize">{requiredRole}</span> access. Your current
              role is <span className="font-semibold capitalize">{role}</span>.
            </p>
            <Link href="/admin/dashboard" className="text-primary hover:text-primary/80 text-sm font-medium">
              Go back to dashboard
            </Link>
          </Card>
        </div>
      )
    )
  }

  return <>{children}</>
}

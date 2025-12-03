"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export type UserRole = "admin" | "moderator" | "viewer"

interface AuthContextType {
  isAuthenticated: boolean
  email: string | null
  role: UserRole | null
  logout: () => void
  checkAuth: () => boolean
  hasPermission: (requiredRole: UserRole) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState<string | null>(null)
  const [role, setRole] = useState<UserRole | null>(null)

  useEffect(() => {
    // Check authentication on mount
    const token = localStorage.getItem("adminToken")
    const storedEmail = localStorage.getItem("adminEmail")
    const storedRole = (localStorage.getItem("adminRole") as UserRole) || "viewer"

    if (token) {
      setIsAuthenticated(true)
      setEmail(storedEmail)
      setRole(storedRole)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminEmail")
    localStorage.removeItem("adminRole")
    setIsAuthenticated(false)
    setEmail(null)
    setRole(null)
  }

  const checkAuth = () => {
    const token = localStorage.getItem("adminToken")
    return !!token
  }

  const hasPermission = (requiredRole: UserRole) => {
    const roleHierarchy: Record<UserRole, number> = {
      admin: 3,
      moderator: 2,
      viewer: 1,
    }
    return roleHierarchy[role || "viewer"] >= roleHierarchy[requiredRole]
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, role, logout, checkAuth, hasPermission }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}

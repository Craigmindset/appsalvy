"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type UserRole = "admin";

interface AuthContextType {
  isAuthenticated: boolean;
  email: string | null;
  role: UserRole | null;
  logout: () => void;
  checkAuth: () => boolean;
  hasPermission: (requiredRole?: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    // Check authentication on mount
    const token = localStorage.getItem("adminToken");
    const storedEmail = localStorage.getItem("adminEmail");
    // Only admin role
    const storedRole = "admin";

    if (token) {
      setIsAuthenticated(true);
      setEmail(storedEmail);
      setRole(storedRole);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminRole");
    setIsAuthenticated(false);
    setEmail(null);
    setRole(null);
  };

  const checkAuth = () => {
    const token = localStorage.getItem("adminToken");
    return !!token;
  };

  const hasPermission = (_requiredRole?: UserRole) => {
    // Only admin has access
    return role === "admin";
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, email, role, logout, checkAuth, hasPermission }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

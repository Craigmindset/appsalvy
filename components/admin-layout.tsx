"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import Link from "next/link";

const ADMIN_NAV_ITEMS = [
  {
    label: "Overview",
    href: "/admin/dashboard",
    icon: "📊",
    requiredRole: "admin" as const,
  },
  {
    label: "User Management",
    href: "/admin/user-management",
    icon: "👥",
    requiredRole: "admin" as const,
  },
  {
    label: "Founder Application",
    href: "/admin/founder-application",
    icon: "📝",
    requiredRole: "admin" as const,
  },
  {
    label: "Investors Application",
    href: "/admin/investors-application",
    icon: "💼",
    requiredRole: "admin" as const,
  },
  {
    label: "Partners Application",
    href: "/admin/partners-application",
    icon: "🤝",
    requiredRole: "admin" as const,
  },
  {
    label: "Career Management",
    href: "/admin/career-management",
    icon: "💼",
    requiredRole: "admin" as const,
  },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, email, role, logout, checkAuth, hasPermission } =
    useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication on mount only
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin");
    } else {
      setIsLoading(false);
    }
  }, []); // Empty dependency array - only run once on mount

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push("/admin");
  };

  const visibleNavItems = ADMIN_NAV_ITEMS.filter((item) =>
    hasPermission(item.requiredRole)
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } bg-card border-r border-border transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div className="flex-1 overflow-auto p-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <img
              src="/salvy-logo.png"
              alt="Salvy Logo"
              className="w-10 h-10 rounded-lg"
            />
            <span className="font-bold text-foreground">Salvy</span>
          </Link>

          <div className="mb-6 p-3 bg-secondary/50 rounded-lg">
            <p className="text-xs text-foreground/60 mb-1">Your Role</p>
            <p className="text-sm font-semibold text-foreground capitalize">
              {role}
            </p>
          </div>

          <nav className="space-y-2">
            {visibleNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium
                    ${
                      isActive
                        ? "bg-secondary text-red-800"
                        : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                    }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="whitespace-normal wrap-break-word">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-border">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 bg-transparent"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Admin User</p>
              <p className="text-xs text-foreground/60">{email}</p>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

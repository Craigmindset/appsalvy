"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthProvider } from "@/lib/auth-context";
import { AdminLayout } from "@/components/admin-layout";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    setIsLoginPage(
      pathname === "/admin" ||
        pathname === "/admin/forgot-password" ||
        pathname === "/admin/create-password"
    );
  }, [pathname]);

  if (isLoginPage) {
    return children;
  }

  return (
    <AuthProvider>
      <AdminLayout>{children}</AdminLayout>
    </AuthProvider>
  );
}

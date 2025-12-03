"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Trash2, Edit2 } from "lucide-react"

const USERS_DATA = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Founder" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active", role: "Investor" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "Inactive", role: "Partner" },
  { id: 4, name: "Sarah Williams", email: "sarah@example.com", status: "Active", role: "Founder" },
  { id: 5, name: "David Brown", email: "david@example.com", status: "Pending", role: "Investor" },
]

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = USERS_DATA.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950"
      case "Inactive":
        return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950"
      case "Pending":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">User Management</h1>
        <p className="text-foreground/60 mt-2">Manage all users and their roles</p>
      </div>

      {/* Search Bar */}
      <Card className="p-4 bg-card">
        <div className="flex gap-2">
          <Search className="w-5 h-5 text-foreground/40" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none bg-transparent text-foreground placeholder-foreground/40"
          />
        </div>
      </Card>

      {/* Users Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary dark:bg-secondary">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-foreground/60">{user.email}</td>
                  <td className="px-6 py-4 text-foreground text-sm">{user.role}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

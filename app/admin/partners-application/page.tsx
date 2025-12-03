"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const PARTNER_APPLICATIONS = [
  { id: 1, name: "Global Consulting Group", category: "Consulting", status: "Pending", date: "2024-11-28" },
  { id: 2, name: "African Network Foundation", category: "Non-Profit", status: "Approved", date: "2024-11-24" },
  { id: 3, name: "Tech Ecosystem Partners", category: "Technology", status: "Pending", date: "2024-11-27" },
]

export default function PartnersApplicationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Partners Applications</h1>
        <p className="text-foreground/60 mt-2">Manage partner ecosystem applications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PARTNER_APPLICATIONS.map((app) => (
          <Card key={app.id} className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-foreground text-lg mb-3">{app.name}</h3>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-foreground/60">
                <span className="font-medium">Category:</span> {app.category}
              </p>
              <p className="text-sm text-foreground/60">
                <span className="font-medium">Applied:</span> {app.date}
              </p>
              <p className="text-sm">
                <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-yellow-50 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400">
                  {app.status}
                </span>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 bg-transparent">
                Review
              </Button>
              <Button className="flex-1 bg-primary text-primary-foreground">Approve</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

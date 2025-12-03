"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const INVESTOR_APPLICATIONS = [
  {
    id: 1,
    name: "Global Impact Ventures",
    focus: "Impact Investing",
    status: "Pending",
    fundSize: "$50M",
    date: "2024-11-28",
  },
  { id: 2, name: "Tech Fund Africa", focus: "Technology", status: "Approved", fundSize: "$25M", date: "2024-11-25" },
  {
    id: 3,
    name: "African Growth Partners",
    focus: "General",
    status: "Pending",
    fundSize: "$100M",
    date: "2024-11-26",
  },
]

export default function InvestorsApplicationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Investors Applications</h1>
        <p className="text-foreground/60 mt-2">Manage investor partnership applications</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {INVESTOR_APPLICATIONS.map((app) => (
          <Card key={app.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{app.name}</h3>
                <div className="flex gap-4 mt-2 text-sm text-foreground/60">
                  <span>Focus: {app.focus}</span>
                  <span>Fund Size: {app.fundSize}</span>
                  <span>Applied: {app.date}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button size="sm" className="bg-primary text-primary-foreground">
                  Review
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

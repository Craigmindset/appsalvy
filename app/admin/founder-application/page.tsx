"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, Clock } from "lucide-react"

const APPLICATIONS_DATA = [
  {
    id: 1,
    name: "TechStart Africa",
    founder: "Amara Okonkwo",
    industry: "Tech",
    status: "Pending",
    date: "2024-11-28",
  },
  {
    id: 2,
    name: "Green Energy Solutions",
    founder: "Kofi Mensah",
    industry: "Energy",
    status: "Approved",
    date: "2024-11-25",
  },
  {
    id: 3,
    name: "FinServe Hub",
    founder: "Zainab Hassan",
    industry: "FinTech",
    status: "Rejected",
    date: "2024-11-20",
  },
  {
    id: 4,
    name: "AgriTech Innovations",
    founder: "Blessing Nkosi",
    industry: "Agriculture",
    status: "Pending",
    date: "2024-11-26",
  },
  {
    id: 5,
    name: "HealthConnect",
    founder: "Dr. Ema Oshimua",
    industry: "Healthcare",
    status: "Approved",
    date: "2024-11-24",
  },
]

export default function FounderApplicationPage() {
  const [filter, setFilter] = useState("All")

  const filteredApplications = APPLICATIONS_DATA.filter((app) => filter === "All" || app.status === filter)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
      case "Rejected":
        return <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
      case "Pending":
        return <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Founder Applications</h1>
        <p className="text-foreground/60 mt-2">Review and manage founder applications</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap">
        {["All", "Pending", "Approved", "Rejected"].map((status) => (
          <Button
            key={status}
            variant={filter === status ? "default" : "outline"}
            onClick={() => setFilter(status)}
            className={filter === status ? "bg-primary text-primary-foreground" : ""}
          >
            {status}
          </Button>
        ))}
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApplications.map((app) => (
          <Card key={app.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">{app.name}</h3>
                <p className="text-sm text-foreground/60">Founder: {app.founder}</p>
              </div>
              {getStatusIcon(app.status)}
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <p className="text-xs text-foreground/50 uppercase">Industry</p>
                <p className="text-sm font-medium text-foreground">{app.industry}</p>
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase">Applied</p>
                <p className="text-sm font-medium text-foreground">{app.date}</p>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-border">
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                Review
              </Button>
              <Button size="sm" className="flex-1 bg-primary text-primary-foreground">
                Action
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

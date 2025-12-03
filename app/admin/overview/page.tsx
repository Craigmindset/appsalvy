"use client"
import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

const DASHBOARD_STATS = [
  { label: "Total Users", value: "1,234", change: "+12%", icon: "👥" },
  { label: "Active Ventures", value: "89", change: "+23%", icon: "🚀" },
  { label: "Total Funding", value: "$12.5M", change: "+8%", icon: "💰" },
  { label: "Applications", value: "456", change: "+34%", icon: "📋" },
]

const CHART_DATA = [
  { month: "Jan", applications: 40, approved: 24 },
  { month: "Feb", applications: 65, approved: 39 },
  { month: "Mar", applications: 55, approved: 35 },
  { month: "Apr", applications: 75, approved: 45 },
  { month: "May", applications: 90, approved: 58 },
  { month: "Jun", applications: 110, approved: 72 },
]

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-foreground/60 mt-2">Welcome to the Salvy VentureCorp admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_STATS.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-foreground/60 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">{stat.change}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Applications Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={CHART_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-foreground)" />
              <YAxis stroke="var(--color-foreground)" />
              <Tooltip />
              <Legend />
              <Bar dataKey="applications" fill="var(--color-primary)" name="Total Applications" />
              <Bar dataKey="approved" fill="var(--color-accent)" name="Approved" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Line Chart */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Growth Rate</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={CHART_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-foreground)" />
              <YAxis stroke="var(--color-foreground)" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="applications"
                stroke="var(--color-primary)"
                name="Applications"
                strokeWidth={2}
              />
              <Line type="monotone" dataKey="approved" stroke="var(--color-accent)" name="Approved" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
              <div>
                <p className="font-medium text-foreground">Application #{12345 + i}</p>
                <p className="text-sm text-foreground/60">New founder application submitted</p>
              </div>
              <span className="text-xs text-foreground/50">{i}h ago</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

"use client";
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
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
} from "recharts";

const CHART_DATA = [
  { month: "Jan", applications: 40, approved: 24 },
  { month: "Feb", applications: 65, approved: 39 },
  { month: "Mar", applications: 55, approved: 35 },
  { month: "Apr", applications: 75, approved: 45 },
  { month: "May", applications: 90, approved: 58 },
  { month: "Jun", applications: 110, approved: 72 },
];

type ActivityItem = {
  id: string;
  type: "founder" | "partner";
  business_name?: string;
  organization_name?: string;
  first_name?: string;
  last_name?: string;
  contact_name?: string;
  email: string;
  created_at: string;
};

export default function OverviewPage() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalFounders, setTotalFounders] = useState(0);
  const [totalPartners, setTotalPartners] = useState(0);
  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      fetchStats();
      hasFetched.current = true;
    }
  }, []);

  const fetchStats = async () => {
    try {
      const [founderResponse, partnerResponse] = await Promise.all([
        fetch("/api/admin/applications"),
        fetch("/api/admin/partner-applications"),
      ]);

      const founderResult = await founderResponse.json();
      const partnerResult = await partnerResponse.json();

      const foundersCount = founderResult.data?.length || 0;
      const partnersCount = partnerResult.data?.length || 0;

      setTotalFounders(foundersCount);
      setTotalPartners(partnersCount);
      setTotalUsers(foundersCount + partnersCount);

      // Combine and sort recent activity
      const founderActivities = (founderResult.data || []).map((app: any) => ({
        ...app,
        type: "founder" as const,
      }));

      const partnerActivities = (partnerResult.data || []).map((app: any) => ({
        ...app,
        type: "partner" as const,
      }));

      const allActivities = [...founderActivities, ...partnerActivities]
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .slice(0, 5); // Get the 5 most recent

      setRecentActivity(allActivities);
    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setLoading(false);
    }
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays > 0) {
      return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
    } else if (diffInHours > 0) {
      return diffInHours === 1 ? "1 hour ago" : `${diffInHours} hours ago`;
    } else {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      return diffInMinutes <= 1 ? "Just now" : `${diffInMinutes} minutes ago`;
    }
  };

  const DASHBOARD_STATS = [
    {
      label: "Total Users",
      value: loading ? "..." : totalUsers.toString(),
      change: "+12%",
      icon: "👥",
    },
    {
      label: "Total Founders",
      value: loading ? "..." : totalFounders.toString(),
      change: "+23%",
      icon: "🚀",
    },
    {
      label: "Total Partners",
      value: loading ? "..." : totalPartners.toString(),
      change: "+8%",
      icon: "💰",
    },
    { label: "Total Investors", value: "0", change: "+34%", icon: "📋" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Dashboard Overview
        </h1>
        <p className="text-foreground/60 mt-2">
          Welcome to the Salvy VentureCorp admin panel
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_STATS.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-foreground/60 text-sm font-medium">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-foreground mt-2">
                  {stat.value}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                  {stat.change}
                </p>
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
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Applications Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={CHART_DATA}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border)"
              />
              <XAxis dataKey="month" stroke="var(--color-foreground)" />
              <YAxis stroke="var(--color-foreground)" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="applications"
                fill="var(--color-primary)"
                name="Total Applications"
              />
              <Bar
                dataKey="approved"
                fill="var(--color-accent)"
                name="Approved"
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Line Chart */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Growth Rate
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={CHART_DATA}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border)"
              />
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
              <Line
                type="monotone"
                dataKey="approved"
                stroke="var(--color-accent)"
                name="Approved"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {loading ? (
            <p className="text-foreground/60 text-sm">
              Loading recent activity...
            </p>
          ) : recentActivity.length === 0 ? (
            <p className="text-foreground/60 text-sm">No recent activity</p>
          ) : (
            recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">
                      {activity.type === "founder"
                        ? activity.business_name
                        : activity.organization_name}
                    </p>
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                        activity.type === "founder"
                          ? "bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400"
                          : "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400"
                      }`}
                    >
                      {activity.type === "founder" ? "Founder" : "Partner"}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60">
                    New {activity.type} application from{" "}
                    {activity.type === "founder"
                      ? `${activity.first_name} ${activity.last_name}`
                      : activity.contact_name}
                  </p>
                  <p className="text-xs text-foreground/40 mt-1">
                    {activity.email}
                  </p>
                </div>
                <span className="text-xs text-foreground/50 whitespace-nowrap ml-4">
                  {getTimeAgo(activity.created_at)}
                </span>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}

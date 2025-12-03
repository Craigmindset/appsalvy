"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Plus, Edit2, Trash2, Eye, EyeOff } from "lucide-react"

const INITIAL_JOBS = [
  {
    id: 1,
    title: "Senior Product Manager",
    department: "Product",
    location: "Lagos, Nigeria",
    level: "Senior",
    type: "Full-time",
    salary: "$80K - $120K",
    status: "Active",
    applications: 24,
  },
  {
    id: 2,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    level: "Mid-level",
    type: "Full-time",
    salary: "$60K - $90K",
    status: "Active",
    applications: 18,
  },
  {
    id: 3,
    title: "Data Analyst",
    department: "Analytics",
    location: "Nairobi, Kenya",
    level: "Mid-level",
    type: "Full-time",
    salary: "$50K - $75K",
    status: "Draft",
    applications: 0,
  },
]

export default function CareerManagementPage() {
  const [jobs, setJobs] = useState(INITIAL_JOBS)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddingJob, setIsAddingJob] = useState(false)
  const [editingJob, setEditingJob] = useState<number | null>(null)

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    return status === "Active"
      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950"
      : "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950"
  }

  const handleToggleStatus = (id: number) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, status: job.status === "Active" ? "Draft" : "Active" } : job)))
  }

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Career Management</h1>
          <p className="text-foreground/60 mt-2">Manage job postings and track applications</p>
        </div>
        <Button
          onClick={() => setIsAddingJob(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Job Opening
        </Button>
      </div>

      {/* Search Bar */}
      <Card className="p-4 bg-card">
        <div className="flex gap-2">
          <Search className="w-5 h-5 text-foreground/40" />
          <input
            type="text"
            placeholder="Search by job title or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none bg-transparent text-foreground placeholder-foreground/40"
          />
        </div>
      </Card>

      {/* Jobs Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary dark:bg-secondary">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Job Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Department</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Level</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Applications</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job) => (
                <tr key={job.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">{job.title}</td>
                  <td className="px-6 py-4 text-foreground/60 text-sm">{job.department}</td>
                  <td className="px-6 py-4 text-foreground/60 text-sm">{job.location}</td>
                  <td className="px-6 py-4 text-foreground text-sm">{job.level}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                      {job.applications}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        job.status,
                      )}`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleToggleStatus(job.id)}
                        title={job.status === "Active" ? "Hide" : "Show"}
                      >
                        {job.status === "Active" ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setEditingJob(job.id)}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {filteredJobs.length === 0 && (
        <Card className="p-8 text-center">
          <p className="text-foreground/60">No job postings found.</p>
        </Card>
      )}
    </div>
  )
}

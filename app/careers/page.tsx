"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Briefcase, Clock } from "lucide-react"

const JOBS_DATA = [
  {
    id: 1,
    title: "Senior Product Manager",
    department: "Product",
    location: "Lagos, Nigeria",
    level: "Senior",
    type: "Full-time",
    description: "Lead product strategy and development for our venture portfolio.",
    category: "Product",
    salary: "$80K - $120K",
    postedDate: "2024-11-28",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    level: "Mid-level",
    type: "Full-time",
    description: "Build responsive web applications for our platforms.",
    category: "Engineering",
    salary: "$60K - $90K",
    postedDate: "2024-11-26",
  },
  {
    id: 3,
    title: "Data Analyst",
    department: "Analytics",
    location: "Nairobi, Kenya",
    level: "Mid-level",
    type: "Full-time",
    description: "Analyze venture performance and market trends.",
    category: "Analytics",
    salary: "$50K - $75K",
    postedDate: "2024-11-25",
  },
  {
    id: 4,
    title: "Business Development Manager",
    department: "Growth",
    location: "Accra, Ghana",
    level: "Senior",
    type: "Full-time",
    description: "Identify and establish strategic partnerships.",
    category: "Business",
    salary: "$70K - $100K",
    postedDate: "2024-11-20",
  },
  {
    id: 5,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    level: "Mid-level",
    type: "Full-time",
    description: "Design user experiences for venture applications.",
    category: "Design",
    salary: "$55K - $80K",
    postedDate: "2024-11-18",
  },
  {
    id: 6,
    title: "Operations Specialist",
    department: "Operations",
    location: "Lagos, Nigeria",
    level: "Junior",
    type: "Full-time",
    description: "Support daily operations and process optimization.",
    category: "Operations",
    salary: "$35K - $50K",
    postedDate: "2024-11-15",
  },
]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")

  const categories = ["All", ...new Set(JOBS_DATA.map((job) => job.category))]
  const levels = ["All", "Junior", "Mid-level", "Senior"]

  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory
    const matchesLevel = selectedLevel === "All" || job.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Junior":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Mid-level":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Senior":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Join Our Team</h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Help us build Africa's next generation of high-impact companies. We're looking for talented individuals
              passionate about innovation and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="space-y-6 mb-12">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search by job title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filters */}
            <div>
              <p className="text-sm font-medium text-foreground mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-transparent"}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Level Filters */}
            <div>
              <p className="text-sm font-medium text-foreground mb-3">Experience Level</p>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    onClick={() => setSelectedLevel(level)}
                    className={selectedLevel === level ? "bg-primary text-primary-foreground" : "bg-transparent"}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Jobs Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                      <p className="text-sm text-foreground/60 mt-1">{job.department}</p>
                    </div>
                    <Badge variant="outline" className={getLevelColor(job.level)}>
                      {job.level}
                    </Badge>
                  </div>

                  <p className="text-sm text-foreground/70 mb-4 flex-grow">{job.description}</p>

                  <div className="space-y-3 mb-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Clock className="w-4 h-4" />
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary">{job.salary}</p>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Apply Now</Button>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60">No positions found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

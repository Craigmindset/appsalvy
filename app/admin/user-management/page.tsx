"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Trash2, Edit2, X, ExternalLink } from "lucide-react";

type Application = {
  id: string;
  business_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  website: string;
  linkedin: string;
  created_at: string;
  is_registered?: boolean;
  registration_date?: string;
  business_number?: string;
  business_ideology?: string;
  funded_before?: boolean;
  fund_provider?: string;
  fund_amount?: number;
  fund_stage?: string;
  team?: any[];
  business_pitch_url?: string;
  track_records_url?: string;
  attest?: boolean;
};

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/admin/applications");
      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Failed to load applications");
        console.error("API error:", result);
      } else {
        setApplications(result.data || []);
      }
    } catch (err) {
      setError("Failed to load applications");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredApplications = applications.filter(
    (app) =>
      `${app.first_name} ${app.last_name}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.business_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950";
      case "Inactive":
        return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950";
      case "Pending":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application?")) return;

    try {
      const response = await fetch(`/api/admin/applications?id=${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to delete application");
      }

      // Refresh the list
      fetchApplications();
    } catch (err) {
      console.error("Error deleting application:", err);
      alert("Failed to delete application");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-foreground">Loading applications...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Founder Applications
        </h1>
        <p className="text-foreground/60 mt-2">
          Manage all founder applications ({applications.length})
        </p>
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Business
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Position
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <td className="px-6 py-4 text-foreground font-medium">
                    {app.first_name} {app.last_name}
                  </td>
                  <td className="px-6 py-4 text-foreground/60">{app.email}</td>
                  <td className="px-6 py-4 text-foreground text-sm">
                    {app.business_name}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                      {app.position}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-foreground/60 text-sm">
                    {app.phone}
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2"
                      onClick={() => {
                        setSelectedApplication(app);
                        setIsModalOpen(true);
                      }}
                    >
                      <Edit2 className="w-4 h-4" />
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-destructive hover:text-destructive"
                      onClick={() => handleDelete(app.id)}
                    >
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

      {/* Application Details Modal */}
      {isModalOpen && selectedApplication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">
                Application Details
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedApplication(null);
                }}
                className="hover:bg-secondary"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Personal Information */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground/60">First Name</p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.first_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Last Name</p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.last_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Phone</p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Position</p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.position}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">LinkedIn</p>
                    <a
                      href={selectedApplication.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      View Profile <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Business Information */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">
                  Business Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground/60">Business Name</p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.business_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Website</p>
                    <a
                      href={selectedApplication.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      Visit Website <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Registered</p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.is_registered ? "Yes" : "No"}
                    </p>
                  </div>
                  {selectedApplication.is_registered && (
                    <>
                      <div>
                        <p className="text-sm text-foreground/60">
                          Registration Date
                        </p>
                        <p className="text-foreground font-medium">
                          {selectedApplication.registration_date
                            ? new Date(
                                selectedApplication.registration_date
                              ).toLocaleDateString()
                            : "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">
                          Business Number
                        </p>
                        <p className="text-foreground font-medium">
                          {selectedApplication.business_number || "N/A"}
                        </p>
                      </div>
                    </>
                  )}
                  {selectedApplication.business_ideology && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-foreground/60">
                        Business Ideology
                      </p>
                      <p className="text-foreground font-medium">
                        {selectedApplication.business_ideology}
                      </p>
                    </div>
                  )}
                </div>
              </section>

              {/* Funding Information */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">
                  Funding Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground/60">
                      Previously Funded
                    </p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.funded_before ? "Yes" : "No"}
                    </p>
                  </div>
                  {selectedApplication.funded_before && (
                    <>
                      <div>
                        <p className="text-sm text-foreground/60">
                          Fund Provider
                        </p>
                        <p className="text-foreground font-medium">
                          {selectedApplication.fund_provider || "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">
                          Fund Amount
                        </p>
                        <p className="text-foreground font-medium">
                          {selectedApplication.fund_amount
                            ? `$${selectedApplication.fund_amount.toLocaleString()}`
                            : "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Fund Stage</p>
                        <p className="text-foreground font-medium">
                          {selectedApplication.fund_stage || "N/A"}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </section>

              {/* Team Information */}
              {selectedApplication.team &&
                selectedApplication.team.length > 0 && (
                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">
                      Team Members
                    </h3>
                    <div className="space-y-3">
                      {selectedApplication.team.map(
                        (member: any, index: number) => (
                          <div
                            key={index}
                            className="bg-secondary/30 p-4 rounded-lg"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div>
                                <p className="text-sm text-foreground/60">
                                  Name
                                </p>
                                <p className="text-foreground font-medium">
                                  {member.name || "N/A"}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-foreground/60">
                                  Email
                                </p>
                                <p className="text-foreground font-medium">
                                  {member.email || "N/A"}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-foreground/60">
                                  Position
                                </p>
                                <p className="text-foreground font-medium">
                                  {member.position || "N/A"}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </section>
                )}

              {/* Document Links */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">
                  Documents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">
                      Business Pitch
                    </p>
                    {selectedApplication.business_pitch_url ? (
                      <a
                        href={selectedApplication.business_pitch_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Business Pitch
                      </a>
                    ) : (
                      <p className="text-foreground/40">No document uploaded</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">
                      Track Records
                    </p>
                    {selectedApplication.track_records_url ? (
                      <a
                        href={selectedApplication.track_records_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Track Records
                      </a>
                    ) : (
                      <p className="text-foreground/40">No document uploaded</p>
                    )}
                  </div>
                </div>
              </section>

              {/* Metadata */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">
                  Application Info
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground/60">Application ID</p>
                    <p className="text-foreground font-mono text-sm">
                      {selectedApplication.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Submitted On</p>
                    <p className="text-foreground font-medium">
                      {new Date(
                        selectedApplication.created_at
                      ).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Attestation</p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.attest
                        ? "Confirmed"
                        : "Not Confirmed"}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

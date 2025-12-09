"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Clock } from "lucide-react";

type PartnerApplication = {
  id: string;
  organization_name: string;
  contact_name: string;
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  created_at: string;
};

export default function PartnersApplicationPage() {
  const [applications, setApplications] = useState<PartnerApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedApplication, setSelectedApplication] =
    useState<PartnerApplication | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      fetchApplications();
      hasFetched.current = true;
    }
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/partner-applications");
      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Failed to load partner applications");
        console.error("API error:", result);
      } else {
        setApplications(result.data || []);
      }
    } catch (err) {
      setError("Failed to load partner applications");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this partner application?"))
      return;

    try {
      const response = await fetch(`/api/admin/partner-applications?id=${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to delete partner application");
      }

      // Refresh the list
      fetchApplications();
    } catch (err) {
      console.error("Error deleting partner application:", err);
      alert("Failed to delete partner application");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-foreground">Loading partner applications...</p>
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
          Partner Applications
        </h1>
        <p className="text-foreground/60 mt-2">
          Manage partner ecosystem applications ({applications.length})
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <Card key={app.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">
                  {app.organization_name}
                </h3>
                <p className="text-sm text-foreground/60">
                  Contact: {app.contact_name}
                </p>
              </div>
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <p className="text-xs text-foreground/50 uppercase">Email</p>
                <p className="text-sm font-medium text-foreground truncate">
                  {app.email}
                </p>
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase">Phone</p>
                <p className="text-sm font-medium text-foreground">
                  {app.phone}
                </p>
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase">Applied</p>
                <p className="text-sm font-medium text-foreground">
                  {new Date(app.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-border">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => {
                  setSelectedApplication(app);
                  setIsModalOpen(true);
                }}
              >
                View Details
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-destructive hover:text-destructive"
                onClick={() => handleDelete(app.id)}
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Application Details Modal */}
      {isModalOpen && selectedApplication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">
                Partner Application Details
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
              {/* Organization Information */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">
                  Organization Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground/60">
                      Organization Name
                    </p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.organization_name}
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
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground/60">Contact Name</p>
                    <p className="text-foreground font-medium">
                      {selectedApplication.contact_name}
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

              {/* Application Metadata */}
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
                </div>
              </section>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

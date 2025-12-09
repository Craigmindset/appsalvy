"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Clock, ExternalLink, X } from "lucide-react";

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

export default function FounderApplicationPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
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
        <h1 className="text-3xl font-bold text-foreground">
          Founder Applications
        </h1>
        <p className="text-foreground/60 mt-2">
          Review and manage founder applications ({applications.length})
        </p>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <Card key={app.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">
                  {app.business_name}
                </h3>
                <p className="text-sm text-foreground/60">
                  Founder: {app.first_name} {app.last_name}
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
                <p className="text-xs text-foreground/50 uppercase">Position</p>
                <p className="text-sm font-medium text-foreground">
                  {app.position}
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
            </div>
          </Card>
        ))}
      </div>

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

"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, X, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { Attestation } from "@/components/attestation";

export function FounderForm() {
  const router = useRouter();
  const [isRegistered, setIsRegistered] = useState<string>("");
  const [fundedBefore, setFundedBefore] = useState<string>("");
  const [businessIdeology, setBusinessIdeology] = useState("");
  const [team, setTeam] = useState([{ name: "", email: "", position: "" }]);
  const [attest, setAttest] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [website, setWebsite] = useState("");
  const [businessPitch, setBusinessPitch] = useState<File | null>(null);
  const [trackRecords, setTrackRecords] = useState<File | null>(null);
  const [showAttestation, setShowAttestation] = useState(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Validation helpers
  const isEmailValid = email.includes("@") && email.length > 3;
  const isPhoneValid = /^[0-9+\-()\s]+$/.test(phone) && phone.length > 5;
  const isWebsiteValid = /^(https?:\/\/)/.test(website);
  const isLinkedinValid =
    linkedin.startsWith("linkedin.com/") ||
    linkedin.startsWith("https://linkedin.com/") ||
    linkedin.startsWith("http://linkedin.com/");

  // Validation for required fields
  const isFormValid =
    businessName.trim() &&
    firstName.trim() &&
    lastName.trim() &&
    position.trim() &&
    isEmailValid &&
    isPhoneValid &&
    isWebsiteValid &&
    isLinkedinValid &&
    businessPitch &&
    attest &&
    team.every(
      (member) =>
        member.name.trim() && member.email.trim() && member.position.trim()
    );

  const handleAddTeam = () => {
    setTeam([...team, { name: "", email: "", position: "" }]);
  };

  const handleTeamChange = (
    idx: number,
    field: "name" | "email" | "position",
    value: string
  ) => {
    const updated = [...team];
    updated[idx][field] = value;
    setTeam(updated);
  };

  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Helper to upload a file to Supabase Storage and return the public URL
  async function uploadFile(file: File, folder: string) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;
    const { data, error } = await supabase.storage.from('founder-docs').upload(fileName, file, { upsert: false });
    if (error) throw error;
    // Get public URL
    const { data: publicUrlData } = supabase.storage.from('founder-docs').getPublicUrl(fileName);
    return publicUrlData.publicUrl;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    try {
      let businessPitchUrl = null;
      let trackRecordsUrl = null;
      if (businessPitch) {
        businessPitchUrl = await uploadFile(businessPitch, 'business-pitch');
      }
      if (trackRecords) {
        trackRecordsUrl = await uploadFile(trackRecords, 'track-records');
      }
      const { error } = await supabase.from('founder_applications').insert([
        {
          business_name: businessName,
          is_registered: isRegistered === 'yes',
          registration_date: isRegistered === 'yes' ? undefined : null, // You can add registration date if you collect it
          business_number: '', // Add if you collect it
          website,
          first_name: firstName,
          last_name: lastName,
          position,
          email,
          phone,
          linkedin,
          business_ideology: businessIdeology,
          funded_before: fundedBefore === 'yes',
          fund_provider: '', // Add if you collect it
          fund_amount: null, // Add if you collect it
          fund_stage: '', // Add if you collect it
          team: team,
          business_pitch_url: businessPitchUrl,
          track_records_url: trackRecordsUrl,
          attest,
        },
      ]);
      if (error) throw error;
      setSubmitSuccess(true);
      // Optionally reset form here
    } catch (err: any) {
      setSubmitError(err.message || 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="max-w-lg mx-auto p-4 space-y-8 relative" onSubmit={handleSubmit}>
      {/* Close Icon */}
      <button
        type="button"
        className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-lg font-bold"
        aria-label="Close"
        onClick={() => router.back()}
      >
        <X className="w-6 h-6" />
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Founder Application
      </h2>
      {/* Business Details */}
      <div className="space-y-4">
        <label className="block mb-1">
          Business Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Business Name"
          className="w-full border border-green-900 rounded p-2"
          required
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, businessName: true }))}
        />
        {touched.businessName && !businessName.trim() && (
          <span className="text-xs text-red-600">Required</span>
        )}
        <div>
          <label className="block mb-1">Is the Business Registered?</label>
          <select
            className="w-full border border-green-900 rounded p-2"
            value={isRegistered}
            onChange={(e) => setIsRegistered(e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {isRegistered === "yes" && (
          <>
            <label className="block mb-1">
              Business Registration Date <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              placeholder="Business Registration Date"
              className="w-full border border-green-900 rounded p-2"
              required
            />
          </>
        )}
        <label className="block mb-1">Business Number (BN/RC/LLC)</label>
        <input
          type="text"
          placeholder="Business Number (BN/RC/LLC)"
          className="w-full border border-green-900 rounded p-2"
        />
        <label className="block mb-1">
          Website <span className="text-red-600">*</span>
        </label>
        <input
          type="url"
          placeholder="https://yourbusiness.com"
          className="w-full border border-green-900 rounded p-2"
          required
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, website: true }))}
        />
        {touched.website && !isWebsiteValid && (
          <span className="text-xs text-red-600">
            Must start with http:// or https://
          </span>
        )}
      </div>
      <hr />
      {/* Personal Details */}
      <h3 className="text-lg font-bold mb-2">Personal Details</h3>
      <div className="space-y-4">
        <label className="block mb-1">
          First Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="w-full border border-green-900 rounded p-2"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
        />
        {touched.firstName && !firstName.trim() && (
          <span className="text-xs text-red-600">Required</span>
        )}
        <label className="block mb-1">
          Last Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Last Name"
          className="w-full border border-green-900 rounded p-2"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
        />
        {touched.lastName && !lastName.trim() && (
          <span className="text-xs text-red-600">Required</span>
        )}
        <label className="block mb-1">
          Position <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Position"
          className="w-full border border-green-900 rounded p-2"
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, position: true }))}
        />
        {touched.position && !position.trim() && (
          <span className="text-xs text-red-600">Required</span>
        )}
        <label className="block mb-1">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-green-900 rounded p-2"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
        />
        {touched.email && !isEmailValid && (
          <span className="text-xs text-red-600">
            Enter a valid email address
          </span>
        )}
        <label className="block mb-1">
          Phone Number <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-green-900 rounded p-2"
          required
          value={phone}
          onChange={(e) => {
            const val = e.target.value;
            if (/^[0-9+\-()\s]*$/.test(val)) setPhone(val);
          }}
          onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
        />
        {touched.phone && !isPhoneValid && (
          <span className="text-xs text-red-600">
            Enter a valid phone number
          </span>
        )}
        <label className="block mb-1">
          LinkedIn <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="linkedin.com/your-profile"
          className="w-full border border-green-900 rounded p-2"
          required
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, linkedin: true }))}
        />
        {touched.linkedin && !isLinkedinValid && (
          <span className="text-xs text-red-600">
            Must start with linkedin.com/
          </span>
        )}
      </div>
      <hr />
      {/* Business Concept */}
      <h3 className="text-lg font-bold mb-2">Business Concept</h3>
      <div className="space-y-4">
        <div>
          <label className="block mb-1">Business Ideology</label>
          <textarea
            maxLength={200}
            value={businessIdeology}
            onChange={(e) => setBusinessIdeology(e.target.value)}
            className="w-full border border-green-900 rounded p-2"
            placeholder="Business Ideology (max 200 characters)"
          />
          <div className="text-right text-xs text-gray-500">
            {businessIdeology.length}/200
          </div>
        </div>
        <div>
          <label className="block mb-1">Have you been Funded before?</label>
          <select
            className="w-full border border-green-900 rounded p-2"
            value={fundedBefore}
            onChange={(e) => setFundedBefore(e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {fundedBefore === "yes" && (
          <div className="space-y-2">
            <label className="block mb-1">Fund Provider</label>
            <input
              type="text"
              placeholder="Fund Provider"
              className="w-full border border-green-900 rounded p-2"
            />
            <label className="block mb-1">Amount ($)</label>
            <input
              type="number"
              placeholder="Amount ($)"
              className="w-full border border-green-900 rounded p-2"
            />
            <label className="block mb-1">Fund Stage</label>
            <select className="w-full border rounded p-2">
              <option value="">Fund Stage</option>
              <option value="Angel Funding">Angel Funding</option>
              <option value="Pre-seed">Pre-seed</option>
              <option value="Seed">Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B">Series B</option>
            </select>
          </div>
        )}
      </div>
      <hr />
      {/* Team */}
      <h3 className="text-lg font-bold mb-2">Team</h3>
      <div className="space-y-2">
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-2 mb-2">
            <label className="block mb-1 flex-1">
              Team Name <span className="text-red-600">*</span>
            </label>
            <label className="block mb-1 flex-1">
              Email <span className="text-red-600">*</span>
            </label>
            <label className="block mb-1 flex-1">
              Position <span className="text-red-600">*</span>
            </label>
          </div>
        ))}
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-2 mb-2">
            <input
              type="text"
              placeholder="Team Name"
              className="flex-1 border border-green-900 rounded p-2"
              required
              value={member.name}
              onChange={(e) => handleTeamChange(idx, "name", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 border border-green-900 rounded p-2"
              required
              value={member.email}
              onChange={(e) => handleTeamChange(idx, "email", e.target.value)}
            />
            <input
              type="text"
              placeholder="Position"
              className="flex-1 border border-green-900 rounded p-2"
              required
              value={member.position}
              onChange={(e) =>
                handleTeamChange(idx, "position", e.target.value)
              }
            />
          </div>
        ))}
        <button
          type="button"
          className="flex items-center gap-1 text-primary"
          onClick={handleAddTeam}
        >
          <Plus className="w-4 h-4" /> Add Team Member
        </button>
      </div>
      <hr />
      {/* Business Document */}
      <h3 className="text-lg font-bold mb-2">Business Document</h3>
      <div className="space-y-2">
        <label className="block">
          Business Pitch <span className="text-red-600">*</span>
        </label>
        <input
          type="file"
          className="w-full border border-green-900 rounded p-2"
          required
          onChange={(e) => setBusinessPitch(e.target.files?.[0] || null)}
        />
        <label className="block">Track Records</label>
        <input
          type="file"
          className="w-full border-2 border-green-900 rounded p-2"
          onChange={(e) => setTrackRecords(e.target.files?.[0] || null)}
        />
      </div>
      <hr />
      {/* Attestation Acknowledge Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="attest"
            checked={attest}
            onChange={(e) => setAttest(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="attest" className="text-sm text-foreground/70">
            I acknowledge and accept the attestation and certification terms.
          </label>
        </div>
        <button
          type="button"
          className="text-gray-500 hover:text-primary ml-2"
          onClick={() => setShowAttestation(true)}
          aria-label="Show Attestation Info"
        >
          <Info className="w-5 h-5" />
        </button>
      </div>
      {showAttestation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white dark:bg-background rounded-lg shadow-xl w-full max-w-2xl mx-auto p-4 sm:p-6 relative">
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-lg font-bold"
              aria-label="Close Attestation"
              onClick={() => setShowAttestation(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <Attestation checked={attest} onChange={setAttest} />
          </div>
        </div>
      )}
      {submitError && <div className="text-red-600 text-sm mb-2">{submitError}</div>}
      {submitSuccess && <div className="text-green-700 text-sm mb-2">Application submitted successfully!</div>}
      <button
        type="submit"
        className={`w-full bg-red-600 text-white rounded-full py-3 font-bold mt-2 transition-opacity ${
          !isFormValid || submitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={!isFormValid || submitting}
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

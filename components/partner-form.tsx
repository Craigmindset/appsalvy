"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export function PartnerForm() {
  const router = useRouter();
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [website, setWebsite] = useState("");
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Validation helpers
  const isEmailValid = email.includes("@") && email.length > 3;
  const isPhoneValid = /^[0-9+\-()\s]+$/.test(phone) && phone.length > 5;
  const isWebsiteValid = /^(https?:\/\/)/.test(website);
  const isLinkedinValid =
    linkedin.startsWith("linkedin.com/") ||
    linkedin.startsWith("https://linkedin.com/") ||
    linkedin.startsWith("http://linkedin.com/");

  const isFormValid =
    orgName.trim() &&
    contactName.trim() &&
    isEmailValid &&
    isPhoneValid &&
    isLinkedinValid &&
    isWebsiteValid;

  return (
    <form className="max-w-lg mx-auto p-4 space-y-8 relative">
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
        Partner Application
      </h2>
      <div className="space-y-4">
        <label className="block mb-1">
          Organization Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Organization Name"
          className="w-full border rounded p-2"
          required
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, orgName: true }))}
        />
        {touched.orgName && !orgName.trim() && (
          <span className="text-xs text-red-600">Required</span>
        )}
        <label className="block mb-1">
          Contact Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Contact Name"
          className="w-full border rounded p-2"
          required
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, contactName: true }))}
        />
        {touched.contactName && !contactName.trim() && (
          <span className="text-xs text-red-600">Required</span>
        )}
        <label className="block mb-1">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded p-2"
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
          className="w-full border rounded p-2"
          required
          value={phone}
          onChange={(e) => {
            // Only allow numbers and special chars
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
          className="w-full border rounded p-2"
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
      <div className="space-y-4">
        <label className="block mb-1">
          Website <span className="text-red-600">*</span>
        </label>
        <input
          type="url"
          placeholder="https://yourbusiness.com"
          className="w-full border rounded p-2"
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
      <button
        type="submit"
        className={`w-full bg-red-600 text-white rounded-full py-3 font-bold mt-2 transition-opacity ${
          !isFormValid ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={!isFormValid}
      >
        Submit
      </button>
    </form>
  );
}

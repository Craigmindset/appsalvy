import React from "react";

interface AttestationProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Attestation({ checked, onChange }: AttestationProps) {
  return (
    <div className="space-y-4 border rounded p-4 bg-gray-50 dark:bg-secondary">
      <h3 className="text-lg font-bold mb-2">
        Document Upload Attestation and Certification
      </h3>
      <p className="text-sm text-foreground/70 mb-2">
        Please read and agree to the following terms before proceeding with your
        upload:
      </p>
      <ul className="list-disc pl-5 text-sm text-foreground/80 mb-2 space-y-2">
        <li>
          <strong>Originality and Accuracy:</strong> I certify that the
          document(s) uploaded are true, accurate, and complete copies of the
          original records and that the information contained within them is
          current and correct to the best of my knowledge.
        </li>
        <li>
          <strong>Ownership and Authority:</strong> I certify that I am the
          rightful owner or have the full legal authority and necessary consent
          to upload and share this document(s) on this platform for the stated
          purpose.
        </li>
        <li>
          <strong>Compliance:</strong> I attest that the document(s) do not
          violate any applicable local, national, or international laws,
          regulations, intellectual property rights, or third-party agreements.
        </li>
        <li>
          <strong>Acceptance of Liability:</strong> I acknowledge that Salvy
          VentureCorp is relying on this certification and agree to hold
          harmless and indemnify Salvy VentureCorp against any and all claims,
          damages, or liabilities arising from the inaccuracy, falsity, or
          unauthorized nature of the uploaded material.
        </li>
      </ul>
      <p className="text-sm text-foreground/70 mb-4">
        I understand that providing false or misleading information constitutes
        a material breach and may result in the termination of my account and/or
        other legal consequences.
      </p>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="attest"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="attest" className="text-sm text-foreground/80">
          I Agree
        </label>
      </div>
    </div>
  );
}

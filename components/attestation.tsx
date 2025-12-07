import React from "react";

interface AttestationProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Attestation({ checked, onChange }: AttestationProps) {
  return (
    <div className="w-full max-w-md mx-auto space-y-3 border rounded p-3 sm:p-4 bg-gray-50 dark:bg-secondary">
      <h3 className="text-base sm:text-xs font-bold mb-1 text-center">
        Attestation and Certification
      </h3>
      <p className="text-xs sm:text-sm text-foreground/70 mb-1">
        Please read and agree to the following terms before proceeding with your
        upload:
      </p>
      <ul className="list-disc pl-5 text-xs sm:text-sm text-foreground/80 mb-2 space-y-1">
        <li>
          <strong>Originality and Accuracy:</strong> I certify the uploaded
          document(s) are accurate copies of the original records.
        </li>
        <li>
          <strong>Ownership and Authority:</strong> I confirm I have authority
          to upload and share these documents.
        </li>
        <li>
          <strong>Compliance:</strong> I attest the document(s) comply with
          applicable laws and third-party rights.
        </li>
        <li>
          <strong>Acceptance of Liability:</strong> I accept liability for any
          issues arising from inaccurate or unauthorized uploads.
        </li>
      </ul>
      <p className="text-xs sm:text-sm text-foreground/70 mb-3">
        I understand that providing false information may result in account
        termination or legal consequences.
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <input
          type="checkbox"
          id="attest"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mr-2 mt-1 sm:mt-0"
        />
        <label
          htmlFor="attest"
          className="text-sm sm:text-sm text-foreground/80"
        >
          I Agree
        </label>
      </div>
    </div>
  );
}

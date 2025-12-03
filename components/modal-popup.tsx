import React, { useState } from "react";
import { Info } from "lucide-react";
import Link from "next/link";

interface ModalPopupProps {
  open: boolean;
  onClose: () => void;
}

export function ModalPopup({ open, onClose }: ModalPopupProps) {
  const [infoOpen, setInfoOpen] = useState<null | "founder" | "partner">(null);

  if (!open) return null;

  // Close info popup when clicking outside
  const handleInfoOverlayClick = () => setInfoOpen(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-background rounded-lg shadow-xl max-w-2xl w-full p-8 relative flex flex-col md:flex-row gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Founder Card */}
        <div className="flex-1 bg-gray-50 dark:bg-secondary rounded-lg p-6 flex flex-col items-center relative">
          {/* Icon */}
          <div className="mb-2">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              {/* You can replace with a founder icon */}
              <Info className="w-8 h-8 text-primary" />
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-foreground">
              Are you a Founder?
            </span>
            <button
              type="button"
              className="text-gray-500 hover:text-primary"
              onClick={() => setInfoOpen("founder")}
              aria-label="Info"
            >
              <Info className="w-5 h-5" />
            </button>
          </div>
          <Link
            href="/founder-form"
            className="text-primary underline text-base"
            onClick={onClose}
          >
            Click Here
          </Link>
        </div>

        {/* Partner Card */}
        <div className="flex-1 bg-gray-50 dark:bg-secondary rounded-lg p-6 flex flex-col items-center relative">
          {/* Logo */}
          <div className="mb-2">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              {/* Replace with your logo image if needed */}
              <img src="/salvy-logo.png" alt="Logo" className="w-8 h-8" />
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-foreground whitespace-nowrap">
              Would you like to Partner?
            </span>
            <button
              type="button"
              className="text-gray-500 hover:text-primary"
              onClick={() => setInfoOpen("partner")}
              aria-label="Info"
            >
              <Info className="w-5 h-5" />
            </button>
          </div>
          <Link
            href="/partner-form"
            className="text-primary underline text-base"
            onClick={onClose}
          >
            Click Here
          </Link>
        </div>

        {/* Info Popups */}
        {infoOpen && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center"
            onClick={handleInfoOverlayClick}
          >
            <div
              className="bg-white dark:bg-background rounded-lg shadow-xl max-w-sm w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setInfoOpen(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-lg font-bold"
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-4 text-foreground">Info</h2>
              <p className="text-foreground/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim,
                vitae facilisis massa enim nec sem.
              </p>
            </div>
          </div>
        )}
        {/* Close button for main modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-lg font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}

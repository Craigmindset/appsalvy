"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300",
          "bg-primary text-primary-foreground hover:bg-primary/90",
          "flex items-center justify-center w-14 h-14",
          "md:w-16 md:h-16 md:bottom-8 md:right-8",
          isOpen && "scale-110"
        )}
        aria-label="Open chat options"
      >
        {isOpen ? (
          <X className="w-6 h-6 md:w-7 md:h-7" />
        ) : (
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        )}
      </button>

      {/* Chat Options Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 md:bottom-32 md:right-8 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-3 p-4 rounded-lg shadow-lg",
              "bg-red-600 border border-border hover:border-primary transition-all",
              "text-white hover:scale-105"
            )}
          >
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006a9.87 9.87 0 00-5.031 1.378c-3.055 2.286-3.806 6.561-1.519 9.616 2.288 3.055 6.562 3.806 9.617 1.519 3.056-2.287 3.806-6.561 1.519-9.617-1.551-2.073-4.037-3.268-6.584-3.268l.007-.027z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">WhatsApp</p>
              <p className="text-xs text-foreground/60">Chat with us</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@salvyventure.com"
            className={cn(
              "flex items-center gap-3 p-4 rounded-lg shadow-lg",
              "bg-red-600 border border-border hover:border-primary transition-all",
              "text-white hover:scale-105"
            )}
          >
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">Email</p>
              <p className="text-xs text-foreground/60">Send us a message</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+1234567890"
            className={cn(
              "flex items-center gap-3 p-4 rounded-lg shadow-lg",
              "bg-red-600 border border-border hover:border-primary transition-all",
              "text-white hover:scale-105"
            )}
          >
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">Call Us</p>
              <p className="text-xs text-foreground/60">+1 (234) 567-890</p>
            </div>
          </a>
        </div>
      )}

      {/* Close overlay when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          aria-label="Close chat menu"
        />
      )}
    </>
  );
}

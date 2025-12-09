"use client";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function PrivacyPolicyPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background py-16 px-4 relative">
      <button
        aria-label="Close"
        className="absolute top-6 right-6 z-50 p-2 rounded-full hover:bg-secondary focus:outline-none focus:ring"
        onClick={() => router.push("/")}
      >
        <X className="w-6 h-6 text-foreground" />
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-foreground/60 mb-8">
          Last updated: December 9, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Introduction
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Welcome to Salvy VentureCorp ("we," "our," or "us"). We are
              committed to protecting your personal information and your right
              to privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website and use our services.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Information We Collect
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mb-4">
              <li>Submit a founder application</li>
              <li>Submit a partner application</li>
              <li>Contact us through our website</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Interact with our services</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The types of information we may collect include:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, position/title
              </li>
              <li>
                <strong>Business Information:</strong> Company name, business
                registration details, website, LinkedIn profile
              </li>
              <li>
                <strong>Financial Information:</strong> Funding history, funding
                requirements, investment stage
              </li>
              <li>
                <strong>Documents:</strong> Business pitch decks, track records,
                and other supporting materials
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, device information, and usage data
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>Process and evaluate your applications</li>
              <li>Communicate with you about our services and opportunities</li>
              <li>Improve our website and services</li>
              <li>
                Send you relevant updates, newsletters, and marketing
                communications (with your consent)
              </li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Prevent fraud and enhance security</li>
              <li>Analyze usage patterns and optimize user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>
                <strong>With Your Consent:</strong> We may share your
                information when you give us permission
              </li>
              <li>
                <strong>Service Providers:</strong> We may share information
                with third-party service providers who perform services on our
                behalf
              </li>
              <li>
                <strong>Business Partners:</strong> We may share information
                with potential investors, partners, or collaborators as part of
                our ecosystem (with your consent)
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information
                if required by law or in response to legal processes
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Data Security
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure data storage with reputable cloud providers</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Data Retention
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. When we
              no longer need your information, we will securely delete or
              anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Your Privacy Rights
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>
                <strong>Access:</strong> Request access to the personal
                information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Portability:</strong> Request a copy of your information
                in a portable format
              </li>
              <li>
                <strong>Objection:</strong> Object to the processing of your
                information
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw your consent to data
                processing at any time
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at the email
              address provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to collect and
              track information about your browsing activities. Cookies are
              small data files stored on your device. You can control cookies
              through your browser settings, but disabling cookies may affect
              your ability to use certain features of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Third-Party Links
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Children's Privacy
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              we become aware that we have collected information from a child
              without parental consent, we will take steps to delete that
              information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. International Data Transfers
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your country of residence. These countries may have
              data protection laws that are different from the laws of your
              country. We take appropriate measures to ensure that your
              information receives an adequate level of protection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new Privacy
              Policy on this page and updating the "Last updated" date. We
              encourage you to review this Privacy Policy periodically to stay
              informed about how we protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              13. Contact Us
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-secondary/30 p-6 rounded-lg">
              <p className="text-foreground font-medium mb-2">
                Salvy VentureCorp
              </p>
              <p className="text-foreground/80">
                Email:{" "}
                <a
                  href="mailto:info@salvy.ng"
                  className="text-primary hover:underline"
                >
                  info@salvy.ng
                </a>
              </p>
              <p className="text-foreground/80">
                Address: 29, Ogundana Street, Ikeja, Lagos, Nigeria
              </p>
              <p className="text-foreground/80">Phone: +234 913 511 1099</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              14. Consent
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              By using our website and services, you consent to the collection,
              use, and sharing of your information as described in this Privacy
              Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: [
        "General Inquiries: info@salvy.ng",
        "Founder Applications: ventures@salvy.ng",
        "Investor Relations: investors@salvy.ng",
        "Partnerships: partnerships@salvy.ng",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 913 511 1099", "Business Hours: Mon-Fri,  9AM-5PM"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["29, Ogundana Street, Ikeja, Lagos, Nigeria"],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-black py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl">
            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-center  text-card dark:text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-center text-card dark:text-foreground/70 leading-relaxed">
              Have a question or want to collaborate? We'd love to hear from{" "}
              <br />
              you. Reach out to our team and let's build something extraordinary
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-16 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-16">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              const bgColors = [
                "bg-blue-100 dark:bg-blue-950",
                "bg-green-100 dark:bg-green-950",
                "bg-red-100 dark:bg-red-950",
              ];
              return (
                <Card
                  key={info.title}
                  className={`p-8 ${bgColors[idx % bgColors.length]}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-10 h-10 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {info.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-foreground/70">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Send us a Message
            </h2>
            <p className="text-lg text-foreground/70">
              Fill out the form below and our team will get back to you within
              24 hours
            </p>
          </div>

          <Card className="p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-950 rounded-full mb-4">
                  <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-foreground/70">
                  Thank you for reaching out. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+234 (0) 701 234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="founder">Founder Application</option>
                      <option value="investor">Investor Relations</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-3 text-base font-semibold"
                >
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "What is the application process for founders?",
                answer:
                  "Our application process is designed to identify exceptional founders and ideas. Submit your application through our platform, and our team will review and reach out within 2 weeks.",
              },
              {
                question: "How can I become an investor or partner?",
                answer:
                  "We welcome partnerships with like-minded organizations and investors. Please contact our partnerships team at partnerships@salvyventure.com with your proposal.",
              },
              {
                question: "What support does Salvy provide to founders?",
                answer:
                  "We provide comprehensive support including capital, mentorship, operational support, access to our network, and strategic guidance to help scale your venture.",
              },
              {
                question: "Are you only focused on tech ventures?",
                answer:
                  "While we have expertise in tech, we invest in high-impact ventures across multiple sectors including fintech, agritech, healthtech, and enterprise software.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

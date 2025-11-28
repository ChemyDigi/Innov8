"use client";

import { MapPin, Phone, Mail, Facebook, Linkedin } from "lucide-react";

export default function VisitUs() {
  return (
    <div className="mt-35">
      {/* Contact Details */}
      <div className="space-y-8 text-black">
        {/* Address Section */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <MapPin className="w-6 h-6 text-brand" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Address :</h3>
            <p className="text-lg leading-relaxed text-justify text-black">
              No. 6, Sulaiman Terrace, Colombo 5, Sri Lanka
            </p>
            <p className="text-lg leading-relaxed text-justify text-black mt-2">
              531A, Upper Cross Street #04-98, Hong Lim Complex Singapore 051531
            </p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Phone className="w-6 h-6 text-brand" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Tel :</h3>
            <p className="text-lg leading-relaxed text-justify text-black">
              +94 11 435 8577
            </p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Mail className="w-6 h-6 text-brand" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">E-mail :</h3>
            <p className="text-lg leading-relaxed text-justify text-black">
              info@innov8.digital
            </p>
          </div>
        </div>

        {/* Connect With Us Section */}
        <div className="pt-4">
          <h3 className="text-xl font-semibold mb-4">CONNECT WITH US</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

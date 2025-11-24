import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { logo } from "@/data/images";
import { appMessage } from "@/data/links";

const Footer = () => {
  const year = new Date().getFullYear();

  const services = [
    { name: "Aircon Installation", href: "/services" },
    { name: "AC Maintenance", href: "/services" },
    { name: "Refrigeration & Cold Rooms", href: "/services" },
    { name: "Air-conditioning Repairs", href: "/services" },
    { name: "Emergency AC Service", href: "/services" },
    { name: "Commercial HVAC", href: "/services" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Request Quote", href: "/contact" },
  ];

  const trustBadges = [
    { icon: <Shield className="h-5 w-5" />, text: "Licensed & Insured" },
    { icon: <Award className="h-5 w-5" />, text: "7+ Years Experience" },
    { icon: <Clock className="h-5 w-5" />, text: "24/7 Emergency Service" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#020817] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/50 via-slate-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="absolute inset-0 opacity-10 mix-blend-screen bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[120px_120px]" />
      </div>

      <section className="relative mx-auto w-[92%] max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="mb-6 inline-flex items-center">
              <Image
                src={logo}
                alt="UltraTech Aircon logo"
                width={180}
                height={50}
                className="h-auto w-44"
              />
            </Link>
            <p className="max-w-sm text-sm text-blue-100/85">
              Cape Town HVAC engineers on standby for commercial, industrial and
              residential estates. Precision installs, preventative maintenance
              and emergency response guided by 7+ Years experience.
            </p>
          </div>
         
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
              Navigation
            </p>
            <ul className="space-y-3 text-sm text-blue-100/80">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4 text-blue-400 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
              Services
            </p>
            <ul className="space-y-3 text-sm text-blue-100/80">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4 text-blue-400 transition-transform group-hover:translate-x-1" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
              Contact
            </p>
            <div className="space-y-5 text-sm text-blue-100/80">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-blue-200">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-white">Cape Town</p>
                  <p className="text-xs text-blue-100/70">
                    Serving all suburbs & industrial parks
                  </p>
                </div>
              </div>

              <Link
                href="tel:+27737671328"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:border-white/30 hover:bg-white/10"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/15 text-blue-200">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-base font-semibold">073 767 1328</p>
                  <p className="text-xs uppercase tracking-wide text-blue-100/70">
                    Call or WhatsApp 24/7
                  </p>
                </div>
              </Link>

              <Link
                href="mailto:info@ultratechaircon.co.za"
                className="group flex items-center gap-3 text-sm transition hover:text-white"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-blue-200">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="break-all text-sm text-white">
                    info@ultratechaircon.co.za
                  </p>
                  <p className="text-xs uppercase tracking-wide text-blue-100/70">
                    Email us anytime
                  </p>
                </div>
              </Link>

              <Link
                href={appMessage}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                <Phone className="h-4 w-4" />
                Request a callback
              </Link>
            </div>
          </div>
          
        </div>
        <div className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-6 text-sm text-blue-100">
                  {trustBadges.map((badge) => (
                    <div key={badge.text} className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/15 text-blue-200">
                        {badge.icon}
                      </span>
                      <span className="font-medium whitespace-nowrap">
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-start sm:flex-1 sm:justify-end">
                  <SocialIcons />
                </div>
              </div>
            </div>
      </section>

      <section className="relative border-t border-white/10 bg-black/50 py-5 text-xs text-blue-100/70">
        <div className="mx-auto flex w-[92%] max-w-7xl flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-center sm:text-left">
            © {year} UltraTech Aircons. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-center sm:text-right">
            <Link href="/" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <span className="hidden h-4 w-px bg-white/20 sm:inline-block" />
            <Link href="/" className="transition hover:text-white">
              Terms of Service
            </Link>
            <span className="hidden h-4 w-px bg-white/20 sm:inline-block" />
            <span>
              Crafted by{" "}
              <Link
                href="https://www.jacobc.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-300 hover:text-white"
              >
                Jacob Chademwiri
              </Link>
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;


import { ChevronRight, Mail, MapPin, Phone, Clock, Shield, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { logo } from "@/data/images";

const Footer = () => {
  const year = new Date().getFullYear();
  
  const services = [
    { name: "Aircon Installation", href: "/services" },
    { name: "AC Maintenance", href: "/services" },
    { name: "Refrigeration & Cold Rooms", href: "/services" },
    { name: "Air-conditioning Repairs", href: "/services" },
    { name: "Emergency AC Service", href: "/services" },
    { name: "Commercial HVAC", href: "/services" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Request Quote", href: "/contact" },
    // { name: "FAQ", href: "/faq" }
  ];

  const trustBadges = [
    { icon: <Shield className="h-5 w-5" />, text: "Licensed & Insured" },
    { icon: <Award className="h-5 w-5" />, text: "15+ Years Experience" },
    { icon: <Clock className="h-5 w-5" />, text: "24/7 Emergency Service" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Main Footer Content */}
      <section className="mx-auto w-[90%] max-w-7xl py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-block transition-transform hover:scale-105">
              <Image
                src={logo}
                alt="UltraTech Aircon logo"
                width={160}
                height={40}
                className="h-auto w-40"
              />
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Cape Town&apos;s trusted air conditioning specialists. Professional installation, 
              maintenance, and repairs for all AC types.
            </p>
            
            {/* Trust Badges */}
            {/* <div className="mb-4 space-y-2">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                    {badge.icon}
                  </div>
                  <span className="text-sm font-medium text-white">{badge.text}</span>
                </div>
              ))}
            </div> */}

            <SocialIcons />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    <ChevronRight 
                      size={16} 
                      className="mr-1 transition-transform group-hover:translate-x-1" 
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    <ChevronRight 
                      size={16} 
                      className="mr-1 transition-transform group-hover:translate-x-1" 
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <p className="mb-4 text-sm font-semibold text-blue-400">
              Available 24/7 for Emergency Service
            </p>

            <div className="space-y-3">
              <address className="not-italic">
                <Link
                  href="https://maps.google.com/?q=Cape+Town"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  <span>
                    Cape Town, Western Cape
                    <br />
                    <span className="text-xs text-gray-500">Serving all suburbs</span>
                  </span>
                </Link>
              </address>

              <Link
                href="tel:+27737671328"
                className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                <Phone className="h-4 w-4 shrink-0 text-blue-500" />
                <div>
                  <div className="font-semibold text-white">073 767 1328</div>
                  <div className="text-xs text-gray-500">Call or WhatsApp</div>
                </div>
              </Link>

              <Link
                href="mailto:info@ultratechaircon.co.za"
                className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                <Mail className="h-4 w-4 shrink-0 text-blue-500" />
                <div>
                  <div className="break-all text-sm">info@ultratechaircon.co.za</div>
                  <div className="text-xs text-gray-500">Email us anytime</div>
                </div>
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="tel:+27737671328"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="border-t border-gray-800 bg-gray-900/50">
        <div className="mx-auto w-[90%] max-w-7xl py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h4 className="mb-1 text-sm font-bold text-white">Get Maintenance Tips & Special Offers</h4>
              <p className="text-xs text-gray-400">Subscribe to our newsletter for AC care tips</p>
            </div>
            <form className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Bottom Bar */}
      <section className="border-t border-gray-800 bg-gray-950 py-4">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-between gap-3 text-xs text-gray-400 sm:flex-row">
          <p className="text-center sm:text-left">
            © Copyright {year} UltraTech Aircons. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-blue-400">
              Terms of Service
            </Link>
            <div className="text-gray-500">
              Crafted by{" "}
              <Link
                href="https://www.jacobc.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-400 hover:text-blue-300"
              >
                Jacob Chademwiri
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
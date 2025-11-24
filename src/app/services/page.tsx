import { ServiceBanner, ServiceCard } from "@/components";
import { appMessage } from "@/data/links";
import { services } from "@/data/services";
import { TService } from "@/lib/types";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const Services = () => {
  return (
    <main>
      <ServiceBanner />
      
      {/* Services Grid Section */}
      <section className="relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/90 to-slate-900/85" />
        <div className="absolute inset-0 opacity-50 mix-blend-screen [background-image:radial-gradient(circle_at_top,_rgba(63,131,248,0.4),_transparent_65%)]" />
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:160px_160px]" />
        <div className="absolute inset-x-0 bottom-[-120px] h-64 blur-[140px] bg-gradient-to-r from-blue-500/25 via-cyan-400/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950/90" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-32 h-32 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

        <div className="relative mx-auto w-[92%] max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">
              Services
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Our Expert Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-blue-100/85">
              Professional air conditioning solutions for residential and
              commercial properties
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service: TService) => (
              <ServiceCard
                key={service.link?.href}
                picture={service.picture}
                title={service.title}
                desc={service.desc}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/85 to-blue-900/80" />
        <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_top,_rgba(63,131,248,0.3),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 -top-28 h-28 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950/85" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-40 h-40 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

        <div className="relative mx-auto w-[92%] max-w-7xl">
          <div className="grid gap-12 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/45 to-blue-950/70 p-10 shadow-2xl shadow-blue-900/40 backdrop-blur-2xl lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">
                Why Us
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Why Choose UltraTech Aircons?
              </h2>
              <p className="mb-8 text-lg text-blue-100/85">
                Cape Town&apos;s trusted air conditioning specialists with over
                15 years experience delivering exceptional installation,
                preventative maintenance and emergency repairs.
              </p>

              <div className="space-y-4">
                {[
                  "Licensed & Insured Technicians",
                  "Same-Day Emergency Service",
                  "12-Month Service Guarantee",
                  "Competitive Pricing & Free Quotes",
                  "All Major AC Brands Serviced",
                  "Commercial & Residential Expertise",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20 ring-1 ring-white/10">
                      <CheckCircle className="h-4 w-4 text-blue-200" />
                    </div>
                    <span className="text-blue-100">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href={appMessage}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-blue-400"
                >
                  Get Your Free Quote
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "60+", label: "Happy Clients" },
                { number: "24/7", label: "Emergency Service" },
                { number: "100%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/45 via-blue-900/35 to-slate-900/25 p-6 text-center shadow-2xl shadow-black/20 backdrop-blur"
                >
                  <div className="mb-2 text-4xl font-bold text-blue-100">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-blue-100/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
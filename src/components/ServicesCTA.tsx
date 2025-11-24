import { airconImage } from "@/data/images";
import Image from "next/image";
import { ButtonOutline, ButtonSolid } from ".";
import { CheckCircle2, ThermometerSnowflake, Wrench } from "lucide-react";

const highlights = [
  "Comprehensive load calculations before every install",
  "Preventative maintenance schedules tailored to your site",
  "Emergency response teams on-call 24/7",
];

const stats = [
  { label: "Projects Delivered", value: "100+" },
  { label: "Average Response", value: "2 hrs" },
  { label: "Warranty Coverage", value: "12 mo" },
];

const ServicesCTA = () => {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-20 mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent via-slate-950/35 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-28 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

      <div className="relative mx-auto w-[92%] max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 text-white shadow-2xl shadow-blue-900/40 backdrop-blur">
        <div className="grid gap-10 md:grid-cols-[1.05fr,0.95fr]">
          <div className="relative p-10 lg:p-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              <ThermometerSnowflake className="h-4 w-4 text-blue-200" />
              Climate Control Experts
            </div>

            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              Precision installation & preventative maintenance built for Cape
              Town conditions
            </h3>
            <p className="mt-5 text-base leading-relaxed text-blue-100/90">
              Get a partner that manages the full lifecycle of your air
              conditioning infrastructure—from feasibility studies and unit
              sourcing to long-term servicing programs that protect your
              investment.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-400" />
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonSolid url="/contact" label="Book Site Visit" />
              <ButtonOutline url="/services" label="View Services" />
            </div>

            <div className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-blue-300">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-blue-100/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <Image
              src={airconImage}
              alt="Samsung Aircon installation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-blue-100">
                <Wrench className="h-4 w-4 text-blue-200" />
                Certified Install Team
              </div>
              <p className="mt-3 text-lg font-semibold text-white">
                Free on-site assessments for commercial, industrial and luxury
                residential projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesCTA;

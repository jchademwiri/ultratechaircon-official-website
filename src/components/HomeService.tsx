import {
  Cog,
  ThermometerSnowflake,
  Wrench,
  Sparkles,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import Card from "./Card";

const serviceCards = [
  {
    icon: <Wrench className="h-6 w-6 text-blue-100" />,
    title: "Aircon Repair Services",
    description:
      "Full diagnostics, PCB replacements, re-gassing and leak repairs for split, cassette and ducted units with 12‑month workmanship guarantee.",
  },
  {
    icon: <Cog className="h-6 w-6 text-blue-100" />,
    title: "Air Conditioners Installation",
    description:
      "Precision installation for inverter, commercial and industrial systems with load calculation, commissioning and manufacturer backed warranties.",
  },
  {
    icon: <ThermometerSnowflake className="h-6 w-6 text-blue-100" />,
    title: "Refrigeration & Coldrooms",
    description:
      "Design, build and maintenance of cold rooms, chillers, domestic and commercial refrigeration fleets – on-site or at our workshop.",
  },
];

const highlights = [
  {
    icon: <Sparkles className="h-4 w-4 text-blue-200" />,
    label: "Same-day emergency call-outs",
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-blue-200" />,
    label: "Certified refrigeration technicians",
  },
  {
    icon: <MapPin className="h-4 w-4 text-blue-200" />,
    label: "Cape Town & surrounding regions",
  },
];

const HomeService = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),_transparent_60%)]" />

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 py-16 text-white shadow-2xl shadow-blue-900/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950/80" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

        <div className="relative mx-auto w-[90%] max-w-7xl overflow-hidden rounded-3xl border border-white/5 bg-white/5 px-6 py-12 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative z-10 grid gap-12 md:grid-cols-[0.95fr,1.05fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Complete HVAC Coverage
              </div>

              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Air conditioning & refrigeration
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-blue-100/90">
                Installation, preventative maintenance and emergency repairs
                across commercial, industrial and residential sites. Our mobile
                teams operate 24/7 with fully stocked vans to keep your climate
                systems online.
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-sm font-medium text-blue-100"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-6 text-center sm:grid-cols-3 sm:text-left">
                <div>
                  <p className="text-3xl font-bold text-blue-300">24/7</p>
                  <p className="text-sm text-blue-100">Emergency support</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-300">15+</p>
                  <p className="text-sm text-blue-100">Years in Cape Town</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-300">100+</p>
                  <p className="text-sm text-blue-100">Units serviced yearly</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {serviceCards.map((service) => (
                <Card
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeService;
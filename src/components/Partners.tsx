import { TLogo } from "@/lib/types";
import PartnerLogo from "./PartnerLogo";
import { plogos } from "@/data/images";
import { BadgeCheck, ShieldCheck } from "lucide-react";

const highlights = [
  "OEM certified installers",
  "Direct parts sourcing",
  "Nationwide warranty support",
];

const Partners = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-blue-950 via-slate-950 to-blue-900" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/2 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-linear-to-b from-transparent via-blue-950/40 to-blue-950/85" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-20 bg-linear-to-t from-blue-950/80 via-blue-950/30 to-transparent" />

      <div className="mx-auto w-[92%] max-w-6xl text-white">
        <div className="mb-10 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
            <ShieldCheck className="h-4 w-4 text-blue-200" />
            Trusted network
          </div>
          <h3 className="mt-6 text-3xl font-bold md:text-4xl">
            Preferred partners & OEM suppliers
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100/90">
            We work directly with leading HVAC brands to ensure genuine parts,
            extended warranties and factory-trained support teams on every
            installation.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-blue-100">
            {highlights.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
              >
                <BadgeCheck className="h-4 w-4 text-green-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl shadow-blue-900/40">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {plogos.map(({ logo, alt }: TLogo) => (
              <div
                key={alt}
                className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 px-4 py-6 backdrop-blur-sm hover:border-white/20 transition-colors"
              >
                <PartnerLogo logo={logo} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Partners;

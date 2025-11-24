import { appMessage } from "@/data/links";
import { ButtonSolid } from ".";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-fixed bg-center opacity-70" />
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/90 via-blue-950/85 to-blue-950" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-linear-to-b from-transparent via-blue-950/35 to-blue-950/80" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-20 bg-linear-to-t from-blue-950/80 via-blue-950/30 to-transparent" />

      <div className="relative z-10 mx-auto w-[90%] max-w-4xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">
          Free Site Audit
        </div>
        <h3 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
          Commercial & industrial HVAC teams on standby across Cape Town
        </h3>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-100">
          Book a no-obligation assessment for shopping centres, warehouses,
          hotel groups and luxury residential builds. Our engineers document the
          full scope and deliver a detailed plan within 48 hours.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">
          <span>Same-day emergency deployment</span>
          <span className="hidden h-4 w-px bg-white/30 sm:inline" />
          <span>Certified & insured technicians</span>
          <span className="hidden h-4 w-px bg-white/30 sm:inline" />
          <span>Over 650 active service agreements</span>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonSolid url={appMessage} label="Request Quote" />
          <a
            href="tel:+27737671328"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-blue-100 underline-offset-4 hover:text-white hover:underline"
          >
            or call 073 767 1328 now →
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute left-10 top-10 h-28 w-28 rounded-full border border-white/20" />
      <div className="pointer-events-none absolute right-16 bottom-16 h-32 w-32 rounded-full border border-white/10" />
    </section>
  );
};
export default CTABanner;

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
      <section className="bg-white py-16">
        <div className="mx-auto w-[90%] max-w-7xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Expert Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Professional air conditioning solutions for residential and commercial properties
            </p>
          </div>

          {/* Services Grid */}
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
      <section className="bg-gray-50 py-16">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Why Choose UltraTech Aircons?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                We&apos;re Cape Town&apos;s trusted air conditioning specialists with over 15 years of experience
                delivering exceptional service and reliable solutions.
              </p>

              <div className="space-y-4">
                {[
                  "Licensed & Insured Technicians",
                  "Same-Day Emergency Service",
                  "12-Month Service Guarantee",
                  "Competitive Pricing & Free Quotes",
                  "All Major AC Brands Serviced",
                  "Commercial & Residential Expertise"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={appMessage}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  Get Your Free Quote
                </Link>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "500+", label: "Happy Clients" },
                { number: "24/7", label: "Emergency Service" },
                { number: "100%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-blue-200 bg-white p-6 text-center shadow-lg"
                >
                  <div className="mb-2 text-4xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
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
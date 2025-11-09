import React from 'react';
import { Phone, MessageCircle, Wrench, Snowflake, Shield, Clock } from 'lucide-react';
import { ButtonSolid } from './Button';
import { TCard } from '@/lib/types';



const ServiceCard = ({ icon, title, description }: TCard) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
      <div className="mb-4 inline-flex rounded-full bg-blue-500/30 p-3 text-white transition-all duration-300 group-hover:bg-blue-500/50">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-200">{description}</p>
      
      {/* Decorative corner accent */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-400/10 transition-all duration-300 group-hover:scale-150" />
    </div>
  );
};

const ServiceBanner = () => {
  const services = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Installation",
      description: "Professional setup of all AC types including inverters, ducted, and cassette systems"
    },
    {
      icon: <Snowflake className="h-6 w-6" />,
      title: "Maintenance",
      description: "Regular servicing to keep your system running efficiently year-round"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Repairs",
      description: "Fast, reliable repairs with genuine parts and 12-month guarantee"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Emergency",
      description: "Round-the-clock support for urgent AC breakdowns and issues"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-20">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/aircon-repairs.jpg')] bg-cover bg-center opacity-20"
        style={{ mixBlendMode: 'overlay' }}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute -left-48 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
      
      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-6 py-2 text-sm font-semibold text-blue-200 backdrop-blur-sm">
            <Snowflake className="h-4 w-4" />
            <span>Comprehensive AC Solutions</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our Expert Services
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
            Specialists in installation & repairs for all air conditioning types across 
            <span className="font-semibold text-blue-300"> Cape Town</span>
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>Same-Day Service Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>Licensed & Insured Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>12-Month Service Guarantee</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonSolid 
              href="https://wa.me/27737671328?text=Hi, I'd like to request a quote for AC services" 
              label="WhatsApp Quote" 
              icon={<MessageCircle className="h-5 w-5" />}
            />
            <ButtonSolid 
              href="tel:+27737671328" 
              label="Call 073 767 1328" 
              icon={<Phone className="h-5 w-5" />}
            />
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 text-center">
            <div className="text-white">
              <div className="mb-1 text-3xl font-bold">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-white">
              <div className="mb-1 text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-white">
              <div className="mb-1 text-3xl font-bold">4.9★</div>
              <div className="text-sm text-gray-300">Customer Rating</div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-white">
              <div className="mb-1 text-3xl font-bold">100%</div>
              <div className="text-sm text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
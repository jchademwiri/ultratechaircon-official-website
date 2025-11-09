import React from 'react';
import { MessageCircle, Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react';
import { ButtonOutline, ButtonSolid } from './Button';

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  accent: 'green' | 'blue' | 'purple';
}

const ContactMethod = ({ icon, title, value, href, accent }: ContactMethodProps) => {
  const accentColors = {
    green: 'group-hover:bg-green-500 group-hover:shadow-green-500/50',
    blue: 'group-hover:bg-blue-500 group-hover:shadow-blue-500/50',
    purple: 'group-hover:bg-purple-500 group-hover:shadow-purple-500/50'
  };

  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/10 hover:border-white/30"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 opacity-0 transition-opacity duration-500 group-hover:from-white/5 group-hover:to-transparent group-hover:opacity-100" />
      
      <div className="relative flex flex-col items-center text-center">
        <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white shadow-lg transition-all duration-500 ${accentColors[accent]}`}>
          {icon}
        </div>
        <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {title}
        </div>
        <div className="text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
          {value}
        </div>
        
        {/* Arrow indicator */}
        <div className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
};

const ContactBanner = () => {
  const benefits = [
    "Free consultation & quote",
    "Same-day service available",
    "Licensed & insured technicians",
    "12-month service guarantee"
  ];

  const contactMethods: { icon: React.ReactNode; title: string; value: string; href: string; accent: 'green' | 'blue' | 'purple'; }[] = [
    {
      icon: <MessageCircle className="h-7 w-7" />,
      title: "WhatsApp",
      value: "Chat Now",
      href: "https://wa.me/27737671328?text=Hi, I'd like to discuss AC services",
      accent: "green"
    },
    {
      icon: <Phone className="h-7 w-7" />,
      title: "Call Us",
      value: "073 767 1328",
      href: "tel:+27737671328",
      accent: "blue"
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Email",
      value: "Send Message",
      href: "mailto:info@ultratechaircon.co.za",
      accent: "purple"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 py-20">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/aircon-repairs.jpg')] bg-cover bg-center opacity-10"
        style={{ mixBlendMode: 'overlay' }}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 mx-auto w-[90%] max-w-6xl">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-6 py-2 text-sm font-semibold text-green-300 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span>We're Available 24/7</span>
          </div>

          {/* Headline */}
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Ready to Get Started?
          </h2>
          
          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-200">
            Talk to our AC experts now and get a free consultation for your home or business needs
          </p>

          {/* Benefits Grid */}
          <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 rounded-lg bg-white/5 px-4 py-3 backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-green-400" />
                <span className="text-sm font-medium text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Contact Methods - Improved Layout */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <ContactMethod
                key={index}
                icon={method.icon}
                title={method.title}
                value={method.value}
                href={method.href}
                accent={method.accent}
              />
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <ButtonSolid 
              href="https://wa.me/27737671328?text=Hi, I'd like to request a quote for AC services" 
              label="Chat on WhatsApp" 
              icon={<MessageCircle className="h-5 w-5" />}
            />
            <ButtonOutline 
              href="tel:+27737671328" 
              label="Call 073 767 1328" 
              icon={<Phone className="h-5 w-5" />}
            />
          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-400" />
              <span>Mon-Sun: 24/7 Emergency Service</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>Serving Cape Town & Surrounds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
    </section>
  );
};

export default ContactBanner;
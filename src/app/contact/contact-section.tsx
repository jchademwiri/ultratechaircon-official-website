
import { Phone, Mail, MapPin, ArrowRight, Clock } from 'lucide-react';
import { ButtonOutline } from '@/components';
import Link from 'next/link';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description?: string;
  href: string;
  buttonLabel: string;
}

const ContactCard = ({ icon, title, value, description, href, buttonLabel }: ContactCardProps) => {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg border border-blue-600/30 bg-gradient-to-br from-blue-600/20 to-blue-600/10 p-8 transition-all duration-500 hover:scale-105 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/20"
    >
      {/* Decorative corner gradient */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-600 shadow-lg transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-gray-400">
          {title}
        </h3>

        {/* Value */}
        <p className="mb-2 text-xl font-bold text-gray-300 lg:text-2xl">
          {value}
        </p>

        {/* Description */}
        {description && (
          <p className="mb-6 text-sm text-gray-400">
            {description}
          </p>
        )}

        {/* Button */}
        <ButtonOutline href={href} label={buttonLabel} />
      </div>
    </Link>
  );
};

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-9 w-9" />,
      title: "Call Us",
      value: "073 767 1328",
      description: "Available 24/7 for emergencies",
      href: "tel:+27737671328",
      buttonLabel: "Call Now"
    },
    {
      icon: <Mail className="h-9 w-9" />,
      title: "Email Us",
      value: "info@ultratechaircon.co.za",
      description: "Get a response within 24 hours",
      href: "mailto:info@ultratechaircon.co.za",
      buttonLabel: "Send Email"
    },
    {
      icon: <MapPin className="h-9 w-9" />,
      title: "Visit Us",
      value: "Cape Town",
      description: "Serving all suburbs & surrounds",
      href: "https://maps.app.goo.gl/NRzi6qjm9dWDpii68",
      buttonLabel: "Get Directions"
    }
  ];

  return (
    <section className=" py-12">
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Contact Cards - Vertical on mobile, Horizontal on larger screens */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method, index) => (
            <ContactCard
              key={index}
              icon={method.icon}
              title={method.title}
              value={method.value}
              description={method.description}
              href={method.href}
              buttonLabel={method.buttonLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
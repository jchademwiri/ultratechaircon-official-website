import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TService } from '@/lib/types';

const ServiceCard = ({ picture, title, desc, link }: TService) => {
  const cardContent = (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/10">
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-gray-100">
        <Image
          src={picture.logo}
          alt={picture.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Hover Icon */}
        {link && (
          <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {desc}
        </p>
        
        {/* Read More Link - Only show if link exists */}
        {link && (
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>

      {/* Bottom Border Accent */}
      {link && (
        <div className="h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 group-hover:w-full" />
      )}
    </article>
  );

  // If link exists, wrap in Link component, otherwise just return the card
  if (link) {
    return (
      <Link href='#' className="group">
        {cardContent}
      </Link>
    );
  }

  return <div className="group">{cardContent}</div>;
};

export default ServiceCard;
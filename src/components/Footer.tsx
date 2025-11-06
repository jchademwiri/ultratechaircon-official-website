import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white">
      <section className="m-auto grid w-[90%] max-w-7xl gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="py-2 font-semibold uppercase text-primary">
            ULTRATECH AIRCON
          </h3>
          <p>
            Installation & Repairs on all types of air-conditioning units
            including inverters, ducted and cassette. Our repairs services
            including leak repairs and regassing, compressor replacement, PCB
            repairs and replacement. We also do overall repairs and performance
            assessment on air-conditioning units.
          </p>
          <SocialIcons />
        </div>
        <div>
          <h3 className="py-2 font-semibold uppercase text-primary">
            OUR SERVICES
          </h3>
          <ul className="grid gap-2 ">
            <li className="flex items-center border-b border-blue-200/20 py-1">
              {" "}
              <ChevronRight size={18} /> Aircon Installation
            </li>
            <li className="flex items-center border-b border-blue-200/20 py-1">
              {" "}
              <ChevronRight size={18} /> AC Maintenance
            </li>
            <li className="flex items-center border-b border-blue-200/20 py-1">
              {" "}
              <ChevronRight size={18} /> Refrigeration & Cold Rooms
            </li>
            <li className="flex items-center border-b border-blue-200/20 py-1">
              {" "}
              <ChevronRight size={18} /> Air-conditioning Repairs
            </li>
          </ul>
        </div>
        <div>
          <h3 className="py-2 font-semibold uppercase text-primary">
            CONTACT US
          </h3>
          <p className="py-2">
            Air Conditioner Installation in Cape Town
          </p>
          <address className="flex gap-2 py-1">
            <MapPin /> Capetown
          </address>
          <Link
            href="tel:+27737671328 "
            className="flex gap-2 py-1"
            aria-label="Call us on mobile"
          >
            <Phone /> 073 767 1328 
          </Link>
          <Link
            href="mailto:muchenutatenda@gmail.com"
            className="flex gap-2 py-1"
            aria-label="email us today"
          >
            <Mail /> muchenutatenda@gmail.com
          </Link>
        </div>
      </section>
      <section className="bg-blue-950 py-7 text-white">
        <div className="m-auto grid w-[90%] max-w-7xl justify-between sm:flex">
          <p> © Copyright {new Date().getFullYear()} - Ultratech Aircons</p>
          <div>
            Developed by{" "}
            <Link
              href="https://www.jacobc.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
              aria-label="Read more about our developer"
            >
              Jacob Chademwiri
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;

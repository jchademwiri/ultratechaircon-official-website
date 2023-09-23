import { links } from "@/data"
import { randomUUID } from "crypto"
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="">
      <section className="py-5 gap-6 grid md:grid-cols-3 sm:grid-cols-2 max-w-7xl m-auto my-7 w-[90%]" >
        <div>
          <h3 className="uppercase text-primary py-2 font-semibold">ULTRATECH AIRCON</h3>
          <p>Installation & Repairs on all types of air-conditioning units including inverters, ducted and cassette. Our repairs services including leak repairs and regassing, compressor replacement, PCB repairs and replacement. We also do overall repairs and performance assessment on air-conditioning units.</p>
        </div>
        <div>
          <h3 className="uppercase text-primary py-2 font-semibold">OUR SERVICES</h3>
          <ul className="grid gap-2 " >
            <li className="flex border-b border-slate-400 my-1"> <ChevronRight /> Aircon Installation</li>
            <li className="flex border-b border-slate-400 my-1"> <ChevronRight /> AC Maintenance</li>
            <li className="flex border-b border-slate-400 my-1"> <ChevronRight /> Refrigeration & Cold Rooms</li>
            <li className="flex border-b border-slate-400 my-1"> <ChevronRight /> Air-conditioning Repairs</li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase text-primary py-2 font-semibold">CONTACT US</h3>
          <p className="py-2" >Air Conditioner Installation in Johannesburg & Pretoria</p>
          <address className="flex gap-2 py-1" >
            <MapPin /> Glen Austin. Johannesburg. 1685
          </address>
          <p className="flex gap-2 py-1" >
            <Phone /> 073 767 1328</p>
          <Link href='mailto:support@ultratechaircon.co.za' className="flex gap-2 py-1" >
            <Mail /> support@ultratechaircon.co.za</Link>
        </div>
      </section>
      <section className="bg-primary">
        <div className="grid sm:flex justify-between items-center max-w-7xl m-auto w-[90%]">
          <ul className="flex gap-3 py-7">
            {links.map(({ label, href }) => (
              <Link key={randomUUID()} className="hover:text-primary py-2" href={href}>
                <li>
                  {label}
                </li>
              </Link>
            ))}
          </ul>
          <div >
            Copyright © {year} by {' '}
            <Link href={`/`} target="_blank" rel="noopener noreferrer" className="">Jacob Chademwiri</Link>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
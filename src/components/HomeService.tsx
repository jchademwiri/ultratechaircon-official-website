import { logo } from "@/data/images"
import { Cog, ThermometerSnowflake, Wrench } from 'lucide-react';
import Card from "./Card"

const HomeService = () => {
    return (
        <section className="flex justify-between gap-3 max-w-7xl m-auto my-4 w-[90%]">

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 my-5 py-5 " >
                <Card icon={<Cog className="text-primary" size={50} />}

                    alt="alt text"
                    title="Air Conditioners Installation"
                    desc="Installation & Repairs on all types of air-conditioning units including inverters, ducted and cassette. Our repairs services including leak repairs and re-gassing, compressor replacement." />
                <Card icon={<Wrench className="text-primary" size={50} />}
                    alt="alt text"
                    title="Aircon Repair Services"
                    desc="We handle all common faults in air-conditioning, which include aircon not cooling aircon not running, aircon tripping, aircon reporting error code, aircon dripping water and noise." />
                <Card icon={<ThermometerSnowflake className="text-primary" size={50} />}
                    alt="alt text"
                    title="Refrigeration Services"
                    desc="Fridges repairs & installation of cold rooms, chillers and mortuaries. We handle repairs for domestic, commercial and industrial refrigeration equipment onsite and off site." />
            </div>
        </section>
    )
}
export default HomeService
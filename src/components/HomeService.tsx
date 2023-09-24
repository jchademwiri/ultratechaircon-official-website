import { Cog, ThermometerSnowflake, Wrench } from 'lucide-react';
import Card from "./Card"

const HomeService = () => {
    return (
        <section className='my-20'>
            <section className="max-w-7xl py-4 m-auto w-[90%]">
                <div className="grid place-items-center text-center">
                    <h2 className="text-3xl font-semibold" >Air conditioning & refrigeration</h2>
                    <span className="h-[1px] w-28 bg-primary rounded-full my-4" ></span>
                    <p>Repairs of all Air Conditioners and Refrigeration</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 my-5 py-5 " >
                    <Card
                        icon={
                            <Cog className="text-primary" size={50} />
                        }
                        title="Air Conditioners Installation"
                        desc="Installation & Repairs on all types of air-conditioning units including inverters, ducted and cassette. Our repairs services including leak repairs and re-gassing, compressor replacement." />
                    <Card
                        icon={
                            <Wrench className="text-primary" size={50} />
                        }
                        title="Aircon Repair Services"
                        desc="We handle all common faults in air-conditioning, which include aircon not cooling aircon not running, aircon tripping, aircon reporting error code, aircon dripping water and noise." />
                    <Card
                        icon={
                            <ThermometerSnowflake className="text-primary" size={50} />
                        }
                        title="Refrigeration & Coldroom Services"
                        desc="Fridges repairs & installation of cold rooms, chillers and mortuaries. We handle repairs for domestic, commercial and industrial refrigeration equipment onsite and off site." />
                </div>
            </section>
        </section>
    )
}
export default HomeService
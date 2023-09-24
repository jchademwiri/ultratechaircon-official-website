import { ServiceCard } from "@/components"
import { repairs, repairsLink, coldRooms, coldRoomsLink, aircons, airconsLink } from "./services"

const Services = () => {

    return (
        <main>
            <section className="py-5 gap-6 grid md:grid-cols-3 sm:grid-cols-2 max-w-7xl m-auto my-7 w-[90%]" >
                <ServiceCard
                    picture={repairs}
                    title="AIR CONDITIONING REPAIRS"
                    desc="Installation & Repairs on all types of air-conditioning units including inverters, ducted and cassette. Our repairs services including leak repairs and regassing, PCB repairs and replacement."
                    link={repairsLink} />

                <ServiceCard
                    picture={coldRooms}
                    title="REFRIGERATION & COLD ROOMS"
                    desc="We are the experts in all refrigeration services, repairs and the installation of cold rooms, chillers and mortuaries. We handle repairs & installations for for domestic, commercial and industrial refrigeration equipment, onsite and off site."
                    link={coldRoomsLink} />

                <ServiceCard
                    picture={aircons}
                    title="AIRCON INSTALLATION"
                    desc="We help you with professional AC installation for all seasons, be it winter, spring or summer. We only use components and parts from registered distributors to ensure that your system works well and for as long as possible, to give you value."
                    link={airconsLink} />
            </section>
        </main>
    )
}
export default Services
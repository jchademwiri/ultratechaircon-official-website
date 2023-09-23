
import { partnerLogo } from "@/data/images"
import Image from "next/image"
import PartnerCard from "./PartnerCard"
import { randomUUID } from "crypto"

const Partners = () => {
    return (
        <section className="bg-blue-950 py-5">
            <div className="max-w-7xl m-auto w-[90%] gap-5">
                <div className="grid gap-2 grid-cols-6" >
                    {partnerLogo.map(({ logo, alt }) => (
                        <PartnerCard key={randomUUID()} logo={logo} alt={alt} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Partners
import { randomUUID } from "crypto"
import { TLogo } from "@/lib/types"
import PartnerLogo from "./PartnerLogo"
import { plogos } from "@/data/images"

const Partners = () => {
    return (
        <section className="bg-blue-950 py-5">
            <div className="max-w-7xl m-auto w-[90%]">
                <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ">
                    {plogos.map(({ logo, alt }: TLogo) => (
                        <PartnerLogo key={randomUUID()} logo={logo} alt={alt} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Partners
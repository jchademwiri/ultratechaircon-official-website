import { airconImage } from "@/data/images"
import Image from "next/image"
import { ButtonSolid } from "."
import { whatsapp } from "@/data/links"

const ServicesCTA = () => {
    return (
        <section className="my-24" >
            <div className=" grid gap-5 md:grid-cols-2 max-w-7xl  m-auto w-[90%]  bg-gray-800 text-white">
                <div className="grid content-center p-10" >
                    <h3 className="text-2xl font-semibold my-2" >Ultratech Aircon</h3>
                    <span className="h-[1px] w-14 bg-primary rounded-full my-4" ></span>
                    <p className="my-4" >Installation & Repairs on all types of air-conditioning units including inverters, ducted and cassette in Gauteng. Our services include refrigeration repairs and installation of cold rooms.</p>
                    <p className="py-5" >
                        <ButtonSolid href={whatsapp} label="View Services" />
                    </p>
                </div>
                <div>
                    <Image src={airconImage} alt="Samsung Aircon" className="h-full object-cover w-full" />
                </div>
            </div>
        </section>
    )
}
export default ServicesCTA
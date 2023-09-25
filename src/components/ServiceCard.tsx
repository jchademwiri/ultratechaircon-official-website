import Image from "next/image"
import { TService } from "@/lib/types"
import { ButtonSolid } from "."


const ServiceCard = ({ picture, title, desc, link }: TService) => {
    return (
        <div>
            <Image src={picture.logo} alt={picture.alt} className="w-full h-60 object-cover" />
            <h2 className="text-2xl font-medium py-2" >{title}</h2>
            <p className="mt-2 mb-4" > {desc} </p>
            {/* <p className="my-7">
                <ButtonSolid href={link!.href} label={link!.label} />
            </p> */}
        </div>
    )
}
export default ServiceCard



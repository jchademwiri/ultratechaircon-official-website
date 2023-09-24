import Image from "next/image"
import { ButtonSolid } from "."
import { TService } from "@/lib/types"


const ServiceCard = ({ picture, title, desc, link }: TService) => {
    return (
        <div>
            <Image src={picture.logo} alt={picture.alt} className="w-full h-60 object-cover" />
            <h2 className="text-2xl font-medium py-2" >{title}</h2>
            <p className="mt-2 mb-4" > {desc} </p>
            <ButtonSolid href={link.href} label={link.label} />
        </div>
    )
}
export default ServiceCard



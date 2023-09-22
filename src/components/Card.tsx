import { logo } from "@/data/images"
import Image, { StaticImageData } from "next/image"
import { ReactElement } from "react";

type CardProps = {
    icon: ReactElement;
    alt: string;
    title: string;
    desc: string;
}

const Card = ({ icon, alt, title, desc }: CardProps) => {
    return (
        <div className="p-2 grid place-items-center text-center" >
            {/* <Image src={icon} alt={alt} width={50} height={50} /> */}
            {icon}
            <h3 className="py-2 font-semibold text-xl" >{title}</h3>
            <p className="py-2" >{desc}</p>
        </div>
    )
}
export default Card
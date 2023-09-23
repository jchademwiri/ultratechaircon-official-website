
import Image, { StaticImageData } from "next/image"

type LogoProps = {
    logo: StaticImageData;
    alt: string;
}

const PartnerCard = ({ logo, alt }: LogoProps) => {
    return (
        <Image src={logo} alt={alt} className="w-28 h-28 object-contain p-2" />
    )
}
export default PartnerCard
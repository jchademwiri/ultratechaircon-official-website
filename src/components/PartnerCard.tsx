import { TLogo } from "@/data/lib/types"
import Image from "next/image"

const PartnerCard = ({ logo, alt }: TLogo) => {
    return (
        <Image src={logo} alt={alt} className="w-28 h-28 object-contain p-2" />
    )
}
export default PartnerCard
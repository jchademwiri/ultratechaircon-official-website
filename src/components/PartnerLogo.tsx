import { TLogo } from "@/lib/types"
import Image from "next/image"

const PartnerLogo = ({ logo, alt }: TLogo) => {
    return (
        <Image src={logo} alt={alt} className="h-28 object-contain w-full p-2" />
    )
}
export default PartnerLogo
import Image from "next/image";
import type { TLogo } from "@/lib/types";

const PartnerLogo = ({ logo, alt }: TLogo) => {
	return (
		<Image
			src={logo}
			alt={alt}
			width={200}
			height={112}
			className="h-28 w-full object-contain p-2"
		/>
	);
};
export default PartnerLogo;

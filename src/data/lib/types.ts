import { StaticImageData } from "next/image";
import { ReactElement } from "react";

type TCard = {
    icon: ReactElement;
    title: string;
    desc: string;
}

type TPartnerLogo = {
    logo: any;
    alt: string;
}

type TLogo = {
    logo: StaticImageData;
    alt: string;
}

export type { TPartnerLogo, TCard, TLogo }
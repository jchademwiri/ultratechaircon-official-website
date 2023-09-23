import { StaticImageData } from "next/image";
import { ReactElement } from "react";

type TCard = {
    icon: ReactElement;
    title: string;
    desc: string;
}


type TLogo = {
    logo: StaticImageData;
    alt: string;
}

export type { TCard, TLogo }
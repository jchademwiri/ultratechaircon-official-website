import { StaticImageData } from "next/image";
import { ReactElement } from "react";

type TCard = {
  icon: ReactElement;
  title: string;
  description: string;
};

type TService = {
  picture: TLogo;
  title: string;
  desc: string;
  link?: TButton;
};

type TLogo = {
  logo: StaticImageData | string;
  alt: string;
};

type TLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

type TSocialLink = {
  icon: string;
  label: string;
  href: string;
};

type TButton = {
  href: string;
  label: string;
  icon?: ReactElement;
};

export type { TCard, TLogo, TLink, TSocialLink, TButton, TService };

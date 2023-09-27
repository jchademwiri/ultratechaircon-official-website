import { StaticImageData } from "next/image";
import { ReactElement } from "react";

type TCard = {
  icon: ReactElement;
  title: string;
  desc: string;
};

type TService = {
  picture: TLogo;
  title: string;
  desc: string;
  link?: TButton;
};

type TLogo = {
  logo: StaticImageData;
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
};

export type { TCard, TLogo, TLink, TSocialLink, TButton, TService };

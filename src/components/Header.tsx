import { logo } from "@/data/images";
import { navLinks } from "@/data/links";
import { TLink } from "@/lib/types";
import { randomUUID } from "crypto";
import Image from "next/image";
import Link from "next/link";
import { ButtonSolid } from ".";

const Header = () => {
  return (
    <header className="m-auto my-4 flex w-[90%] max-w-7xl items-center justify-between">
      <div className="w-10 sm:w-14">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
      </div>
      <div className=" ">
        <ul className="flex gap-3">
          {navLinks.map(({ label, href, ariaLabel }: TLink) => (
            <Link
              key={randomUUID()}
              className="hidden hover:text-primary sm:block"
              href={href}
              aria-label={ariaLabel}
            >
              <li>{label}</li>
            </Link>
          ))}
          <li>
            <ButtonSolid href="tel:+27693581046" label="069 358 1046" />
           
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;

import { logo } from "@/data/images"
import { navLinks } from "@/data/links"
import { TLink } from "@/lib/types"
import { randomUUID } from "crypto"
import Image from "next/image"
import Link from "next/link"
import { ButtonSolid } from "."


const Header = () => {
  return (
    <header className="flex justify-between max-w-7xl m-auto my-4 w-[90%] items-center">
      <div className="w-10 sm:w-14" >
        <Link href='/'>
          <Image src={logo} alt="Logo" />
        </Link>
      </div>
      <div className=" " >
        <ul className="flex gap-3" >

          {navLinks.map(({ label, href }: TLink) => (
            <Link key={randomUUID()} className="hover:text-primary hidden sm:block" href={href}>
              <li>
                {label}
              </li>
            </Link>
          ))}
          <li>
            <ButtonSolid href='tel:+27737671328' label="0833961172" />
          </li>
        </ul>
      </div>
    </header >
  )
}
export default Header
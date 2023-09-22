import { links } from "@/data"
import { logo } from "@/data/images"
import { randomUUID } from "crypto"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between max-w-7xl m-auto my-4 w-[90%] items-center">
      <div className="w-10 sm:w-14" >
        <Image src={logo} alt="Logo" />
      </div>
      <div className="hidden sm:block " >
        <ul className="flex gap-3" >

          {links.map(({ label, href }) => (
            <Link key={randomUUID()} className="hover:text-primary" href={href}>
              <li>
                {label}
              </li>
            </Link>
          ))}
          <li>
            <Link href='/' className="px-4 py-2 bg-primary rounded-sm font-medium text-xl">0833961172</Link>
          </li>
        </ul>
      </div>
    </header >
  )
}
export default Header
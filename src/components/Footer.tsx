import { links } from "@/data"
import { randomUUID } from "crypto"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex justify-between max-w-7xl m-auto my-7 w-[90%] items-center">
      <div>
        © Copyright 2021. Ultratech Aircon
      </div>
      <div>
        <ul className="flex gap-3" >
          {links.map(({ label, href }) => (
            <Link key={randomUUID()} className="hover:text-primary" href={href}>
              <li>
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  )
}
export default Footer
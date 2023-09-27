"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { icons } from "./data";
import { usePathname } from "next/navigation";
import { logo } from "@/data/images";
import { X } from "lucide-react";
import { TLink } from "@/lib/types";
import { navLinks, uuid } from "@/data/links";
import { ButtonSolid } from "..";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        // setNavBg('#0F172A'); // original bg
        setNavBg("#172554"); // new bg
      } else {
        setShadow(false);
        setNavBg("transparent");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    // main nav
    <>
      <nav
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "shadow-accent fixed top-0 z-[100] h-20 w-full shadow-sm"
            : "fixed top-0 z-[100] h-20 w-full bg-transparent"
        }
      >
        <div className="mx-auto flex h-full  w-[90%] max-w-7xl items-center justify-between">
          <div>
            <Link
              href="/"
              aria-label="Contact with Ultra Tech Aircons"
              passHref
            >
              <Image src={logo} alt="logo" className="h-10 w-full" />
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex">
              {navLinks.map(({ href, label }: TLink) => (
                <li key={uuid()} className="">
                  <Link
                    href={href}
                    passHref
                    className={`${
                      isActive(href)
                        ? "border-b-2 border-primary font-semibold text-primary"
                        : ""
                    } m-2 border-primary p-2 hover:border-b-2`}
                    aria-label="Contact with Ultra Tech Aircons"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <ButtonSolid href="tel:+27737671328" label="0833961172" />
              </li>
            </ul>
            <div onClick={handleNav} className="cursor-pointer md:hidden">
              <svg
                width="26"
                height="18"
                viewBox="0 0 26 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Mobile nav  */}
        <div
          onClick={() => setNav(false)}
          className={
            nav
              ? "bg-accent/70 fixed left-0 top-0 h-screen w-full md:hidden"
              : ""
          }
        >
          <div
            className={
              nav
                ? " bg-accent/90 text-body fixed left-0 top-0 h-screen p-10 duration-500 ease-in md:w-[70%]"
                : "fixed left-[-150%] top-0 p-10 duration-500 ease-in"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <div>
                  <Link
                    href="/"
                    passHref
                    aria-label="Contact with Ultra Tech Aircons"
                  >
                    <Image src={logo} alt="stp logo" className="h-14 w-full" />
                  </Link>
                </div>
                <div
                  onClick={handleNav}
                  className="m-3 cursor-pointer rounded-full bg-primary p-3  text-white shadow-md "
                >
                  <X />
                </div>
              </div>
              <div className="border-accent my-4 border-b">
                <p className="py-4 ">
                  We give you the right temparature on the right time always.
                </p>
                <div className="h-[1px] w-full rounded-full bg-primary"></div>
              </div>
            </div>
            <div className="flex flex-col py-4">
              <ul className="">
                {navLinks.map(({ href, label }: TLink) => (
                  <li
                    key={uuid()}
                    onClick={() => setNav(false)}
                    className="hover:text-accent py-4 text-sm font-semibold"
                  >
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
              <div className="pt-64">
                <p className="tracking-widest">Let&apos;s Connect</p>

                <div className="flex w-full items-center gap-5 py-4  sm:w-[80%]">
                  {icons.map(({ link, icon }) => (
                    <a
                      key={uuid()}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-primary/50 p-3 duration-300 ease-in hover:scale-110"
                      aria-label="Contact with Ultra Tech Aircons"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

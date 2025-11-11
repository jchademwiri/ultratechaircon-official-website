import { TButton } from "@/lib/types";
import Link from "next/link";

const ButtonSolid = ({ url, label }: TButton) => {
  return (
    <Link
      href={url || "#"}
      className="inline-block max-w-fit rounded-sm border border-blue-600 bg-blue-600 px-8 py-4 text-lg font-semibold tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-transparent hover:shadow-lg"
    >
      {label}
    </Link>
  );
};

const ButtonOutline = ({ url, label }: TButton) => {
  return (
    <Link
      href={url || "#"}
      className="inline-block max-w-fit rounded-sm border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold tracking-wide text-white transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 cursor-pointer"
    >
      {label}
    </Link>
  );
};
export { ButtonOutline, ButtonSolid };
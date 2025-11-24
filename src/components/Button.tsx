import { TButton } from "@/lib/types";
import Link from "next/link";

const ButtonSolid = ({ url, label, icon }: TButton) => {
  return (
    <Link
      href={url || "#"}
      className="inline-flex max-w-fit items-center gap-2 rounded-sm border border-blue-600 bg-blue-600 px-8 py-4 text-lg font-semibold tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-transparent hover:shadow-lg"
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {label}
    </Link>
  );
};

const ButtonOutline = ({ url, label, icon }: TButton) => {
  return (
    <Link
      href={url || "#"}
      className="inline-flex max-w-fit items-center gap-2 rounded-sm border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold tracking-wide text-white transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 cursor-pointer"
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {label}
    </Link>
  );
};
export { ButtonOutline, ButtonSolid };
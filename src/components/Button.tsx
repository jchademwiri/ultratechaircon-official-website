import { TButton } from "@/lib/types";
import Link from "next/link";

const ButtonSolid = ({ href, label }: TButton) => {
  return (
    <Link
      href={href}
      className="max-w-fit rounded-sm border border-primary bg-primary px-5 py-3  font-medium tracking-wide text-white hover:border-white hover:bg-transparent"
    >
      {label}
    </Link>
  );
};

const ButtonOutline = ({ href, label }: TButton) => {
  return (
    <Link
      href={href}
      className="max-w-fit rounded-sm border bg-transparent px-5  py-3 font-medium tracking-wide text-white hover:border-primary hover:bg-primary"
    >
      {label}
    </Link>
  );
};
export { ButtonOutline, ButtonSolid };

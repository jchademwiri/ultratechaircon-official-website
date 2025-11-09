import { TCard } from "@/lib/types";

const Card = ({ icon, title, description }: TCard) => {
  return (
    <div className="grid place-items-center p-2 text-center">
      {icon}
      <h3 className="py-2 text-xl font-semibold">{title}</h3>
      <p className="py-2">{description}</p>
    </div>
  );
};
export default Card;

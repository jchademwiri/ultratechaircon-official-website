import { TCard } from "@/lib/types"


const Card = ({ icon, title, desc }: TCard) => {
    return (
        <div className="p-2 grid place-items-center text-center" >
            {icon}
            <h3 className="py-2 font-semibold text-xl" >{title}</h3>
            <p className="py-2" >{desc}</p>
        </div>
    )
}
export default Card
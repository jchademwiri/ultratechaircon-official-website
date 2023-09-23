import { LucideLink } from "lucide-react"
import Link from "next/link"

const NotFound = () => {
    return (
        <section className="max-w-7xl m-auto w-[90%] grid text-center content-center my-10 justify-center " >
            <div>
                <h1 className="text-[200px] font-bold text-gray-500" >404</h1>
                <p className=" my-2">Page Not Found</p>
                <Link href='/' className="text-primary text-2xl my-2" >Go Home</Link>
            </div>
        </section>
    )
}
export default NotFound
import { ButtonOutline } from "."

const CTABanner = () => {
    return (
        <section className="flex flex-col gap-5 justify-center py-10 max-h-[400px] text-white bg-[url('/hero.jpg')] bg-cover bg-fixed bg-center position: relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-950 opacity-80 z-index: 1"></div>
            <div className=" max-w-3xl m-auto w-[90%] text-center position: relative z-index: 2">
                <h3 className="text-3xl font-bold" >
                    In Need of Commercial, Industrial Installation Services in Gauteng?
                </h3>
                <p className="my-4 text-lg text-center" >We offer free site inspection for industrial and commercial projects (terms apply). Get In Touch For Free Assistance.</p>
                <p className="my-10">
                    <ButtonOutline href="/" label="Request Quote" />
                </p>
            </div>
        </section>
    )
}
export default CTABanner
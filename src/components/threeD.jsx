import logodesign from "./logo-desing-images/logo-desing.png";
import sampleimage from "./logo-desing-images/sample1.png"


const threeD = () => {
    return (
        <div className="w-full mx-auto text-2xl text-white text-center max-w-fit pt-9">
            <section className="w-full mx-auto text-2xl text-white text-center max-w-fit" >
                <ul className="grid grid-cols-4 gap-8">
                    {/* Logodesign */}
                    <a href="./logodesign.jsx" className="border rounded-lg py-4 px-10 lg:justify-center">Logo Designs</a>
                    <a href="./uxuidesigns.jsx" className="border rounded-lg py-4 px-10 lg:justify-center">UX/UI Designs</a>
                    <a href="./illustrations.jsx" className="border rounded-lg py-4 px-10 lg:justify-center">Illustrations</a>
                    <a href="./3d-designs.jsx" className="flex border bg-gradient-to-r from-pink-600 to-red-600 rounded-lg px-10 py-4 lg:justify-center">3D designs</a>
                </ul>
            </section>
            <img className="text-center py-11 px-11" src={logodesign}  alt="" />
            <ul className=" grid justify-center lg:grid-cols-3 md:grid-cols-2 py-11 px-5 sm:grid-cols-1 gap-11">
                {/* Logodesign */}
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
                <img src={sampleimage} alt="" />
            </ul>
        </div>
        
    )
}

export default threeD
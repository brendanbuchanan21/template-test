
import { Star } from "lucide-react";

const Home = () => {
    return (
        <>
        <section
            className="relative min-h-[80vh] bg-cover bg-center flex justify-center -z-2"
            style={{ backgroundImage: "url('/background-hero-img.jpg')" }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-[#1B3052]/60 -z-1"></div>
            <div className="flex">
                <div className="max-w-1/2">
                    <h1 className="text-white mt-20">Therapy Telemed:<br></br>Online Counseling Across The Miles</h1>
                    <p className="text-white">Therapy Near Me, Lasting Recovery for You</p>
                    <div className="flex pt-10 gap-6">
                        <button className="bg-[#F0CF79] w-[10rem] rounded min-h-[3rem]">Schedule a Visit</button>
                        <div>
                            <div className="flex">
                                <Star className="text-white"/><Star className="text-white"/><Star className="text-white"/>
                                <Star className="text-white"/><Star className="text-white"/>
                            </div>
                            <p className="text-white">OVER 12 YEARS IN BUSINESS</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="/woman-smiling-img-chair.jpg" alt="" className="mt-15 rounded-full h-[20rem] w-[20rem]"/>
                </div>
            </div>

        </section>
        
        </>
    )
}

export default Home;
import { Plus } from "lucide-react";
import ChildhoodTraumaHTMLTextBlock from "./childhood-trauma-html-text-block";

const ChildhoodTrauma = () => {
    return (
        <>
        <div className="min-h-[80vh] p-8 bg-[#FBF9EB] pt-20 flex">
            <div className="w-1/2">
                <img src="../../public/sleep-img.jpg" alt=""  className="rounded-3xl"/>
            </div>

            <div className="w-1/2 flex flex-col justify-center max-h-140 p-12">
                <div className="flex">
                    <Plus className="text-[#AB9A78]"/>
                    <p className="text-[#AB9A78]">Mental Health Conditions</p>
                </div>

                <div className="mt-5">
                   <h1 className="text-5xl font-butler font-light">Childhood Trauma Therapy</h1>
                    <p className="mt-5 font-space-mono">Childhood trauma doesn't stay in the past—it shapes how you see yourself, relate to others, and navigate the world today. Whether you experienced abuse, neglect, loss, or other adverse childhood experiences, specialized trauma therapy can help you heal. Our evidence-based childhood trauma treatment addresses the lasting impact of early trauma and helps you reclaim your life. Book an appointment today and begin your healing journey.</p>
                </div>
            </div>

        </div>

        <div className="flex justify-center pt-[6rem] pr-10 pl-10 gap-10">
            <div className="w-1/3">
                <div className="bg-amber-100 min-h-[15rem] flex flex-col items-center justify-center gap-6 p-10">
                    <h3 className="text-2xl text-gray-600">Experience Healing With Therapy Telemed</h3>
                    <p className="text-gray-600">Discover the secret to your own recovery</p>
                    <button className="border border-gray-600 p-2 rounded text-gray-600 hover:border-amber-100 cursor-pointer">Book an Appointment</button>
                </div>
            </div>

            <div className="w-2/3">
                <ChildhoodTraumaHTMLTextBlock />
            </div>
        </div>
        </>
    )
}

export default ChildhoodTrauma;

import { Plus } from "lucide-react";
import LowSelfEsteemHTMLTextBlock from "./low-self-esteem-html-text-block";

const LowSelfEsteem = () => {
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
                   <h1 className="text-5xl font-butler font-light">Self-Esteem Therapy</h1>
                    <p className="mt-5 font-space-mono">Low self-esteem affects everything—your relationships, career, mental health, and overall quality of life. If you struggle with self-doubt, negative self-talk, imposter syndrome, or feeling not good enough, therapy can help you build genuine self-worth. Our evidence-based self-esteem therapy addresses the roots of low self-worth and helps you develop authentic confidence. Book an appointment today and begin building the relationship with yourself you deserve.</p>
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
                <LowSelfEsteemHTMLTextBlock />
            </div>
        </div>
        </>
    )
}

export default LowSelfEsteem;

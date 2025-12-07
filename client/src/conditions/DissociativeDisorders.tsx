import { Plus } from "lucide-react";
import DissociativeDisordersHTMLTextBlock from "./dissociative-disorders-html-text-block";

const DissociativeDisorders = () => {
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
                   <h1 className="text-5xl font-butler font-light">Dissociative Disorders Therapy</h1>
                    <p className="mt-5 font-space-mono">Dissociative disorders can make you feel disconnected from yourself, your memories, and reality. Whether you're experiencing dissociative identity disorder, depersonalization, derealization, or dissociative amnesia, specialized treatment can help you integrate your experiences and reconnect with yourself. Our evidence-based dissociative disorders therapy addresses the root causes and helps you reclaim a sense of wholeness. Book an appointment today and begin your journey toward integration and healing.</p>
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
                <DissociativeDisordersHTMLTextBlock />
            </div>
        </div>
        </>
    )
}

export default DissociativeDisorders;

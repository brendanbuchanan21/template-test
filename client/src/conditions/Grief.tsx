import { Plus } from "lucide-react";
import GriefHTMLTextBlock from "./grief-html-text-block";

const Grief = () => {
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
                   <h1 className="text-5xl font-butler font-light">Grief & Loss Counseling</h1>
                    <p className="mt-5 font-space-mono">Grief is one of life's most painful experiences, and there's no 'right' way to grieve or timeline for healing. Whether you're mourning the death of a loved one, processing complicated grief, or struggling with losses beyond death, compassionate grief therapy provides support and guidance through your unique journey. Our specialized bereavement therapy helps you process loss, honor your loved one, and find meaning while moving forward. If grief feels overwhelming or you're stuck in painful emotions, Healing Speak can help. Book an appointment today for understanding, support, and therapy for grief and loss.</p>
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
                <GriefHTMLTextBlock />
            </div>
        </div>
        </>
    )
}

export default Grief;

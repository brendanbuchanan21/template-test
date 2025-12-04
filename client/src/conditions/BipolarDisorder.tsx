import { Plus } from "lucide-react";
import BipolarDisorderHTMLTextBlock from "./bipolar-disorder-html-text-block";

const BipolarDisorder = () => {
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
                   <h1 className="text-5xl font-butler font-light">Bipolar Disorder Therapy</h1>
                    <p className="mt-5 font-space-mono">Living with bipolar disorder means navigating extreme mood swings from highs (mania or hypomania) to devastating lows (depression). Whether you're experiencing racing thoughts and impulsive behavior during manic episodes or struggling through periods of deep depression, specialized bipolar therapy can help you achieve stability and build a fulfilling life. Our evidence-based bipolar disorder treatment combines therapeutic interventions that help you manage symptoms, recognize early warning signs, and develop coping strategies. If mood swings are disrupting your relationships, work, and well-being, Healing Speak can help. Book an appointment today for expert therapy for bipolar disorder.</p>
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
                <BipolarDisorderHTMLTextBlock />
            </div>
        </div>
        </>
    )
}

export default BipolarDisorder;

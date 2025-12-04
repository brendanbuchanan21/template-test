import { Plus } from "lucide-react";
import SubstanceUseHTMLTextBlock from "./substance-use-html-text-block";

const SubstanceUse = () => {
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
                   <h1 className="text-5xl font-butler font-light">Substance Use Disorder Therapy</h1>
                    <p className="mt-5 font-space-mono">Recovery from substance use disorders is possible with the right support and evidence-based treatment. Whether you're struggling with alcohol, drugs, or other addictive behaviors, specialized substance abuse therapy addresses both the addiction and the underlying issues that fuel it. Our addiction treatment approach combines motivational interviewing, trauma-focused therapy, and proven techniques for lasting recovery. With 11 years of experience in substance abuse treatment, we understand the challenges you face. If addiction is controlling your life, Healing Speak can help. Book an appointment today for compassionate, effective therapy for addiction.</p>
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
                <SubstanceUseHTMLTextBlock />
            </div>
        </div>
        </>
    )
}

export default SubstanceUse;

import { ArrowRight } from "lucide-react";
import ServicesTemplateServiceHtmlBlock from "./template-services-html-block";

const TemplateService = () => {

    return (
        <div className="flex">
            {/* Sidebar Section */}
            <div className="w-1/3 flex mt-[5rem] flex-col gap-10 items-center">
                <div className="bg-yellow-100 w-2/3 rounded-xl p-6 flex flex-col gap-3 items-center">
                    <p>Our Services</p>
                    <div className="flex flex-col w-full gap-2">
                    <div className="flex items-center justify-between">
                        <p>Service 1</p>
                        <ArrowRight />
                    </div>
                    <div className="flex items-cente justify-between">
                        <p>Service 2</p>
                        <ArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Service 3</p>
                        <ArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Service 4</p>
                        <ArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Service 5</p>
                        <ArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Service 6</p>
                        <ArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Service 7</p>
                        <ArrowRight />
                    </div>
                    </div>

                    </div>

                    {/* Sidebar form */}
                    <div className="border border-gray-300 w-2/3 p-6 flex flex-col gap-4 justify-center items-center rounded-xl">
                        <p>Get in touch:</p>
                        <form action="">
                            <input type="text" placeholder="Name" className="border border-gray-300 mb-2 w-full p-2 rounded-lg"/>
                            <input type="email" placeholder="Email" className="border border-gray-300 mb-2 w-full p-2 rounded-lg"/>
                            <textarea placeholder="Message" className="border border-gray-300 mb-2 w-full p-2 rounded-lg"></textarea>
                            <button type="submit" className="bg-[#F0CF79] text-black px-4 py-2 rounded w-full">Submit</button>
                        </form>
                    </div>
            </div>

            {/* Main content area */}
            <div className="w-2/3 mt-[5rem] pr-5 pl-5">
                <div className="w-3/4">
                    <img src="/little-kid-frusturated.jpg" alt="" className="rounded-3xl" />
                    <ServicesTemplateServiceHtmlBlock />
                    <img src="/little-kid-frusturated.jpg" alt="" className="rounded-3xl mt-6" />
                </div>
                
            </div>
        </div>
    )
}

export default TemplateService;
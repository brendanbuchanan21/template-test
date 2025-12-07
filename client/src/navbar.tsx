import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const Navbar = () => {
    const [showConditionsDropdown, setShowConditionsDropdown] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);

    const services = [
        { name: 'Individual Therapy', path: '/services/individual-therapy' },
        { name: 'Couples Counseling', path: '/services/couples-counseling' },
        { name: 'Adolescent Mental Health', path: '/services/adolescent-mental-health' },
        { name: 'Telehealth Services', path: '/services/telehealth-services' },
    ];

    const conditions = [
        { name: 'Adjustment Disorders', path: '/conditions/adjustment-disorders' },
        { name: 'Agoraphobia', path: '/conditions/agoraphobia' },
        { name: 'Anger Management', path: '/conditions/anger-management' },
        { name: 'Anxiety', path: '/conditions/anxiety' },
        { name: 'Attachment Issues', path: '/conditions/attachment-issues' },
        { name: 'Bipolar Disorder', path: '/conditions/bipolar-disorder' },
        { name: 'Body Dysmorphic Disorder', path: '/conditions/body-dysmorphic' },
        { name: 'Childhood Trauma', path: '/conditions/childhood-trauma' },
        { name: 'Depression', path: '/conditions/depression' },
        { name: 'Dissociative Disorders', path: '/conditions/dissociative-disorders' },
        { name: 'Grief & Loss', path: '/conditions/grief' },
        { name: 'LGBTQIA+ Mental Health', path: '/conditions/lgbtqia-mental-health' },
        { name: 'Life Transitions', path: '/conditions/life-transitions' },
        { name: 'Low Self-Esteem', path: '/conditions/low-self-esteem' },
        { name: 'Narcissistic Abuse', path: '/conditions/narcissistic-abuse' },
        { name: 'OCD', path: '/conditions/ocd' },
        { name: 'Oppositional Defiant Disorder', path: '/conditions/oppositional-defiant' },
        { name: 'Panic Disorder', path: '/conditions/panic-disorder' },
        { name: 'Personality Disorders', path: '/conditions/personality-disorders' },
        { name: 'PTSD & Trauma', path: '/conditions/ptsd' },
        { name: 'Schizophrenia', path: '/conditions/schizophrenia' },
        { name: 'Separation Anxiety', path: '/conditions/separation-anxiety' },
        { name: 'Sexual Abuse', path: '/conditions/sexual-abuse' },
        { name: 'Sleep', path: '/conditions/sleep' },
        { name: 'Stress Management', path: '/conditions/stress-management' },
        { name: 'Substance Use', path: '/conditions/substance-use' },
        { name: "Women's Mental Health", path: '/conditions/womens-mental-health' },
    ];

    return (
        <nav className="flex pl-15 pr-15 h-32 border border-gray-200">
            <div className="flex items-center justify-center align-middle">
                <Link to="/">
                    <img src="/therapy-telemed-img.png" alt=""  className='w-20 h-20'/>
                </Link>
            </div>

            <div className="flex m-auto gap-10 relative">
                <div className='flex justify-center items-center'>
                    <p>About</p>
                    <ChevronDown />
                </div>
                
                <div
                    className="relative"
                    onMouseEnter={() => setShowServicesDropdown(true)}
                    onMouseLeave={() => setShowServicesDropdown(false)}
                >
                    <div className='flex justify-center items-center cursor-pointer'>
                        <p>Services</p>
                        <ChevronDown />
                    </div>

                    {showServicesDropdown && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-2xl min-w-[280px] p-4">
                                {services.map((service) => (
                                    <Link
                                        key={service.path}
                                        to={service.path}
                                        className="block px-4 py-3 hover:bg-[#FBF9EB] rounded-md text-left transition-colors duration-150"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setShowConditionsDropdown(true)}
                    onMouseLeave={() => setShowConditionsDropdown(false)}
                >
                    <div className='flex justify-center items-center cursor-pointer'>
                    <p>Conditions</p>
                    <ChevronDown />
                </div>


                    {showConditionsDropdown && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-2xl min-w-[800px] p-6">
                                <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                                    {conditions.map((condition) => (
                                        <Link
                                            key={condition.path}
                                            to={condition.path}
                                            className="block px-4 py-3 hover:bg-[#FBF9EB] rounded-md text-left text-sm transition-colors duration-150"
                                        >
                                            {condition.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex justify-center items-center'>
                    <p>Situational Issues</p>
                    <ChevronDown />
                </div>
                <div className='flex justify-center items-center'>
                    <p>Treatments</p>
                    <ChevronDown />
                </div>
            </div>

            {/* this is the section for the ctas in the nav */}
            <div className='flex items-center'>
                <button className="border border-gray-300 text-black px-4 py-2 rounded mr-4 hover:bg-blue-600 cursor-pointer">Book Appointment</button>
                <button className="bg-[#F0CF79] text-black px-4 py-2 rounded hover:bg-green-600 cursor-pointer">Contact Us</button>
            </div>
        </nav>
    )
}
export default Navbar;

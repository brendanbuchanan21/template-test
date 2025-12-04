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
        { name: 'Sleep', path: '/conditions/sleep' },
        { name: 'Anxiety', path: '/conditions/anxiety' },
        { name: 'Bipolar Disorder', path: '/conditions/bipolar-disorder' },
        { name: 'Depression', path: '/conditions/depression' },
        { name: 'Grief & Loss', path: '/conditions/grief' },
        { name: 'Narcissistic Abuse', path: '/conditions/narcissistic-abuse' },
        { name: 'OCD', path: '/conditions/ocd' },
        { name: 'Panic Disorder', path: '/conditions/panic-disorder' },
        { name: 'Personality Disorders', path: '/conditions/personality-disorders' },
        { name: 'PTSD & Trauma', path: '/conditions/ptsd' },
        { name: 'Substance Use', path: '/conditions/substance-use' },
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
                        <div className="absolute top-full left-0 pt-2 z-50">
                            <div className="bg-white border border-gray-300 rounded shadow-lg min-w-[150px]">
                                {services.map((service) => (
                                    <Link
                                        key={service.path}
                                        to={service.path}
                                        className="block px-4 py-2 hover:bg-gray-100 text-left"
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
                        <div className="absolute top-full left-0 pt-2 z-50">
                            <div className="bg-white border border-gray-300 rounded shadow-lg min-w-[150px]">
                                {conditions.map((condition) => (
                                    <Link
                                        key={condition.path}
                                        to={condition.path}
                                        className="block px-4 py-2 hover:bg-gray-100 text-left"
                                    >
                                        {condition.name}
                                    </Link>
                                ))}
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

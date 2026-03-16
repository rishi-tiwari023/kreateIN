import React from "react";
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero=()=>{
    const navigate = useNavigate();
    return (
        <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
            <div className="text-center mb-6">
                <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">Create amazing content <br/> with
                <span  className="text-primary"> AI tools</span></h1>
                <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">KreateIN is a platform that uses AI to help you create amazing content. With KreateIN, you can create amazing content with AI tools.</p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
                <button onClick={()=> navigate('/ai')} className="px-6 py-3 bg-primary text-white rounded-full">Start Creating now</button>
                <button className="px-6 py-3 bg-white text-primary rounded-full">Watch Demo</button>
            </div>
            <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600'>
                <img src={assets.user_group} alt="" className='h-8'/> Trusted by a lot of people
            </div>
        </div>
    )
}
export default Hero
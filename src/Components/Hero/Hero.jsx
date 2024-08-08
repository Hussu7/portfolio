import React from 'react'
import Button from '../Button'

const Hero = () => {
    return (
        <div className="w-full h-screen bg-gray-800 px-96 py-16 flex items-center" >
            <div className=' w-full flex justify-between grid-cols-2 py-4'>
                <div className='Hero-txt  flex flex-col gap-5 '>
                    <h1>Hi i'm</h1>
                    <h1 className='font-bold text-6xl '>Husen Basnet</h1>
                    <h1 className='font-bold text-3xl '>Web Developer</h1>
                   <div className='flex gap-4 mt-3'>
                   <Button text="View Projects"/>
                   <Button text="Download CV"/>
                   </div>
                </div>
                <div className='Hero-img flex items-end'>
                    <img width={340} src="https://scontent.fktm1-1.fna.fbcdn.net/v/t1.6435-1/62243999_2411180042538472_1469941037953712128_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeEF3_ldj9cSxdhskWmgVedUXJjU47q3WstcmNTjurdayxgsHB82ZAVuld_qbGGca_f-XbGzhdNJKbcZTSGNGMbM&_nc_ohc=apTN9R3njHgQ7kNvgG5QHvd&_nc_ht=scontent.fktm1-1.fna&oh=00_AYD6jA1FOjKEVfK0JIQMqZ3yuwRwmgqmuG9vdXRuioyaRg&oe=66DC1216" alt="" />
                    
                </div>
            </div>

        </div>
    )
}

export default Hero
import React from 'react'
import Button from '../Button'

const Navbar = () => {
    return (
        <nav className="h-24 w-full bg-black px-96 flex flex-row items-center justify-between absolute top-0">
            <div className="font-bold text-2xl">
                <h1>Mr<span className="text-yellow-500">.</span>Hussu<span className="text-yellow-500">7</span> </h1>

            </div>
            <ul className="bg-yellow-500 font-bold text-black px-12 py-4 flex rounded-3xl gap-12 ">
                <li>Home</li>
                <li>About</li> 
                <li>Skills</li>
                <li>Projects</li>

            </ul>
            <Button text="Contact me" />


        </nav>
    )
}

export default Navbar
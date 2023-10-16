import React from "react";
import { BiSolidLogInCircle } from 'react-icons/bi'

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

export const Button: React.FC<ButtonInterface> = ({ title, ...props }) => {
    return (
        <button 
            className="
                uppercase 
                font-thin 
                text-sm 
                bg-primary-red 
                text-white 
                py-1 pl-10 
                shadow-md 
                rounded-md 
                hover:bg-primary-yellow duration-500 hover:text-gray-600 
                flex flex-row items-center"
            {...props}>
            {title}
            <BiSolidLogInCircle className="ml-6 text-xl mr-2" />
        </button>
    )
}
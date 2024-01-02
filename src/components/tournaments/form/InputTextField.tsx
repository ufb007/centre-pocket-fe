import React from "react";

interface InputTextInterface extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
    name: string;
    value: string | number;
    error?: string;
}

export const InputTextField: React.FC<InputTextInterface> = ({ label, type, name, value, error, ...props }) => {
    return (
        <div className="flex">
            <label className="font-thin text-xl pr-5">{ label }</label>
            <div className="flex flex-col">
                <input 
                    type={type} 
                    name={name}
                    value={value}
                    {...props}
                    className="font-thin 
                        h-8 
                        px-2 
                        py-2 
                        bg-gray-50 
                        text-gray-500 
                        shadow-inner 
                        shadow-gray-300" />
                {error?.length !== 0 ?
                    <span>{error}</span>
                : ''}
            </div>
        </div>
    );
}
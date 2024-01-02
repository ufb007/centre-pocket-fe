import React from "react";

interface TextAreaInterface extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
    value: string | number;
    error?: string;
}

export const InputTextAreaField: React.FC<TextAreaInterface> = ({ label, name, value, error, ...props }) => {
    return (
        <div className="flex">
            <label className="font-thin text-xl pr-5">{label}</label>
            <div className="flex flex-col">
                <textarea 
                    name={name} 
                    value={value} 
                    {...props} 
                    className="font-thin 
                        px-4 
                        py-2 
                        bg-gray-50 
                        text-gray-500 
                        shadow-inner 
                        shadow-gray-300"></textarea>
                    {error?.length !== 0 ?
                        <span>{error}</span>
                    : ''}
            </div>
        </div>
    );
}
import React from "react";
import { FaArrowAltCircleDown } from 'react-icons/fa'

interface SelectFieldInterface extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    value: string | number;
    options?: { name: string, value: string }[];
    numbers?: number[];
    error?: string;
}

export const SelectField: React.FC<SelectFieldInterface> = ({ label, name, value, options, numbers, error, ...props }) => {
    return (
        <div className="flex">
            <label className="font-thin text-xl pr-5">{ label }</label>
            <div className="flex flex-col">
                <select name={ name } value={ value } {...props} className="font-thin px-3 py-2 bg-gray-50 text-gray-500 shadow-inner shadow-gray-300 relative">
                    {options?.map(({ name, value }) => {
                        return (<option key={ name } value={ name }>{ value }</option>);
                    })}

                    {numbers?.map((num: number) => {
                        return (<option key={num} value={num}>{num}</option>);
                    })}
                </select>
                {error?.length !== 0 ?
                    <span>{error}</span>
                : ''}
            </div>
        </div>
    );
}
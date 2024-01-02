import React, { useState } from "react";
import ReactDatePicker from 'react-datepicker';
import { FormInterface } from "../interfaces/CreateNewTournament";
import 'react-datepicker/dist/react-datepicker.module.css';

export const DatePicker: React.FC<{ setFormData: React.Dispatch<React.SetStateAction<FormInterface>> }> = ({ setFormData }) => {
    const [startDate, setStartDate] = useState<{ date: string, time: string }>({
        date: '0000-00-00',
        time: '00:00:00'
    });

    const [origDate, setOrigDate] = useState<any>(new Date());

    const updateStartDateSelectDay = (date: any) => {
        const getDate = dateFormat(date, 'date');

        setStartDate({date: getDate, time: startDate.time });
        setFormData(prevData => ({ ...prevData, start_date: `${getDate} ${startDate.time}` }));
    }

    const updateStartSelectTime = (date: any) => {
        const getTime = dateFormat(date);

        setStartDate({date: startDate.date, time: getTime });
        setFormData(prevData => ({ ...prevData, start_date: `${startDate.date} ${getTime}` }));
    }

    const dateFormat = (date: string, type: string = "time"): string => {
        setOrigDate(date);
        const formattedDate = new Date(date);

        if (type === 'date') {
            const year = formattedDate.getFullYear();
            const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
            const day = String(formattedDate.getDate()).padStart(2, '0');

            return `${year}-${month}-${day}`;
        }

        const hours = String(formattedDate.getHours()).padStart(2, '0');
        const minutes = String(formattedDate.getMinutes()).padStart(2, '0');
        const seconds = String(formattedDate.getSeconds()).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div>
            <ReactDatePicker
                value={`${startDate.date} ${startDate.time}`}
                selected={origDate}
                showTimeSelect
                onSelect={(date) => updateStartDateSelectDay(date)}
                onChange={(date) => updateStartSelectTime(date) } />
        </div>
    );
}
import React, { ChangeEvent, useState } from "react"
import { TournamentModel } from "../../models/Tournament"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';

interface GameTypeInterface {
    name: string
    value: string
}

interface FormInterface {
    name: string
    description: string
    game_type: '9ball' | '8ball' | '10ball' | 'straight';
    type: 'single' | 'double' | 'round_robin';
    max_players: 8 | 16 | 32 | 64 | 128;
    race_to: number;
    cover_image: string;
    start_date: string;
}

export const CreateNew: React.FC = () => {
    const tournament = new TournamentModel();

    const [gameType, setGameType] = useState<GameTypeInterface[]>([
        { name: '9ball', value: tournament.getGameType('9ball') },
        { name: '8ball', value: tournament.getGameType('8ball') },
        { name: '10ball', value: tournament.getGameType('10ball') },
        { name: 'straight', value: tournament.getGameType('straight') }
    ]);
    const [matchType, setMatchType] = useState<GameTypeInterface[]>([
        { name: 'single', value: tournament.getTournamentType('single') },
        { name: 'double', value: tournament.getTournamentType('double') },
        { name: 'round_robin', value: tournament.getTournamentType('round_robin') }
    ]);
    const [maxPlayers, setMaxPlayers] = useState<number[]>([8, 16, 32, 64, 128]);
    const [formData, setFormData] = useState<FormInterface>({
        name: '',
        description: '',
        game_type: '9ball',
        type: 'single',
        max_players: 8,
        race_to: 0,
        cover_image: '',
        start_date: ''
    });

    const updateFormData = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    }

    const updateFormDataTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    }

    const updateFormDataSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    }

    const updateStartDate = (date: any) => {
        const formattedDate = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date);
        console.log('Show date - ', formattedDate)
    }

    return (
        <div className="flex flex-col sm:w-[75%] md:w-[50%] w-full">
            <h1 className="text-center text-3xl">Create new tournament</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={updateFormData} />
                </div>
                <div>
                    <label htmlFor="">Description:</label>
                    <textarea name="description" onChange={updateFormDataTextArea} value={formData.description}></textarea>
                </div>
                <div>
                    <label htmlFor="">Game Type:</label>
                    <select name="game_type" value={formData.game_type} onChange={updateFormDataSelect}>
                        {gameType.map(({ name, value }) => {
                            return (
                                <option key={name} value={name}>{ value }</option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="">Type:</label>
                    <select name="type" value={formData.type} onChange={updateFormDataSelect}>
                        {matchType.map(({ name, value }) => {
                            return (
                                <option key={name} value={name}>{ value }</option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="">Maximum players:</label>
                    <select name="max_players" value={formData.max_players} onChange={updateFormDataSelect}>
                        {maxPlayers.map(num => {
                            return (
                                <option key={num} value={num}>{ num }</option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="">Race to:</label>
                    <input type="input" name="race_to" value={formData.race_to} onChange={updateFormData} />
                </div>
                <div>
                    <label htmlFor="">Cover image:</label>
                    <input type="text" name="cover_image" value={formData.cover_image} onChange={updateFormData} />
                </div>
                <div>
                    <label htmlFor="">Start date:</label>
                    <DatePicker showTimeSelect onChange={(date) => updateStartDate(date) } />
                </div>
            </form>
        </div>
    )
}
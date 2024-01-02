import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { TournamentModel } from "../../models/Tournament"
import { DatePicker } from "../../components/DatePicker";
import { FormInterface } from "../../interfaces/CreateNewTournament";
import { Button } from "../../components/tournaments/Button";
import { InputTextField } from "../../components/tournaments/form/InputTextField";
import { SelectField } from "../../components/tournaments/form/SelectField";
import { InputTextAreaField } from "../../components/tournaments/form/InputTextAreaField";
import yup, { object, string, number, date, InferType } from 'yup';

interface GameTypeInterface {
    name: string
    value: string
}

const initialFormData: FormInterface = {
    name: '',
    description: '',
    game_type: '9ball',
    type: 'single',
    max_players: 8,
    race_to: 0,
    cover_image: '',
    start_date: '0000-00-00 00:00:00'
}

const schema = object().shape({
    name: string().required('Name can not be empty'),
    description: string().required('Description can not be empty'),
    cover_image: string().required('Cover image can not be empty'),
    race_to: number().required("Field can not be empty").min(3, "Number must be 3 or more")
});

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
    const [formData, setFormData] = useState<FormInterface>(initialFormData);
    const [formErrors, setFormErrors] = useState({
        name: '',
        description: '',
        cover_image: '',
        race_to: ''
    });

    const updateFormData = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value });

        await schema
            .validateAt(name, formData)
            .then(() => setFormErrors({...formErrors, [name]: ''}))
            .catch((error) => setFormErrors({...formErrors, [name]: error.message }));
    }

    const updateFormDataTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value }));
    }

    const updateFormDataSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value }));
    }

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        for (const name in formErrors) {
            setFormErrors(prevData => ({ ...prevData, [name]: '' }));
        }

        try {
            await schema
                .validate(formData, {abortEarly: false})
                .then(() => {
                    console.log('SUbmitted values - ', formData)
                })
                .catch((validationErrors: yup.ValidationError) => {
                    validationErrors.inner.forEach((error) => {
                        const name: any = error.path;
                        setFormErrors(prevData => ({ ...prevData, [name]: error.message }))
                    });
                });

        } catch (validationErrors) {
            console.log('Show errors - ', validationErrors);
        }
    }

    return (
        <div className="flex flex-col sm:w-[75%] md:w-[50%] w-full">
            <h1 className="text-center text-3xl">Create new tournament</h1>
            <form>
                <InputTextField label="Name:" type="text" name="name" value={formData.name} error={formErrors.name} onChange={updateFormData} />
                <InputTextAreaField label="Description:" name="description" value={formData.description} error={formErrors.description} onChange={updateFormDataTextArea} />
                <SelectField label="Game Type:" name="game_type" value={formData.game_type} options={gameType} onChange={updateFormDataSelect} />
                <SelectField label="Type:" name="type" value={formData.type} options={matchType} onChange={updateFormDataSelect} />
                <SelectField label="Maximum players:" name="max_players" value={formData.max_players} numbers={maxPlayers} onChange={updateFormDataSelect} />
                <InputTextField label="Race to:" name="race_to" type="number" value={formData.race_to} error={formErrors.race_to} onChange={updateFormData} />
                <InputTextField label="Cover image:" type="text" name="cover_image" value={formData.cover_image} error={formErrors.cover_image} onChange={updateFormData} />
                <div className="flex">
                    <label htmlFor="" className="font-thin text-xl pr-5">Start date:</label>
                    <DatePicker setFormData={setFormData} />
                </div>

                <Button title="Create Tournament" onClick={onFormSubmit} />
            </form>
        </div>
    )
}

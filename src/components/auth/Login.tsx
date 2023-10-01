import { useEffect, useState } from "react";
import { Button } from "../Button";

export const Login = ({loginCardDisplay}:any) => {
    const [cardDisplay, setCardDisplay] = useState(false);

    const onFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value)
    }

    const closeCardLogin = () => {
        setCardDisplay(false);
    }

    useEffect(() => {
        setCardDisplay(loginCardDisplay)
        console.log('show this here')
    })

    return (
        <div className="flex flex-row justify-center items-center h-full">
            <div onClick={closeCardLogin} className={`bg-black opacity-30 w-full h-full absolute top-0 left-0 z-10 transition duration-1000 ${cardDisplay ? 'block' : 'hidden'}`}></div>
            <div className={`authCard ${cardDisplay ? 'cardFlip' : ''}`}>
                <form onSubmit={onFormSubmit} className={`${cardDisplay ? 'cardFlip' : ''}`}>
                    <h4 className="border-b-[1px] pb-1 mb-2 text-lg">Log In</h4>
                    <div className="formBox my-5 flex flex-row items-center justify-between">
                        <label htmlFor="email" className="mr-2 text-lg">Email:</label>
                        <input id="email" type="text" onChange={onInputChange} placeholder="E-Mail" />
                    </div>
                    <div className="formBox my-5 flex flex-row items-center justify-between mb-10">
                        <label htmlFor="password" className="mr-2 text-lg">Password:</label>
                        <input id="password" type="password" placeholder="Password" />
                    </div>

                    <div className="flex flex-row justify-end">
                        <Button name="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}
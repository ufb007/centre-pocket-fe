import { useEffect, useState } from "react"
import { Login } from "./auth/Login";
import axios from "axios";

export const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [onLoginCard, setOnLoginCard] = useState(false);

    const loginLinkClick = () => {
        setOnLoginCard(true)
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/summary').then((response) => {
            console.log('Show response - ', response)
        })
    }, [])

    return (
        <>
            <Login {...{loginCardDisplay: onLoginCard}} />
            <header>
                <div className="topBar bg-primary flex justify-center items-center z-1">
                    <div className="w-8/12">
                        {!isLoggedIn ?
                            <ul className="text-secondary flex flex-row justify-end relative overflow-visible">
                                <li className="relative over overflow-visible">
                                    <span onClick={loginLinkClick}>Log In</span>
                                </li>
                                <li className="relative">
                                    <span>Sign Up</span>
                                </li>
                            </ul>
                            :
                            <ul className="text-secondary flex flex-row justify-end">
                                <li>My Account</li>
                            </ul>
                        }
                    </div>
                </div>
                <div className="bottomBar bg-white border-b border-gray-300 flex justify-center z-0">
                    <div className="flex flex-row justify-between items-center w-8/12">
                        <div className="logo">
                            Logo Goes here
                        </div>
                        <ul className="menu">
                            <li>Tournaments<div></div></li>
                            <li>Players<div></div></li>
                            <li>Fixtures<div></div></li>
                            <li>Contact<div></div></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
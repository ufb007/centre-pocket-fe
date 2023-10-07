import { useEffect, useState } from "react"
import { Login } from "./auth/Login";
import { updateLoginActive } from "../features/auth/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const dispatch = useDispatch();
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate()

    const loginLinkClick = () => {
        dispatch(updateLoginActive(true));
    }
    
    useEffect(() => {
        console.log('HEADER SECTION')
    }, [])

    return (
        <>
            <Login />
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
                            <li onClick={() => navigate("/tournaments")}>Tournaments<div></div></li>
                            <li onClick={() => navigate("/players")}>Players<div></div></li>
                            <li onClick={() => navigate("/fixtures")}>Fixtures<div></div></li>
                            <li onClick={() => navigate("/contact")}>Contact<div></div></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
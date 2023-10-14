import { useEffect, useState } from "react"
import { Login } from "./auth/Login";
import { updateLoginActive } from "../features/auth/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

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
                <div className="topBar bg-primary md:flex justify-center items-center z-1 hidden">
                    <div className="w-8/12 font-thin">
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
                <div className="bottomBar bg-white border-b border-gray-300 flex sm:justify-center z-0">
                    <div className="flex flex-row justify-between items-center w-full ml-5 md:w-8/12 md:m0">
                        <div className="logo">
                            Logo Goes here
                        </div>
                        <div className="hidden md:block">
                            <ul className="menu font-thin">
                                <li onClick={() => navigate("/tournaments/upcoming")}>Tournaments<div></div></li>
                                <li onClick={() => navigate("/players")}>Players<div></div></li>
                                <li onClick={() => navigate("/fixtures")}>Fixtures<div></div></li>
                                <li onClick={() => navigate("/contact")}>Contact<div></div></li>
                            </ul>
                        </div>
                        <div className="burger md:hidden py-5 pr-5">
                            <CiMenuBurger className="text-4xl"></CiMenuBurger>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
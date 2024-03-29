import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface StatusInterface {
    status: string
}

type TypeMenu = {
    key: number,
    name: string,
    link: string
}

export const Menu = (status: StatusInterface) => {
    const [menu, setMenu] = useState<TypeMenu[]>([
        { key: 1, name: 'Upcoming', link: 'upcoming' },
        { key: 2, name: 'Active', link: 'active' },
        { key: 3, name: 'Finished', link: 'finished' }
    ])
    const navigate = useNavigate();

    return (
        <div className="flex flex-row justify-center">
            <div className="mini-menu flex flex-wrap justify-center py-3 px-10 bg-secondary text-white rounded-full rounded-t-none">
                <ul className="flex flex-row text-sm">
                    {menu.map(({ key, name, link }: TypeMenu) => {
                        return (
                            <div className="menu-text flex flex-row items-center" key={key}>
                                <li className={`cursor-pointer hover:text-primary-yellow duration-500 ${status.status === link ? 'text-primary-yellow' : ''}`} onClick={()=> navigate(link)}>{ name }</li>
                                <li className="mx-3">::</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
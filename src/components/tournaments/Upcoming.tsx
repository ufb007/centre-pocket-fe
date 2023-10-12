import { useState } from "react"
import { TournamentInterface } from "../../interfaces/Tournament";
import { TournamentCard } from "./TournamentCard";

type TypeCountDown = {
    count: number,
    name: string
}

export const Upcoming = (content: TournamentInterface) => {
    const [countDown, setCountDown] = useState<TypeCountDown[]>([
        { count: 0, name: 'Days'},
        { count: 0, name: 'Hours'},
        { count: 0, name: 'Minutes'},
        { count: 0, name: 'Seconds'}
    ]);

    return (
        <TournamentCard {...content}>
            <div className="countdown w-full border-t-[1px] border-gray-200">
                <ul className="flex flex-row text-center text-gray-400 uppercase font-thin font-roboto-condensed">
                    {countDown.map(({ count, name }: TypeCountDown) => {
                        return (
                            <li className="w-[25%] py-5 border-r-[1px] last:border-r-0">
                                <div className="count w-full text-2xl">{ count }</div>
                                <div className="name w-full text-xs">{ name }</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </TournamentCard>
    )
}
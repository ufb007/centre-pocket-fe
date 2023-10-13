import { useState } from "react"
import { TournamentInterface } from "../../interfaces/Tournament";
import { TournamentCard } from "./TournamentCard";

type TypeCountDown = {
    key: number,
    count: number,
    name: string
}

export const Upcoming = (content: TournamentInterface) => {
    const [countDown, setCountDown] = useState<TypeCountDown[]>([
        { key: 1, count: 0, name: 'Days'},
        { key: 2, count: 0, name: 'Hours'},
        { key: 3, count: 0, name: 'Minutes'},
        { key: 4, count: 0, name: 'Seconds'}
    ]);

    return (
        <TournamentCard {...content}>
            <div className="countdown w-full border-t-[1px] border-gray-200" key={content.id}>
                <ul className="flex flex-row text-center text-gray-400 uppercase font-thin font-roboto-condensed">
                    {countDown.map(({ key, count, name }: TypeCountDown) => {
                        return (
                            <li className="w-[25%] py-5 border-r-[1px] last:border-r-0" key={key}>
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
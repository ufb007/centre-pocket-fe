import { TournamentInterface } from "../../interfaces/Tournament"

type Props = {
    children: string | JSX.Element | JSX.Element[] | React.JSX.Element
}

export const TournamentCard = ({children, id, uuid, name, cover_image }: TournamentInterface & Props) => {
    return (
        <div className="cardTournament w-full shadow-md mb-10" key={id}>
            <div className="head py-2 bg-primary-red text-white text-center text-lg uppercase font-thin">{ name }</div>
                <div className="content bg-white border border-t-0 border-gray-200">
                    <div className="imageHead w-[40%]">
                        <img src={cover_image} alt="" />
                    </div>
                    {children}
                </div>
        </div>
    )
}
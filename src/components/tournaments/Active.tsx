import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { fetchTournaments, getAllTournaments } from "../../features/tournaments/tournamentsSlice";
import { useMatch } from "react-router-dom";
import { useEffect } from "react";
import { TournamentCard } from "./TournamentCard";
import { TournamentInterface } from "../../interfaces/Tournament";

export const Active = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const tournaments = useSelector(getAllTournaments);
    const match = useMatch('/tournaments/:status');
    const status = match?.params.status! as string;

    useEffect(()=> {
        dispatch(fetchTournaments(status))
    }, [])

    return (
        <>
            {tournaments.map((content: TournamentInterface) => {
                return (
                    <TournamentCard {...content}>
                        <div className="flex flex-row">
                            <div className="imageHead w-[40%]">
                                <img src={content.cover_image} alt="" />
                            </div>
                            Active page
                        </div>
                    </TournamentCard>
                    )
                })}
        </>
    )
}
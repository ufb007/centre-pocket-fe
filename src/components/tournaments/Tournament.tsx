import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTournaments, getTournamentsError, getTournamentsStatus } from "../../features/tournaments/tournamentsSlice";

type TypeCountDown = {
   count: number,
   name: string
}

export const Tournament = () => {
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
   const tournaments = useSelector(getAllTournaments);
   const tournamentsStatus = useSelector(getTournamentsStatus);
   const tournamentsError = useSelector(getTournamentsError);

   useEffect(()=> {
      if (tournamentsStatus === 'idle') {
         //dispatch(fetchTournaments('upcoming'))
      }
   }, [tournamentsStatus, dispatch])

   return (
      <>
         <p>This is the tournament page</p>
      </>
   )
};

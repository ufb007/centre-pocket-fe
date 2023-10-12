import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTournaments, getAllTournaments, getTournamentsError, getTournamentsStatus } from "../../features/tournaments/tournamentsSlice";

type TypeCountDown = {
   count: number,
   name: string
}

export const Tournament = () => {
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
   const tournaments = useSelector(getAllTournaments);
   const tournamentsStatus = useSelector(getTournamentsStatus);
   const tournamentsError = useSelector(getTournamentsError);
   const [countDown, setCountDown] = useState<TypeCountDown[]>([
      { count: 0, name: 'Days'},
      { count: 0, name: 'Hours'},
      { count: 0, name: 'Minutes'},
      { count: 0, name: 'Seconds'}
  ])

   useEffect(()=> {
      if (tournamentsStatus === 'idle') {
         dispatch(fetchTournaments('upcoming'))
      }
   }, [tournamentsStatus, dispatch])

   return (
      <>
      </>
   )
};

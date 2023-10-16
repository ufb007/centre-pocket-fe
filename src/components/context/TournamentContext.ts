import { createContext } from "react";
import { TournamentInterface } from "../../interfaces/Tournament";

export const TournamentContext = createContext<TournamentInterface | undefined>(undefined);
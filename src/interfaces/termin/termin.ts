import { PersonSelect } from "../person/personSelect";

export interface Termin {
    id?: number;
    bezeichnung?: string;
    beteiligtePersonen?: PersonSelect[];
    zeitpunkt?: string;
}
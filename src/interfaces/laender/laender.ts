import { LaenderCurrencies } from "./laenderCurrencies";
import { LaenderLanguages } from "./laenderLanguages";

export interface Laender {
    alpha2Code?: string;
    alpha3Code?: string;
    area?: number;
    borders?: string[];
    callingCodes?: string[];
    capital?: string;
    currencies?: LaenderCurrencies[];
    flag?: string;
    languages?: LaenderLanguages[];
    name?: string;
    nativeName?: string;
    numericCode?: string;
    population?: number;
    region?: string;
    subregion?: string;
    timezones?: string[];
    topLevelDomain?: string[];
    translations?: any;
}
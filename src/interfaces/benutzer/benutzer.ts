import { Benutzeradresse } from './benutzeradresse';
import { Benutzerlogin } from './benutzerlogin';
import { Benutzername } from './benutzername';
import { Benutzerbilder } from './benutzerbilder';

export interface Benutzer {
    dob?: string;
    email?: string;
    gender?: string;
    location?: Benutzeradresse;
    login?: Benutzerlogin;
    name?: Benutzername;
    phone?: string;
    picture?: Benutzerbilder;
    registered?: string;
}
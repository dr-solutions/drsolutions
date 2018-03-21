import { FormControl } from '@angular/forms';
 
export class AlterValidator {
 
    static isValid(control: FormControl): any {

        if(isNaN(control.value)){
            return {
                "Keine Zahl": true
            };
        }
 
        if(control.value % 1 !== 0){
            return {
                "Keine Ganzahl": true
            };
        }
 
        if(control.value < 18){
            return {
                "Zu jung": true
            };
        }
 
        if (control.value > 120){
            return {
                "Zu alt": true
            };
        }
 
        return null;
    }
 
}
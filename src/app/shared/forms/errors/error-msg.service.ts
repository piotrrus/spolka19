import { Injectable } from '@angular/core';
import { ValidationError } from './validation-error.interface';

@Injectable()
export class ErrorMsgService {
     public getValidatorErrorMessage(validatorName: string): string {
          const messages: ValidationError[] = [
               { name: 'required', text: 'To pole jest wymagane' },
               { name: 'minlength', text: 'Wpisano zbyt małą ilość znaków' },
               { name: 'maxlength', text: 'Przekroczono dopuszczalną ilość znaków' },
               { name: 'lettersOnly', text: 'Dopuszczalne są tylko litery' },
               { name: 'notNull', text: 'Wpisana wartość musi być większa od zera' },
               { name: 'pattern', text: 'Niewłaściwy format danych' },
               { name: 'email', text: 'Wprowadź poprawny adres e-mail' },
               { name: 'phone', text: 'Niepoprawny numer telefonu' },
               { name: 'nip', text: 'Niepoprawny numer nip' },
               { name: 'minPassword', text: 'Hasło nie może być krótsze niż 8 znaków' },
               { name: 'confirmPassword', text: 'Hasła muszą być identyczne' },
               { name: 'numbersOnly', text: 'Wprowadź tylko cyfry' },
               {
                    name: 'deliveryDateIsBefore',
                    text: 'Data odbioru musi być późniejsza niż data próby lub pomiarów',
               },
               { name: 'dateIsNotEditable', text: 'Daty nie można edytować' },
               { name: 'datePattern', text: 'Niepoprawny format daty' },
          ];

          const temp: ValidationError[] = messages.filter((t) => t.name === validatorName);
          return temp[0] ? temp[0].text : '';
     }
}

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringUtilsService {

  constructor() {
  }


  public getText = (text: string): string => {
    if (text) {
      return text;
    }
    return '';
  }
}

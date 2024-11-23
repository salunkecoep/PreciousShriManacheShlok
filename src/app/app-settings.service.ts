import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor() { }

  public getDialogTitleStyle(width: number) {
    width = width - 20;
    let style = {
      'width': width + 'px'
    };
    return style;
  }
}

import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'marathinumber'
})

export class MarathiNumberPipe implements PipeTransform {
  transform(value: number): string {
    let marathiNumbers = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

    let numberString: string;
    let number = value + 1;

    if (number <= 9) {
      numberString = marathiNumbers[number];
    } else if (number <= 99) {
      let no1 = Math.floor(number/10);
      numberString = marathiNumbers[no1];
      numberString += marathiNumbers[number%10];
    } else if (number <= 999) {
      let no1 = Math.floor(number/100);
      numberString = marathiNumbers[no1];
      let no2 = number - no1*100;
      let no3 = Math.floor(no2/10);
      numberString += marathiNumbers[no3];
      numberString += marathiNumbers[no2%10];
    }

    return numberString;
  }
}

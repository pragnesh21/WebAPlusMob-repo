import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let parts = value.trim().split(this.DELIMITER);
      return {
        day: parseInt(parts[0], 10),
        month: parseInt(parts[1], 10),
        year: parseInt(parts[2], 10),
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date
      ? `${this.pad(date.day)}${this.DELIMITER}${this.pad(date.month)}${this.DELIMITER}${date.year}`
      : '';
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }
}

import { Pipe, PipeTransform } from "@angular/core";
import { Infos } from "../models/api";

@Pipe({
  name: 'filterPipe123'
})

export class FilterPipe implements PipeTransform {
  transform(cards: Infos[], searchPipe: string) {
    if (!cards || !searchPipe) {
      return cards;
    }
    return cards.filter(item =>
      item.title.toLowerCase().indexOf(searchPipe.toLowerCase()) !== -1);
  }
}


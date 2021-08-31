import { Pipe, PipeTransform } from "@angular/core";
import { Infos } from "../models/api";

@Pipe({
  name: 'sortPipe123'
})

export class SortPipe implements PipeTransform {
  transform(cards: Infos[], sortPipe: string) {

      if (sortPipe === 'asc' || sortPipe === 'desc') {
          cards.sort((a, b) => {
            const diff = a.salePrice - b.salePrice;

            if (diff === 0) {
              return 0;
            }

            const sign = Math.abs(diff) / diff;

            return sortPipe === 'asc' ? sign : -sign;
          });
      } else if (sortPipe === 'tituloAlf') {
        cards.sort(function(x,y) {
          if (x.title < y.title) return -1;
          if (x.title > y.title) return 1;
          return 0;
        })
      } else if (sortPipe === 'desconto') {
        cards.sort((a, b) => 0 - (a > b ? -1 : 1));
      }
    return cards;
  }
}

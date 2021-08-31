import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Infos } from '../models/api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  @Input('products') products: Infos[] = [];
  @Input('filter') filter: Infos;
  @Input('lastPage') lastPage: number;

  @Output('setFilters') setFilters = new EventEmitter();

  array: any;
  cards: any;
  erro: any;
  angular: any;
  searchPipe: any;
  sortPipe: any;

  constructor(private apiService: ApiService) {
    this.pegarInfos();

  }
  ngOnInit(): void {
  }

  pegarInfos() {
    this.apiService.getApi().subscribe(
      (data:Infos) => {
        this.cards = data;
      },
      (error:any) => {
        this.erro = error;
      }
    );
  }
}

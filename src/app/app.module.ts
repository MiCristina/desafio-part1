import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiComponent } from './api/api.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './filter/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

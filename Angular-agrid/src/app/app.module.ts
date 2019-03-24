import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { TableComponent } from './table/table.component';



@NgModule({
   declarations: [
      AppComponent,
      TableComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AgGridModule.withComponents(null)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

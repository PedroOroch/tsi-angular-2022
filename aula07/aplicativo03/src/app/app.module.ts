import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';
import { Ex1Component } from './views/ex1/ex1.component';
import { Ex2Component } from './views/ex2/ex2.component';
import { Ex3Component } from './views/ex3/ex3.component';
import { ExemploNgForComponent } from './views/exemplo-ng-for/exemplo-ng-for.component';
import { NgForEx1Component } from './views/ng-for-ex1/ng-for-ex1.component';
import { NgForEx2Component } from './views/ng-for-ex2/ng-for-ex2.component';


@NgModule({
  declarations: [
    AppComponent,
    ExemploNgifComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    ExemploNgForComponent,
    NgForEx1Component,
    NgForEx2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

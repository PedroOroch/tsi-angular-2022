import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExEventoComponent } from './view/ex-evento/ex-evento.component';
import { Ex05Component } from './views/ex05/ex05.component';
import { Ex06Component } from './views/ex06/ex06.component';
import { Ex07Component } from './views/ex07/ex07.component';
import { ExeExtra02Component } from './views/exe-extra02/exe-extra02.component';
import { ExeExtra03Component } from './views/exe-extra03/exe-extra03.component';
import { ExeExtra04Component } from './views/exe-extra04/exe-extra04.component';
import { ExeExtra05Component } from './views/exe-extra05/exe-extra05.component';
import { ExeExtra06Component } from './views/exe-extra06/exe-extra06.component';
import { ExeExtra07Component } from './views/exe-extra07/exe-extra07.component';
import { ExeExtra08Component } from './views/exe-extra08/exe-extra08.component';
import { ExeExtra09Component } from './views/exe-extra09/exe-extra09.component';
import { ExeExtra10Component } from './views/exe-extra10/exe-extra10.component';

@NgModule({
  declarations: [
    AppComponent,
    ExEventoComponent,
    Ex05Component,
    Ex06Component,
    Ex07Component,
    ExeExtra02Component,
    ExeExtra03Component,
    ExeExtra04Component,
    ExeExtra05Component,
    ExeExtra06Component,
    ExeExtra07Component,
    ExeExtra08Component,
    ExeExtra09Component,
    ExeExtra10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

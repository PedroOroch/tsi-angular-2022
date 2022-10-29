import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exe01Component } from './views/exe01/exe01.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  {
    path: 'jogo',
    component: Exe01Component
  },
  {
    path: 'sobre',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


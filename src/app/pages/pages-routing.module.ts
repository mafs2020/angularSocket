import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { InicioComponent } from './inicio/inicio.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { 
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'chat', component: ChatComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

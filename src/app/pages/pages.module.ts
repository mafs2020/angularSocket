import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimesComponent } from './animes.component';
import { AnimesDetailComponent } from './components/animes-detail/animes-detail.component';


@NgModule({
  declarations: [
    AnimesComponent,
    AnimesDetailComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule
  ]
})
export class AnimesModule { }

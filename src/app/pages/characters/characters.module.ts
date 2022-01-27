import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { ChracterComponent } from './components/chracter/chracter.component';



@NgModule({
  declarations: [
    CharactersComponent,
    ChracterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule
  ]
})
export class CharactersModule { }

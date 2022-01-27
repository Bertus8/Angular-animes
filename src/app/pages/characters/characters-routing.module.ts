import { CharactersComponent } from './characters.component';
import { ChracterComponent } from './components/chracter/chracter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component:CharactersComponent},
  {path:":idCharacter", component:ChracterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }

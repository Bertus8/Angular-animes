import{AnimesComponent} from './animes.component';
import{ AnimesDetailComponent} from './components/animes-detail/animes-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component:AnimesComponent},
  {path:":idAnime", component: AnimesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }

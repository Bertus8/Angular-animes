import { Component, OnInit } from '@angular/core';
import { IAnimes } from './models/anime';
import { AnimesService } from './services/animes.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
public animes: IAnimes[] = []

  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {
    this.animesService.getAllAnimes().subscribe((data:any) => {
      const apiResults: IAnimes[] = data;

      const formattedAnimes = apiResults.map(({ _id, name, year, genre, img}) =>({
        _id, name, year, genre, img
      }));
      this.animes = formattedAnimes

    })
  }

}

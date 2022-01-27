import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimesService } from '../../services/animes.service';
import { IAnimes } from '../../models/anime';

@Component({
  selector: 'app-animes-detail',
  templateUrl: './animes-detail.component.html',
  styleUrls: ['./animes-detail.component.scss']
})
export class AnimesDetailComponent implements OnInit {
  public anime!: IAnimes;
  constructor(private activatedRoute: ActivatedRoute, private animesService: AnimesService) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idAnime = params.get('idAnime');

      this.animesService.getAnime(idAnime).subscribe((data: any) => {
        const apiResult: IAnimes = data;
        this.anime = apiResult
      })
    })
  }

}

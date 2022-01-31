import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  public animesURL: string = "https://api-anime.vercel.app/api/animes";

  constructor(private httpCLient: HttpClient) { }

  public getAllAnimes() {
    return this.httpCLient.get(this.animesURL)
  }
  

  public getAnime(idAnime: any) {
    return this.httpCLient.get(`${this.animesURL}/${idAnime}`)
  }
}

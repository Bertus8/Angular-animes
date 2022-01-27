import { CharactersService } from './services/characters.service';
import { ICharacter } from './models/character'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: ICharacter[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((data:any)=>{
      const apiResults: ICharacter[] = data;

      const formattedCharacters = apiResults.map(({ id, name, anime, powers, img }) => ({
        id, name, anime, powers, img
      }));
      this.characters = formattedCharacters
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { ICharacter } from '../../models/character';

@Component({
  selector: 'app-chracter',
  templateUrl: './chracter.component.html',
  styleUrls: ['./chracter.component.scss']
})
export class ChracterComponent implements OnInit {
public character!: ICharacter;
  constructor(private activatedRoute: ActivatedRoute, private charactersService: CharactersService) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idCharacter = params.get('idCharacter');

      this.charactersService.getCharacter(idCharacter).subscribe((data: any) => {
        const apiResult: ICharacter = data;
        this.character = apiResult
      })
    })
  }

}

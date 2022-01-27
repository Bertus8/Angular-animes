import { INav, IFooter } from './core/models/core'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Animes - Json Server';
  public nav: INav[] = [
    {
      name: "home",
      link: "/home"
    },
    {
      name: "about",
      link: "/about"
    },
    {
      name: "animes",
      link: "/animes"
    },
    {
      name: "characters",
      link: "/characters"
    },
  ];
  public footer: IFooter = {
    creator: "Bertus",
    link: "https://github.com/Bertus8?tab=repositories"
  }
}

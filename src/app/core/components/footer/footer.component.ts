import { IFooter } from '../../models/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() footer!: IFooter;
  constructor() { }

  ngOnInit(): void {
  }

}
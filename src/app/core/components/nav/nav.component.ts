import { INav } from './../../../core/models/core'
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input() nav!: INav[];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.css']
})
export class TutoComponent implements OnInit {
  titreTuto: string = "APPRENDRE LA CARDISTRY"
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css']
})
export class DecksComponent implements OnInit {
  titreDeck:string = "LES DECKS"
  constructor() { }

  ngOnInit(): void {
  }

}

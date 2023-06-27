import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-background',
  templateUrl: './card-background.component.html',
  styleUrls: ['./card-background.component.css']
})
export class CardBackgroundComponent implements OnInit {
  cards: any[] = [
    { filename: 'black-spade.svg', className: 'card1', x: '0px', y: '0px' },
    { filename: 'black-heart.svg', className: 'card2', x: '0px', y: '0px' },
    { filename: 'black-club.svg', className: 'card3', x: '0px', y: '0px' },
    { filename: 'black-diamond.svg', className: 'card4', x: '0px', y: '0px' }
  ];


  constructor() {}

  ngOnInit() {
  }
}

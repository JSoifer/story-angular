import { Component, OnInit } from '@angular/core';
import { PlayerDetailsService } from './../player-details.service';

@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html',
  styleUrls: ['./story-display.component.scss'],
  providers: [PlayerDetailsService]
})
export class StoryDisplayComponent implements OnInit {
  currentPage: number;
  currentContent: string;

  constructor() { }

  ngOnInit() {
  }

}

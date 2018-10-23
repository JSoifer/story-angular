import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerDetailsService } from './../player-details.service';
import { routing } from './../app-routing.module';
import { Story } from './../story.model';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html',
  styleUrls: ['./story-display.component.scss'],
  providers: [PlayerDetailsService]
})
export class StoryDisplayComponent implements OnInit {
  page: number;
  currentPage: FirebaseObjectObservable<any[]>;

  constructor(
    private routing: ActivatedRoute,
    private location: Location,
    private playerDetailsService: PlayerDetailsService
  ) { }

  ngOnInit() {
    this.routing.params.forEach((urlParameters) => {
      this.page = urlParameters['page'];
    });
   this.currentPage = this.playerDetailsService.getPageById(this.page);
  }

}

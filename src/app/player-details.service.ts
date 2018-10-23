import { Injectable } from '@angular/core';
import { Story } from './story.model';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PlayerDetailsService {
  pages: FirebaseObjectObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.pages = database.object('pages');
  }

  getPages(page: number) {
    return this.pages;
  }

  getPageById(page: number) {
    return this.database.object('pages/' + page)
  }
}

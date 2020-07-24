import { Component, OnInit } from '@angular/core';
import { FavoritesStore } from '../stores/favorites.store';
import { map } from 'rxjs/operators';


@Component({
  selector: 'github-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  favoriteUsers: any[];
  
  constructor(
    private favoriteStore: FavoritesStore
  ) { }

  ngOnInit(): void {
    this.favoriteStore.state$
      .subscribe(state => {
        this.favoriteUsers = [...state.users].reverse();
      });
  }

}

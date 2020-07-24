import { Component, OnInit, Input } from '@angular/core';
import { FavoritesStore } from '../stores/favorites.store';

@Component({
  selector: 'github-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() user: any;

  constructor(
    private favoriteStore: FavoritesStore
  ) { }

  ngOnInit(): void {
  }

  addOrRemove(event: any){
    this.favoriteStore.addOrRemoveUser(this.user);

    event.preventDefault();
  }

  get inFavorites(): boolean{
    return this.favoriteStore.getUserById(this.user);
  }

}

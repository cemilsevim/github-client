import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SearchInputComponent } from './search-input/search-input.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgbTabsetModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from '@angular/router';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';

@NgModule({
    declarations: [
        UserProfileComponent,
        SearchInputComponent,
        UserComponent,
        UserListComponent,
        FavoriteListComponent,
        FavoriteButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbTabsetModule,
        RouterModule
    ],
    exports:[
      UserProfileComponent,
      SearchInputComponent,
      UserComponent,
      UserListComponent,
    ],
    providers: []
  })
export class GithubModule { }
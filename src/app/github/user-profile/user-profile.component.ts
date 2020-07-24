import { Component, OnInit } from '@angular/core';
import { GithubService, User } from '../services/github.service';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Subscription } from "rxjs";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'github-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  username: string;

  user: User = {
    id:0,
    name:"",
    login:""
  };

  constructor(
    private githubService: GithubService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res) => {
      this.user = res.userProfile;
    });
  }

}

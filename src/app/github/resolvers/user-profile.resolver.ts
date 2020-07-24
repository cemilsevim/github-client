import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubService } from '../services/github.service';

@Injectable({ providedIn: 'root' })
export class UserProfileResolver implements Resolve<any> {

  constructor(
      private githubService: GithubService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      return this.githubService.fetchUser(route.params.username);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export interface SearchItem {
  id: number,
  type: string,
  login: string,
  html_url: string,
  avatar_url: string
}

export interface SearchResponse{
  incomplete_results: boolean,
  items: SearchItem[]
  total_count: number
}

export interface User{
  id: number,
  name: string,
  login: string,
  email?: string,
  avatar_url?: string,
  location?: string,
  html_url?: string,
  bio?: string,
  company?: string,
  followers?: number,
  following?: number,
  blog?: string,
  created_at?: string,
  updated_at?: string
}

@Injectable({
  providedIn: "root"
})
export class GithubService {
  private apiUrl: string = "https://api.github.com";

  constructor(
    private httpClient: HttpClient
  ) {}

  searchUser(term: string): Observable<SearchResponse>{
    return this.httpClient.get<SearchResponse>(`${this.apiUrl}/search/users?q=${term}`);
  }
  
  fetchUser(username: string): Observable<User>{
    return this.httpClient.get<User>(`${this.apiUrl}/users/${username}`);
  }
}

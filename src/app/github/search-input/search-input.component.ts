import { Component, OnInit } from '@angular/core';
import { GithubService, SearchItem, SearchResponse } from '../services/github.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'github-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  searchForm: FormGroup;

  loading: boolean = false;

  users: SearchItem[] = [];
  
  totalUserCount: number = 0;

  constructor(
    private githubService: GithubService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  get term(){
    return this.searchForm.get("term");
  }

  ngOnInit(): void {
    this.buildForm();

    // url değiştiğinde, arama sonucunu resetler
    this.router.events.subscribe((event) => {
        if(event instanceof NavigationEnd){
          this.resetSearch();
        }
    });
  }

  resetSearch(){
    this.users = [];
    this.searchForm.reset();
  }

  buildForm(){
    this.searchForm = this.formBuilder.group({
      term: []
    });
  }

  setLoading(show: boolean) : void {
    this.loading = show;
  }

  async searchUser(): Promise<boolean>{
    // form invalid'se arama sonucu resetler
    if(this.term.invalid){
      this.users = [];

      return true;
    }

    this.setLoading(true);

    this.githubService.searchUser(this.term.value)
        .subscribe((res) => {
          this.users = res.items;

          this.totalUserCount = res.total_count;

          this.setLoading(false);
        },(error) => { 
          this.setLoading(false);

          console.error(error)
        });
    
    return false;
  }

}

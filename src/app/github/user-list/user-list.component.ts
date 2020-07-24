import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from "../services/github.service";

@Component({
  selector: 'github-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: SearchItem[];

  constructor() { }

  ngOnInit(): void {}

}

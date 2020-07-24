import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../services/github.service';

@Component({
  selector: 'github-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: SearchItem;

  constructor() { }

  ngOnInit(): void {
  }

}

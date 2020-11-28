import { Component, OnInit } from '@angular/core';
import { Messages } from '../shared/constants/messages';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private messages = new Messages();
  pageName = this.messages.pageName;
  about = this.messages.about;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
notfication:number;
  constructor() {
this.notfication =5;
  }

  ngOnInit() {
  }

}

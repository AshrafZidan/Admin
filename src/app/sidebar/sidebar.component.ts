import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
AdminFinctionality : Array<object>;
Admin_Name:string;
  constructor() {
    this.AdminFinctionality = [
      {'name':'adsasd' , 'icon':'fa fa-facebook'},
      {'name':'calac','icon':''}

    ];
    this.Admin_Name= 'Ashraf Zidan'
  }

  ngOnInit() {
  }

}

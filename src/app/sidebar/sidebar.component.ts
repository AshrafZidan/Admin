import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

AdminFinctionality : Array<object>;

  constructor() {
      this.AdminFinctionality = [
      {'name':'Dashboard' , 'icon':'fa-home'},
      {'name':'Dashboard 2' , 'icon':'fa-home'},
      {'name':'Dashboard 3' , 'icon':'fa-home'},
      {'name':'Dashboard 4' , 'icon':'fa-home'},
      {'name':'Inbox','icon':'far fa-envelope'},
      {'name':'Forms','icon':'fas fa-chart-line'},

      {'name':'Charts','icon':'fas fa-chart-line'}

    ];
  }




  ngOnInit() {

  }


}

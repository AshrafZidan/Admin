import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


AdminFinctionality : Array<object>;
Admin;
Admin_Name:string;
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
    this.Admin={'name': 'Ashraf Zidan','img':'.././assets/Images/Admin.png'}
  }

//function to open slidebar
openSidebar(){
  console.log('====================================');
  $('.sidebar').toggleClass('open-sidebar');
}



  ngOnInit() {
  }

}

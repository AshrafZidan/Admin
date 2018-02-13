import { Component } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

AdminFinctionality : Array<object>;
Admin;
  constructor() {
    this.AdminFinctionality = [
      {'name':'Dashboard' , 'icon':'fa-home'},
      {'name':'Dashboard 2' , 'icon':'fa-home'},
      {'name':'Dashboard 3' , 'icon':'fa-home'},
      {'name':'Dashboard 4' , 'icon':'fa-home'},
      {'name':'Inbox','icon':'fa-envelope-o'},
      {'name':'Forms','icon':'fa-envelope-o'},

      {'name':'Charts','icon':'fa-envelope-o'}

    ];
    this.Admin={'name': 'Ashraf Zidan','img':'.././assets/Images/Admin.png'}
  }

//function to open slidebar
openSidebar(){
  console.log('====================================');
$('.sidebar').toggleClass('open-sidebar');
}

}

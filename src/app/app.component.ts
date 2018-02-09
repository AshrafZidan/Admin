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
      {'name':'Charts' , 'icon':'fa-facebook'},
      {'name':'Forms','icon':'fa-edit'}

    ];
    this.Admin={'name': 'Ashraf Zidan','img':'.././assets/Images/Admin.png'}
  }

//function to open slidebar
openSidebar(){
  console.log('====================================');
$('.sidebar').toggleClass('open-sidebar');
}

}

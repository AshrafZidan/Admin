import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output("hideSideBar") hideSideBar = new EventEmitter();
  @Input("toggleValue") toggleValue;

//sidebar control
toogleSideBar: boolean = false;

notfication:number;
notfication_list;
User_list;
id = 555;

constructor() {
this.notfication =5;
this.notfication_list =  [{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'info'},
{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in,Lorem ipsum dolor sit ametitaque in,Lorem ipsum dolor sit ametitaque in, et!',type:'Add'} ,{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'warning'}];


this.User_list =  [{name:"profile",icon:'fa fa-user',url:"/profile"},{name:"Inbox",icon:'fa fa-envelope'},{name:"Settings",icon:'fa fa-cog'},{name:"Logout",icon:'fa fa-sign-out'}

];




}

ngOnInit() {
// this.openSideBar();
}

public openSideBar() {
  // if togglevalue is true that mean sidebar is closed
  // console.log(this.toggleValue);

  this.toogleSideBar = !this.toogleSideBar;
  this.hideSideBar.emit(this.toogleSideBar);

  if (! this.toggleValue ) {
    this.toogleSideBar = false;
  }



if (window.outerWidth <= 996) {
//  document.body.classList.toggle('Wrapper');

 document.getElementById('MyContent').classList.toggle('Wrapper');

 document.getElementById('sidebar').classList.toggle('opens');

}


}



}


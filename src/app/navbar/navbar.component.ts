import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
Admin:string;
notfication:number;
notfication_list;
  constructor() {
  this.Admin="Ashraf Zidan"
this.notfication =5;
this.notfication_list =  [{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'info'},
{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'Add'} ,{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'warning'}];

  }

  ngOnInit() {
  }

}

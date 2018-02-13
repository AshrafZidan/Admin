import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
Admin:string;
notfication:number;
notfication_list;
User_list;

constructor() {
this.Admin="Ashraf Zidan"
this.notfication =5;
this.notfication_list =  [{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'info'},
{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'Add'} ,{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'warning'}];


this.User_list =  [{name:"profile",icon:'fa fa-user'},{name:"Inbox",icon:'fa fa-envelope'},{name:"Settings",icon:'fa fa-cog'},{name:"Logout",icon:'fa fa-sign-out'}

];

}

ngOnInit() {
var dropdown = $('.dropdown-menu');
 var sidebar = $('.sidebar');

this.DrowpDownMenu();
this.Remove_outside(dropdown);

 }

DrowpDownMenu(){

var dropdown = $('.dropdown-menu');
  dropdown.on('click',function(){
   var $this = $(this);
   if(!$this.find('.user-container').hasClass('hide')){ // مفتوح

   $('.user-container').addClass('hide');
   $this.find('.notfication-container').fadeToggle().removeClass('hide');

   }
   else if(! $this.find('.notfication-container').hasClass('hide')){ // مفتوج
    // console.log('ssda');
   $('.notfication-container').addClass('hide');
   $this.find('.user-container').fadeToggle().removeClass('hide');;


   }
  });
}
Remove_outside(targets){

$(document).on('click',function(e){
  var $this = $(this);

// if the target of the click isn't the container nor a descendant of the container
    if (!targets.is(e.target) && targets.has(e.target).length === 0)
    {
        targets.find('.click-outside').addClass('hide');
    }

});

}

opensidebar(){
 var sidebar = $('.sidebar');
 var responsive = $('.responsive');
  sidebar.slideToggle();
  $('body').toggleClass('wrapper');

  $(document).on('click',function(e){
      if (! sidebar.is(e.target) && sidebar.has(e.target).length === 0 && ! responsive.is(e.target) ) {
        $('body').removeClass('wrapper');
        sidebar.slideUp();


  }
  });

}
}


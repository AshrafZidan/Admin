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
id = 555;

constructor() {
this.Admin="Ashraf Zidan"
this.notfication =5;
this.notfication_list =  [{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'info'},
{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'Add'} ,{head:"New Order Recived",describtion:'Lorem ipsum dolor sit ametitaque in, et!',type:'warning'}];


this.User_list =  [{name:"profile",icon:'fa fa-user',url:"profile/"+this.id},{name:"Inbox",icon:'fa fa-envelope'},{name:"Settings",icon:'fa fa-cog'},{name:"Logout",icon:'fa fa-sign-out'}

];


var stickyElements = document.getElementsByClassName('sticky');


}

ngOnInit() {
var dropdown = $('.dropdown');
 var sidebar = $('.sidebar');

this.DrowpDownMenu();
this.Remove_outside(dropdown);
// this.AddSticky();

}

DrowpDownMenu(){

var dropdown = $('.dropdown');
  dropdown.on('click',function(){

   var $this = $(this);
   if(! $this.find('.user-container').hasClass('hideen')){ // user مفتوح

    console.log('ssda');
   $('.user-container').addClass('hideen'); // اقفله

   $this.find('.notfication-container').fadeToggle().removeClass('hideen');

   }
   else if(! $this.find('.notfication-container').hasClass('hideen')){ // مفتوج
   $('.notfication-container').addClass('hideen');
   $this.find('.user-container').fadeToggle().removeClass('hideen');;


   }
  });
}
Remove_outside(targets){

$(document).on('click',function(e){
  var $this = $(this);

// if the target of the click isn't the container nor a descendant of the container
    if (!targets.is(e.target) && targets.has(e.target).length === 0)
    {
        targets.find('.click-outside').addClass('hideen');
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

AddSticky(){

$(document).ready(function() {
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.custom-nav').addClass('sticky');
    }
    if ($(window).scrollTop() < 281) {
      $('.custom-nav').removeClass('sticky');
    }
  });
});

}


}


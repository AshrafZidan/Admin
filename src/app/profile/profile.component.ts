import { Admin } from './Admin.interface';
import { EqualValidator } from './../equal-validator.directive';
import { Component, OnInit } from '@angular/core';


declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  // directive: [EqualValidator]

})
export class ProfileComponent implements OnInit {
  public Admin:Admin;
  constructor() {

   }

  ngOnInit() {
    this.openInputs();
    this.Admin = {
      Name:'Ashraf Zidan',
      Email:'AshrafZidan996@gmail.com',
      Address:'22 Gamal Abdelnaser Street',
      phone:'01003196789',
      Website:'https://www.zidan.com',
      Bio:'any additional information',
      CurrentPass:'',
      NewPass:'',
      ConfrimPass:''
    }
  }

  // Here we are implementing the submitForm function. All we are doing for right now is spitting out the details of the form to our console.
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }


  //function to validate Text Area
  validteTexrArea(){
    var len = 0;
    len = $('#Bio').val().length;

    var remaind = $('#remaind');
    console.log(len);


    var max = 250;
    if (len <= max) {
      remaind.text("Remaining characters : " + ( max - len ))

    } else {

    }
  }


  mismatch(){
    var pass = $('#NewPass').val();
    var Confirmpass = $('#ConfirmPass').val();
    var mismath = $('#mismatch');

    if(pass==''){
      mismath.text('Enter New Password First');
      return false;


    }
    else if (pass != Confirmpass ) {
      mismath.text('Password is missMatch');
      return false;
    }
    else {
      mismath.text('Password is matched true');

      return true;
    }



  }

  //function to open input when click on Edit Icon
  openInputs(){
   var  icon = $('.icn');
   var p = $('.p');

  //  p.click(function (){
  //   $(this).addClass('pp');
  //  });

   //do this for every edit  icon
   icon.click(function(){
    var $this = $(this);
     $this.addClass('tt');

     $this.parent('.cont').parent('.test').find('.inpt').toggleClass('hidden');
    // console.log("Clicked");

    if (! $this.parent('.cont').parent('.test').find('.inpt').hasClass('hidden')) {

      $('#btn').removeClass('hidden');
      // console.log('true');


    }
    else{
      $('#btn').addClass('hidden');

    }

   });


  }
}

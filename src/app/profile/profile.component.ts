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
    // this.openInputs();
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

  valid2(){
    var valid = document.getElementById('Bio');
    var show = document.getElementById('remaind');
    this.validteTexrArea(valid,250,show);
  }

  //function to validate Text Area
  validteTexrArea(input , Max , shownText){
    var input = input.value;
    if (input.length <= Max) {
      shownText.innerText = ("Remaining characters : " + ( Max - input.length  ));
      return false;

    } else {
      return true;
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
  public openInputs(e){

   var $this = $(e.target);

   var hiddenInput =  $this.parent('.cont').parent('.remove-hidden').find('.inpt');
    hiddenInput.toggleClass('hidden');
    $('#confirm-btn').toggleClass('hidden');

    if (! hiddenInput.hasClass('hidden') ) {

      // $('#confirm-btn').addClass('hidden');
      }
    // else{
    //   $('#confirm-btn').addClass('hidden');

    // }

}
}

import {Component} from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class User{
    constructor(
        public username:any,
        public email:any,
){}
}
export class Register {
   public user:any;

   constructor(){
        this.user=new User('','');
       
        }
        users(){
            console.log('here');
            console.log(this.user);
            }
   
}

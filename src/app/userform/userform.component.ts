import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {//controller
  title:string='Userform';//model stores all form of data
  user:User=new User();
  userArray:User[]=[];
  constructor() { }
save(){
  this.userArray.push(Object.assign({},this.user));
  console.log('working...');

  console.log(this.user.firstname);
  //this.user.firstname="john";
  //console.log(this.user.age);

}
  ngOnInit(): void {
  }

}

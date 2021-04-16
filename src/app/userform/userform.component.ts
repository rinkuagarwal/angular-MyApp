import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user-service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {//controller
  title:string='Userform';//model stores all form of data
  user:User=new User();
  userArray:User[]=[];
  constructor(private userService:UserService) { }
  save(){
    const promise = this.userService.save(this.user);
    promise.subscribe(response=> {
      console.log(response);
      alert('user added..')
      this.userArray.push(Object.assign({}, this.user));
    },
    error=> {
      console.log(error);
      alert('error happened')
    })
  // console.log('working...');
  // console.log(this.user.firstname);
  //this.user.firstname="john";
  //console.log(this.user.age);

}
  ngOnInit(): void {
  }

}

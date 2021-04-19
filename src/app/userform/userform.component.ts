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
  userArray:any;
  constructor(private userService:UserService) { }
  deleteUser(id:number, index:number){
    const observable = this.userService.delete(id);
    observable.subscribe(response=> this.userArray.splice(index,1))
  }
  save(){
    const promise = this.userService.save(this.user);
    promise.subscribe(response=> {
      console.log(response);
      this.user.id=response;
      alert('user added..')
      this.userArray.push(Object.assign({}, this.user));
      this.user=new User();
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
    const observable = this.userService.getAllUsers();
    observable.subscribe(response => {
      console.log(response);
      this.userArray = response;
     });
  }

}

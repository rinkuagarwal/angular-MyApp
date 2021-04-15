import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  title:string='Userform';
  firstname:string='Ram';
  age:number=20;
  constructor() { }
save(){
  console.log('working...');

  console.log(this.firstname);
this.firstname='john';
console.log(this.age);

}
  ngOnInit(): void {
  }

}

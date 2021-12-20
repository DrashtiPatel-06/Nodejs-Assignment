import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
str:string="";
val:number=0;
dob=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}

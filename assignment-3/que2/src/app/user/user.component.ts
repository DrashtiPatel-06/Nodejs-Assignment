import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('form') addforms!:NgForm;
  title='user form';
  submitted=false;
  data={
    name:"",
    email:"",
    contact:0
  }

userdata='';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    this.data.name=this.addforms.value.name;
    this.data.email=this.addforms.value.email;
    this.data.contact=this.addforms.value.contact;

  }
}

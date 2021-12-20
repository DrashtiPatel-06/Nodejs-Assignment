
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  num:number=5;
  str:string="hello,It is a string";
  currdate=new Date();
  constructor() {
  
   }

  ngOnInit(): void {
  }

}

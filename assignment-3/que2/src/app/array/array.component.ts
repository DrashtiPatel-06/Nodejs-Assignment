import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor() { }
  users = [
    { firstName: 'drashti', lastName: 'patel', email: 'drashti@gmail.com'},
    { firstName: 'prachi', lastName: 'patel', email: 'prachi@gmail.com'},
    { firstName: 'jeel', lastName: 'patel', email: 'jeel@gmail.com'},
    { firstName: 'dhruv', lastName: 'patel', email: 'dhruv@gmail.com'},
];
  ngOnInit(): void {
  }

}

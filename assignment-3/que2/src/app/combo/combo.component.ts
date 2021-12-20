import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
  selection : Array<String> = ["textbox", "textarea"];
  textbox = true;
  textarea = false;
  constructor() { }

  ngOnInit(): void {
  }
  changeBox() {
    if(this.textbox){
      this.textbox = false;
      this.textarea = true;
    }else{
        this.textarea = false;
        this.textbox = true;
    }
  }

}

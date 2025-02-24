import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-btn',
  imports: [],
  templateUrl: './create-btn.component.html',
  styleUrl: './create-btn.component.css'
})
export class CreateBtnComponent {

  @Input() btnName=''

  @Output() btnClick = new EventEmitter<string>();

  //set on click function
  onClick(){
    this.btnClick.emit("Hi Fromv Reusable Button Comopnent")
  }
}

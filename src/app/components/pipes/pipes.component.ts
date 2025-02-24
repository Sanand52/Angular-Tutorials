import { JsonPipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CreateBtnComponent } from '../reusableComponents/create-btn/create-btn.component';
import { AlertComponent } from "../reusableComponents/alert/alert.component";

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, SlicePipe, JsonPipe, CreateBtnComponent, AlertComponent],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  name:string="sHubhAm AnaND"

  testString = "Welcome lets test slice pipe"

  student: any ={
    name:"Anand",
    age:"20 Years",
    class:10,
    Id:"1Fcd9jk"
  }

  //get the data from child to parent
  onBtnClick(data:string){
    alert(data)
  }
}

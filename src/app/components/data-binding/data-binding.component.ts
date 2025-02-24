import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})

export class DataBindingComponent {
Name : string = "Anand"
Interpolation: string = '{{component variable}}'
inputType = "date"

showMessage(){
  alert("hello anand")
}

onChange(event: any){
  const state = event.target?.["value"]
  alert("state changed to "+ state)
}

onSelectbtn(Name:string){
  alert(Name)
}
}

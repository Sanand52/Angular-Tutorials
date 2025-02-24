import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StdDataService } from '../../service/std-data.service';
import { stdModel } from '../../model/stdModel';
import { AlertComponent } from "../reusableComponents/alert/alert.component";

@Component({
  selector: 'app-get-api',
  imports: [ReactiveFormsModule, AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetAPIComponent {

  stdData = inject(StdDataService);

  //using model
  StdList: stdModel[] = [];

  std:stdModel= new stdModel();

  //reactive form
  studentForm:FormGroup= new FormGroup({
    _id: new FormControl(""),
    name: new FormControl("",[Validators.required]),//validator for required
    age: new FormControl([Validators.required]),//validator for required
    email: new FormControl("",[Validators.required,Validators.email]),//validator for email & required
    message: new FormControl("",[Validators.required]),//validator for required
    __v:new FormControl()
  })

  // getter method for geting id
  get id() {
    return this.studentForm.get('_id')?.value;
  }

  // set alert type and messagen for Table
  alertTable="";
  tableMessage="";
  showTable=false;

  // set alert type and messagen for Form
  alertForm="";
  formMessage="Fill all details Correctly";
  showForm:boolean=false

  
  ngOnInit(): void {
    this.getStdList();
  }

  //using std-service get method
  // ==========================================================================
  getStdList(){
    this.stdData.getStdList().subscribe((result:any)=>{
      this.StdList = result.StudentList;
      const numberStd = this.StdList.length
      this.showTable=true
      if(numberStd>=1){
        this.tableMessage=`${numberStd} Students data fetched successfully`
      }else{
        this.tableMessage=`Students data is not available`
      }
      
      // console.log(result.StudentList);
    })
  }

  //single student Get Method
  // ===============================================================
  getStd(id:string){
    this.stdData.getStd(id).subscribe((result:any)=>{
      this.studentForm.setValue(result.singlestd)
    },(error)=>{
      console.log(error)
    })
  }

  clearData() {
    this.studentForm.reset();
    this.showForm=false
  }

// post and update api using services 
// ==============================================================
  addStd(){
    // Check if the form is invalid
  if (this.studentForm.invalid) {
    console.log('Form is invalid. Validation errors:');

    let errkey:string[]=[]
    // Log errors for each form control
    Object.keys(this.studentForm.controls).forEach((key) => {
      const control = this.studentForm.get(key);
      if (control?.invalid) {
        console.log(`Control: ${key}, Errors:`, control.errors);

        //push all error key to errkey
        errkey.push(key)
      }
    });

    if(errkey.length>=1){
      this.alertForm='danger'
      this.formMessage = `${errkey}`
      this.showForm=true
    }else{
      this.alertForm='success'
      this.formMessage ='Fill all details Correctly'
      this.showForm=true
    }
    return; // Stop execution if the form is invalid
  }

    const formValue = this.studentForm.value;
    // console.log(formValue,this.id)

    if(this.id){
      const answer = confirm("Are you sure you want to update?")
          if(answer){
           //update student
      this.stdData.updateStd(formValue._id,formValue).subscribe((result:any)=>{
        alert(result.message)
        this.clearData()
        this.getStdList()
      },(error:any)=>{
        console.log(error)
      })}else {
              alert("you abort the update.")}
              return;
    }else{
      //add student
      this.stdData.addStd(formValue).subscribe((result:any)=>{
      alert(result.message)
       this.clearData()
       this.getStdList()
    },(error:any)=>{
      console.log(error)}
    )
    } 
   }
  
  //std delete using service
  // ===========================================================================
  stdDelete(id:string,name:string){
    //confirm delete
    const answer = confirm(`are you sure to delete ${name}'s details?`)

    if(answer){
      this.clearData();
      this.stdData.stdDelete(id).subscribe((result:any)=>{
      alert(result.message)
      this.getStdList()
    },(error:any)=>{
      console.log(error.message)
    })
    }else{
      alert(`you abort to delete ${name}'s details.`)
      return;
    }
  }

}

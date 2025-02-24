import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isDiv1Visible: boolean = true;

  showDiv1(isShow:boolean){
    this.isDiv1Visible =isShow
  }

  isDiv2Visible: string = ''

  isDay :string="";

  cityList: string[] =['Noida','Lucknow','varanasi','Prayagraj']

  city:string='Select city';

  preCity: string=''

  precity(precity:string){
    this.preCity = precity
    // console.log(precity)
  }

  citySelect(newCity:string){
    const preCity = this.preCity
    if(preCity == newCity){
      alert(newCity + " is already selected")
    }else if (preCity == "Select city"){
      const answer = confirm("you want to select city to "+ newCity)
      answer ? this.city = newCity 
    : this.city = preCity
    }else{
    const answer = confirm("you changed city from "+preCity+' to '+ newCity)
    answer ? this.city = newCity 
    : this.city = preCity
    }
  }

  // student data
  studentList:any[]=[
    {id:'12',name:"raj",age:46,gender:"Male",status:false},
    {id:'45',name:"Anand",age:23,gender:"Male",status:true},
    {id:'23',name:"Divya",age:23,gender:"Female",status:true},
    {id:'76',name:"Rahul",age:18,gender:"Male",status:false},
    {id:'28',name:"Neha",age:24,gender:"Female",status:true},
  ]

  id:number= 0

  student:any=null
  
  // edit student data
  getStd(id:any){
    const student = this.studentList.find(x=>x.id==id);
    this.student = student
  }

  // new student data
  newStudent: any = {
    id: '',
    name: '',
    age: null,
    gender: '',
    status: false
  };

  // add student function
  addStudent() {
    const data = this.studentList.find(x=>x.id==this.newStudent.id)

    if(data){
      alert("Student Id is already present")
    }else{
// Validate the new student data
    if (this.newStudent.id && this.newStudent.name && this.newStudent.age && this.newStudent.gender) {
      // Add the new student to the array
      this.studentList.push({ ...this.newStudent });

      // Reset the form
      this.newStudent = {
        id: '',
        name: '',
        age: null,
        gender: '',
        status: false
      };

      alert('Student added successfully!');
    }else {
      alert('Please fill all fields.');
    }
    
    } 
  }

  // delete function from student Data(array)
  deleteStudent(studentId: string) {

    const data = this.studentList.find(x=>x.id===studentId);

    const answer = confirm("are you sure you delete data ?"+ data.name)

    if(answer){
          const index = this.studentList.findIndex(student => student.id === studentId);

    if (index !== -1) {
      // Remove the student from the array
      this.studentList.splice(index, 1);
      alert('Student deleted successfully!');

      // Clear the selected student if it was deleted
      if (this.student && this.student.id === studentId) {
        this.student = null;
      }
    } else {
      alert('Student not found.');
    }
    }else{
      return;
    }

    // Find the index of the student to delete

  }

  // update student
  updateStudent() {
    if (this.student) {
      // Find the index of the selected student
      const index = this.studentList.findIndex(student => student.id === this.student.id);

      console.log(this.student)

      if (index !== -1) {
        // Replace the student data at the found index
        this.studentList[index] = { ...this.student };
        alert('Student updated successfully!');

        // cler the selected student if it was updated
        this.student = null
        
      } else {
        alert('Student not found.');
      }
    } else {
      alert('No student selected.');
    }
  }
}


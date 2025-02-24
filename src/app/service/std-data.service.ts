import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stdModel } from '../model/stdModel';

@Injectable({
  providedIn: 'root'
})
export class StdDataService {



  apiurl:string="http://localhost:3000/api/student/"

  constructor(private http:HttpClient) { }

  getStdList() {
    return this.http.get(this.apiurl+'view')
  }

  addStd(std:stdModel){
    return this.http.post(this.apiurl+'insert',std)
  }

  updateStd(id:string,std:stdModel){
    return this.http.put(this.apiurl+`update/${id}`,std)
  }

  stdDelete(id:string){
    return this.http.delete(this.apiurl+`delete/${id}`)
  }

  getStd(id:string){
    return this.http.get(this.apiurl+`singlestd/${id}`)
  }
}

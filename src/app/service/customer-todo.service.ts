import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskObject, user } from '../models/commonModules';

@Injectable({
  providedIn: 'root'
})
export class CustomerTODOService {

  baseurl = "http://localhost:3000"
  constructor(private http:HttpClient) { }

  GetCustomerNameList() {
    return this.http.get<user[]>(this.baseurl+'/users?role=customer')
  }
  GetCustomerToDoList() {
    return this.http.get<TaskObject[]>(this.baseurl+'/customerTodo')
  }

  AddCustomerToDo(data:TaskObject){
    return this.http.post(this.baseurl+'/customerTodo',data)
  }

  EditCustomerToDo(data:TaskObject){
    // return this.http.get<TaskObject[]>(this.baseurl+'/customerTodo?id='+`${data.id}`)

    return this.http.put(this.baseurl+'/customerTodo/'+`${data.id}`,data)
  }

  DeleteCustomerToDo(id:number){
    return this.http.delete(this.baseurl+'/customerTodo/'+id)
  }

  
  // GetallCustomer(){
  //   let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwibmJmIjoxNzIxMjEyNjE5LCJleHAiOjE3MjEyMTU2MTksImlhdCI6MTcyMTIxMjYxOX0.bZRLSrjebBjSDG6qHHqpg6YkJOQFax3S4b6heMkNZSQ';
  //   let _head=new HttpHeaders().set("Authorization","bearer "+token);
  //   return this.http.get<TaskObject[]>(this.baseurl+'/customerTodo',{headers:_head})
  // }
}

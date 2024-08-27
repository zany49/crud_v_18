import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TaskObject, TaskStatus } from '../../models/commonModules';
import { CustomerTODOService } from '../../service/customer-todo.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    FormsModule,
    CommonModule
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  taskName:string = '';
  taskDescription:string = '';
  taskStatus:string='';
  customerAssing:string = '';
  edittask:boolean = false;
  editTaskId:number = 0;
  taskStatusList: TaskStatus[] =[
    {value: 'notStarted', viewValue: 'Not yet started'},
    {value: 'onProcess', viewValue: 'On Process'},
    {value: 'completed', viewValue: 'Completed'},
  ]
  customerNameList: TaskStatus[] =[ ]
  todoList:TaskObject[]=[]

  constructor(private cusTodoService:CustomerTODOService){}
  ngOnInit(): void {
    this.GetCustomerList()
    this.getCustomerToDOList()
  }

  GetCustomerList(){
    this.cusTodoService.GetCustomerNameList()
    .subscribe(data =>{
      console.log("customer data---->",data)
      let d = data.map(d =>{ 
        return {value: d.userName as string, viewValue: d.userName?.toLocaleUpperCase() as string}
    })
    this.customerNameList = d
    })
  }

  getCustomerToDOList(){
    this.cusTodoService.GetCustomerToDoList()
    .subscribe(data=>{
      console.log("cusTodoService data---->",data)

      this.todoList = data
    })
  }
  
  AddTaskArray():void{
    let data:TaskObject = {
      id:0,
      taskName: this.taskName,
      customerAssing:this.customerAssing,
      taskDescription: this.taskDescription,
      taskStatus:this.taskStatus
    }
    if(this.edittask === false){
      data.id = this.todoList.length+1
    this.cusTodoService.AddCustomerToDo(data)
    .subscribe(
      {
        next: (data)=>{
          console.log("customer data---->",data)
          this.taskName = '',
          this.taskDescription = '',
          this.taskStatus = '',
          this.customerAssing = ''
          this.getCustomerToDOList()
        },
        error: err=>{
          console.error("An error occurred:", err);
          alert("An error occurred while Deleting the customer task. Please try again.");
        }
      })
    }else{
      data.id = this.editTaskId
      this.cusTodoService.EditCustomerToDo(data)
      .subscribe(
        {
          next: (data)=>{
            console.log("customer data---->",data)
            this.taskName = '',
            this.taskDescription = '',
            this.taskStatus = '',
            this.customerAssing = ''
            this.editTaskId=0
            this.edittask = false
            this.getCustomerToDOList()
          },
          error: err=>{
            console.error("An error occurred:", err);
            alert("An error occurred while updating the customer task. Please try again.");
          }
        })
    }

  }

  EditTaskArray(tdata:any){
    let fildata = this.todoList.filter(d=>d.id != tdata.id)
    this.taskName = tdata.taskName,
    this.taskDescription = tdata.taskDescription,
    this.taskStatus = tdata.taskStatus,
    this.customerAssing = tdata.customerAssing
    this.editTaskId = tdata.id
    this.edittask = true
    this.todoList = fildata
  }

  DeleteTaskArray(id:number){
    this.cusTodoService.DeleteCustomerToDo(id)
    .subscribe(
      {
        next: (data)=>{
          console.log("customer data---->",data)
          this.getCustomerToDOList()
        },
        error: err=>{
          console.error("An error occurred:", err);
          alert("An error occurred while Deleting the customer task. Please try again.");
        }
      })
  }
  
}

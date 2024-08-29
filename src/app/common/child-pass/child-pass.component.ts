import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IuserDataState, TArrayOfUsers } from '../../store/userDetails/userDetails.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-pass',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './child-pass.component.html',
  styleUrl: './child-pass.component.css'
})
export class ChildPassComponent  {
  @Input() userName!:any;
  @Input() nameObj!:any;
  @Output()dataupdater=new EventEmitter<string>()
  fruits=['Apple','Orange'];
  fruitname='';
  counts$ ?: Observable<number>;
  userDataObj$ ?: Observable<{ [key: string]: any }>;
  userDataArry$ ?: Observable<TArrayOfUsers[]>;
  constructor(
    private store:Store<{userDatas:IuserDataState}>
  ){
    this.counts$ = store.select("userDatas","count")
    this.userDataObj$ = store.select("userDatas","userData")
    this.userDataArry$ = store.select("userDatas","arrayOfUsersData")
  }
  // ngOnInit(): void {
    
  // }

  Updatefruits(){
    this.fruits.push(this.fruitname);
    this.fruitname=''
    return 'data added';

  }
}

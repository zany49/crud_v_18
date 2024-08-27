import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChildPassComponent } from '../child-pass/child-pass.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,ChildPassComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  localdata :any = JSON.parse(localStorage.getItem('userData') as string) 
  userName:string =  this.localdata?.userName
  childTITLE:string = ''
  constructor(){}
  
  
  updatetitle1(title:string) {
    this.childTITLE = title;
  }
}

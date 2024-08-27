import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-pass',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './child-pass.component.html',
  styleUrl: './child-pass.component.css'
})
export class ChildPassComponent {
  @Input() userName!:any;
  @Input() nameObj!:any;
  @Output()dataupdater=new EventEmitter<string>()
  fruits=['Apple','Orange'];
  fruitname='';
  Updatefruits(){
    this.fruits.push(this.fruitname);
    this.fruitname=''
    return 'data added';

  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPassComponent } from './child-pass.component';

describe('ChildPassComponent', () => {
  let component: ChildPassComponent;
  let fixture: ComponentFixture<ChildPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildPassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

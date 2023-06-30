import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksUsedComponent } from './stacks-used.component';

describe('StacksUsedComponent', () => {
  let component: StacksUsedComponent;
  let fixture: ComponentFixture<StacksUsedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StacksUsedComponent]
    });
    fixture = TestBed.createComponent(StacksUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

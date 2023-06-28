import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredProjectsComponent } from './filtered-projects.component';

describe('FilteredProjectsComponent', () => {
  let component: FilteredProjectsComponent;
  let fixture: ComponentFixture<FilteredProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredProjectsComponent]
    });
    fixture = TestBed.createComponent(FilteredProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

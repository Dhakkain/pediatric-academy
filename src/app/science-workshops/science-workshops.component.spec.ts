import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceWorkshopsComponent } from './science-workshops.component';

describe('ScienceWorkshopsComponent', () => {
  let component: ScienceWorkshopsComponent;
  let fixture: ComponentFixture<ScienceWorkshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceWorkshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

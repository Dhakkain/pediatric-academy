import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionSessionComponent } from './competition-session.component';

describe('CompetitionSessionComponent', () => {
  let component: CompetitionSessionComponent;
  let fixture: ComponentFixture<CompetitionSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

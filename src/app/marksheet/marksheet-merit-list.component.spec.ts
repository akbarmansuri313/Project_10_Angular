import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksheetMeritListComponent } from './marksheet-merit-list.component';

describe('MarksheetMeritListComponent', () => {
  let component: MarksheetMeritListComponent;
  let fixture: ComponentFixture<MarksheetMeritListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksheetMeritListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksheetMeritListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

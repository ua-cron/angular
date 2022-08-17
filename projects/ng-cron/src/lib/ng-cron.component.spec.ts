import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCronComponent } from './ng-cron.component';

describe('NgCronComponent', () => {
  let component: NgCronComponent;
  let fixture: ComponentFixture<NgCronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

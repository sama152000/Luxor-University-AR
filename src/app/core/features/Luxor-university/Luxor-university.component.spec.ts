/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LuxorUniversityComponent } from './Luxor-university.component';

describe('LuxorUniversityComponent', () => {
  let component: LuxorUniversityComponent;
  let fixture: ComponentFixture<LuxorUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxorUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxorUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KuliatesComponent } from './kuliates.component';

describe('KuliatesComponent', () => {
  let component: KuliatesComponent;
  let fixture: ComponentFixture<KuliatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuliatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

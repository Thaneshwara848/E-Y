import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivdrivenComponent } from './reactivdriven.component';

describe('ReactivdrivenComponent', () => {
  let component: ReactivdrivenComponent;
  let fixture: ComponentFixture<ReactivdrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivdrivenComponent]
    });
    fixture = TestBed.createComponent(ReactivdrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

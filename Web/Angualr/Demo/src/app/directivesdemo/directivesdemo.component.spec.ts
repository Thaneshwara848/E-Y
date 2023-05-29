import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesdemoComponent } from './directivesdemo.component';

describe('DirectivesdemoComponent', () => {
  let component: DirectivesdemoComponent;
  let fixture: ComponentFixture<DirectivesdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesdemoComponent]
    });
    fixture = TestBed.createComponent(DirectivesdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

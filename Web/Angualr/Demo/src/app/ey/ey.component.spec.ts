import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyComponent } from './ey.component';

describe('EyComponent', () => {
  let component: EyComponent;
  let fixture: ComponentFixture<EyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyComponent]
    });
    fixture = TestBed.createComponent(EyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

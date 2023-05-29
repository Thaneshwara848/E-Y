import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharappComponent } from './charapp.component';

describe('CharappComponent', () => {
  let component: CharappComponent;
  let fixture: ComponentFixture<CharappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharappComponent]
    });
    fixture = TestBed.createComponent(CharappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

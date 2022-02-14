import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanavigationComponent } from './nanavigation.component';

describe('NanavigationComponent', () => {
  let component: NanavigationComponent;
  let fixture: ComponentFixture<NanavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NanavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnLayoutComponent } from './learn-layout.component';

describe('LearnLayoutComponent', () => {
  let component: LearnLayoutComponent;
  let fixture: ComponentFixture<LearnLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

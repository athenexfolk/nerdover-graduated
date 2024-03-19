import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMainPageComponent } from './learn-main-page.component';

describe('LearnMainPageComponent', () => {
  let component: LearnMainPageComponent;
  let fixture: ComponentFixture<LearnMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnLessonPageComponent } from './learn-lesson-page.component';

describe('LearnLessonPageComponent', () => {
  let component: LearnLessonPageComponent;
  let fixture: ComponentFixture<LearnLessonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnLessonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnLessonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

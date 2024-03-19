import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMenuBarComponent } from './learn-menu-bar.component';

describe('LearnMenuBarComponent', () => {
  let component: LearnMenuBarComponent;
  let fixture: ComponentFixture<LearnMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnMenuBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

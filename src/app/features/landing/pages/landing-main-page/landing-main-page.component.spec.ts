import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMainPageComponent } from './landing-main-page.component';

describe('LandingMainPageComponent', () => {
  let component: LandingMainPageComponent;
  let fixture: ComponentFixture<LandingMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

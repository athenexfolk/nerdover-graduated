import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LessonService } from '../../../../core/services/lesson.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'LearnMenuBar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './learn-menu-bar.component.html',
  styleUrl: './learn-menu-bar.component.scss'
})
export class LearnMenuBarComponent {
  @Output() clickOnLink = new EventEmitter();
  ls = inject(LessonService);

  sendClick() {
    this.clickOnLink.emit();
  }
}

import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../../../layouts/navigation-bar/navigation-bar.component';
import { LearnMenuBarComponent } from '../learn-menu-bar/learn-menu-bar.component';
import { CommonModule } from '@angular/common';
import { fade } from '../../../../core/animations/fade';

@Component({
  selector: 'MobileMenuBar',
  standalone: true,
  imports: [CommonModule, NavigationBarComponent, LearnMenuBarComponent],
  templateUrl: './mobile-menu-bar.component.html',
  styleUrl: './mobile-menu-bar.component.scss',
  animations: [fade],
})
export class MobileMenuBarComponent {
  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = true;
    document.body.classList.add('overflow-hidden');
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.classList.remove('overflow-hidden');
  }

  toggleMenu() {
    this.isMenuOpen ? this.closeMenu() : this.openMenu();
  }
}

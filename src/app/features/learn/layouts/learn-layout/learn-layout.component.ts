import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from '../../../../layouts/navigation-bar/navigation-bar.component';
import { LearnMenuBarComponent } from '../learn-menu-bar/learn-menu-bar.component';
import { MobileMenuBarComponent } from '../mobile-menu-bar/mobile-menu-bar.component';

@Component({
  selector: 'app-learn-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    LearnMenuBarComponent,
    MobileMenuBarComponent
  ],
  templateUrl: './learn-layout.component.html',
  styleUrl: './learn-layout.component.scss',
})
export class LearnLayoutComponent {
}

import { Component } from '@angular/core';
import { NavButtonComponent } from '../components/nav-button/nav-button.component';

@Component({
  selector: 'NavigationBar',
  standalone: true,
  imports: [NavButtonComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

}

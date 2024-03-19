import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'NavButton',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.scss'
})
export class NavButtonComponent {
  @Input() icon: string = 'home';
  @Input() label: string = 'Home';
  @Input() to: string[] = ['/']
  @Input() exact: boolean = false;
}

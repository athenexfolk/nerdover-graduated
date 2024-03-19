import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './layouts/navigation-bar/navigation-bar.component';
import { LessonService } from './core/services/lesson.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'nerdover-graduated';

  ls = inject(LessonService);

  ngOnInit(): void {
    this.ls.loadMap();
  }
}

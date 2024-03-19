import { CommonModule } from '@angular/common';
import {
  Component,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { fade } from '../../../../core/animations/fade';
import { FormsModule } from '@angular/forms';
import { LessonService } from '../../../../core/services/lesson.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learn-main-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './learn-main-page.component.html',
  styleUrl: './learn-main-page.component.scss',
  animations: [fade],
})
export class LearnMainPageComponent {
  private ls = inject(LessonService);

  searchFilter: 'cat' | 'les' = 'les';

  lessons = computed(() =>
    this.ls
      .categoryMaps()
      ?.map((c) => {
        const { key, lessons } = c;
        return lessons.map((lesson) => ({ ...lesson, parentKey: key }));
      })
      .flat()
  );

  categories = computed(() =>
    this.ls.categoryMaps()?.map((c) => {
      const { key, label } = c;
      return { key, label };
    })
  );

  searchedLessons = signal<{ parentKey: string; key: string; label: string }[]>(
    []
  );
  searchedCategories = signal<{ key: string; label: string }[]>([]);

  isSearchFocus = false;

  searchText = '';

  enterSearchMode() {
    this.isSearchFocus = true;
  }

  cancelSearchMode() {
    this.isSearchFocus = false;
  }

  search() {
    this.searchedLessons.set([]);
    this.searchedCategories.set([]);

    this.searchedLessons.set(
      this.lessons()?.filter((l) => l.label.includes(this.searchText)) || []
    );

    this.searchedCategories.set(
      this.categories()?.filter((c) => c.label.includes(this.searchText)) || []
    );
  }
}

import {
  Component,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { Subject, map, switchMap } from 'rxjs';
import { LessonService } from '../../../../core/services/lesson.service';
import { LessonContent } from '../../../../core/models/lesson';
import { CommonModule } from '@angular/common';
import { fade } from '../../../../core/animations/fade';

@Component({
  selector: 'app-learn-lesson-page',
  standalone: true,
  imports: [CommonModule, MarkdownComponent],
  templateUrl: './learn-lesson-page.component.html',
  styleUrl: './learn-lesson-page.component.scss',
  animations: [fade],
})
export class LearnLessonPageComponent
  implements OnInit, OnDestroy
{
  private route = inject(ActivatedRoute);
  private ls = inject(LessonService);

  private destroyed$ = new Subject<void>();

  lesson = signal<LessonContent | null | undefined>(undefined);

  headings: Element[] = [];
  stopDetect = false;
  offsets: number[] = [];
  currentSpy: number | null = null;

  isSpyOpen = false;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((paramMap) => {
          this.lesson.set(null);
          const categoryId = paramMap.get('categoryId');
          const lessonId = paramMap.get('lessonId');

          if (!(categoryId && lessonId)) {
            this.lesson.set(null);
            throw new Error('Null ID');
          }
          return { categoryId, lessonId };
        }),
        switchMap(({ categoryId, lessonId }) =>
          this.ls.getLesson(categoryId, lessonId)
        )
      )
      .subscribe({
        next: (lesson) => {
          this.lesson.set(lesson);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

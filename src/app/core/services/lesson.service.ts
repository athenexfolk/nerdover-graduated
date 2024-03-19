import { Injectable, inject, signal } from '@angular/core';
import { CategoryMap } from '../models/category';
import { LessonRepositoryService } from '../repositories/lesson-repository.service';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  categoryMaps = signal<CategoryMap[] | undefined>(undefined);

  private lessonRepo = inject(LessonRepositoryService);

  loadMap() {
    this.lessonRepo.getLessonMap().subscribe((maps) => {
      this.categoryMaps.set(maps);
    });
  }

  getLesson(categoryId: string, lessonId: string) {
    return this.lessonRepo.getLesson(categoryId, lessonId);
  }
}

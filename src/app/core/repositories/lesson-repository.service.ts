import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CategoryMap } from '../models/category';
import { LessonContent } from '../models/lesson';

@Injectable({
  providedIn: 'root',
})
export class LessonRepositoryService {
  private http = inject(HttpClient);
  private readonly lessonEndpoint = '/api/lesson';

  getLessonMap = () =>
    this.http.get<CategoryMap[]>(`${this.lessonEndpoint}/map`);
    
  getLesson = (categoryId: string, lessonId: string) =>
    this.http.get<LessonContent>(
      `${this.lessonEndpoint}/lessons/${categoryId}/${lessonId}`
    );
}

import { Identifiable, Referenceable } from './identifiable';
import { Traceable } from './traceable';

export interface Lesson extends Identifiable, Referenceable, Traceable {
  label: string;
  cover?: string;
}

export interface LessonContent extends Lesson {
  content: string;
}

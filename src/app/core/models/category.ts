import { Identifiable } from './identifiable';
import { Traceable } from './traceable';

export interface Category extends Identifiable, Traceable {
  label: string;
  cover?: string;
}

interface Map {
  key: string;
  label: string;
}

export interface CategoryMap extends Map {
  lessons: Map[];
}

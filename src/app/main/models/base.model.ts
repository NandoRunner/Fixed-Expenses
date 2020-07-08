import { Timestamp } from '@firebase/firestore-types';
import { CompareModel } from './compare.model';

export interface BaseModel {
  id: string;
  type: string;
  issueDate: Timestamp;
  consumption: number;
  value: number;
  compare: CompareModel;
}
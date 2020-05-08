import { Timestamp } from '@firebase/firestore-types';

export interface BaseModel {
  id: string;
  type: string;
  issueDate: Timestamp;
  consumption: number;
  value: number;
}
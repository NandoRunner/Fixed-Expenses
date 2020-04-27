import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/services/auth.service';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { BaseModel } from '../models/base.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService extends Firestore<BaseModel> {
  serviceName: string;
  collectionName: string;
  filterName: string;
  filterValue: string;

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
  }

  protected init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.setCollection(`/users/${user.uid}/${this.collectionName}`, ref =>
          ref.orderBy('date', 'desc')
        );
        return;
      }
      this.setCollection(null);
    });
  }
}

import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "src/app/core/services/auth.service";
import { BaseService } from "./base.service";
import { FixedType } from "../models/type.enum";

@Injectable({
  providedIn: "root",
})
export class GasService extends BaseService {
  constructor(authService: AuthService, db: AngularFirestore) {
    super(authService, db);
    this.serviceName = "Gas";
    this.collectionName = "fixed";
    this.type = FixedType.gas;
    this.init();
  }
}

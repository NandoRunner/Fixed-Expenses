import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "src/app/core/services/auth.service";
import { Firestore } from "src/app/core/classes/firestore.class";
import { BaseModel } from "../models/base.model";
import { FixedType } from "../models/type.enum";
import { CompareModel } from "../models/compare.model";
import { take } from "rxjs/operators";
import { Timestamp } from "@firebase/firestore-types";

@Injectable({
  providedIn: "root",
})
export class BaseService extends Firestore<BaseModel> {
  serviceName: string;
  collectionName: string;
  type: string;
  public maxIssueDate: Timestamp;
  public myMap = new Map<string, CompareModel>();
  public lastItem: boolean = false;
  private userId: string;

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
  }

  protected init(): void {
    this.authService.authState$.subscribe((user) => {
      if (user) {
        this.userId = user.uid;
        // console.log(`Colllection: /users/${user.uid}/${this.collectionName}`);
        // console.log(`type: ${this.type}`);

        this.setCollection(`/users/${user.uid}/${this.collectionName}`, (ref) =>
          ref.where("type", "==", this.type).orderBy("issueDate", "asc")
        );

        this.loadCompare();

        if (!this.lastItem) {
          this.setCollection(
            `/users/${user.uid}/${this.collectionName}`,
            (ref) =>
              ref.where("type", "==", this.type).orderBy("issueDate", "desc")
          );
        } else {
          this.setCollection(
            `/users/${user.uid}/${this.collectionName}`,
            (ref) =>
              ref
                .where("type", "==", this.type)
                .orderBy("issueDate", "desc")
                .limit(1)
          );
        }

        this.reloadMaxIssueDate();

        return;
      }
      this.setCollection(null);
    });
  }

  private getCompareDiff(v1: number, v2: number): number {
    return Math.floor(v1 - v2);
  }

  private getComparePercentage(v1: number, v2: number): number {
    if (v1 < v2) {
      return Math.floor(((v1 - v2) / v1) * 100);
    } else {
      return Math.floor(((v1 - v2) / v2) * 100);
    }
  }

  private loadCompare(): void {
    this.getAll().forEach((a) => {
      a.forEach((b) => {
        let baseCompare: CompareModel = new CompareModel();

        let today = b.issueDate.toDate();
        let lastMonth = new Date(
          b.issueDate.toDate().setMonth(b.issueDate.toDate().getMonth() - 1)
        );
        let OneYearAgo = new Date(
          b.issueDate
            .toDate()
            .setFullYear(b.issueDate.toDate().getFullYear() - 1)
        );

        let key =
          ("0" + (today.getMonth() + 1)).toLocaleString().slice(-2) +
          "/" +
          today.getFullYear().toString();
        let keyM =
          ("0" + (lastMonth.getMonth() + 1)).toLocaleString().slice(-2) +
          "/" +
          lastMonth.getFullYear().toString();
        let keyY =
          ("0" + (OneYearAgo.getMonth() + 1)).toLocaleString().slice(-2) +
          "/" +
          OneYearAgo.getFullYear().toString();

        //console.log(key + ' M: ' + keyM + ' Y: ' + keyY);

        if (this.myMap.has(keyM)) {
          baseCompare.cLastMonth = this.getCompareDiff(
            b.consumption,
            this.myMap.get(keyM).c
          );
          baseCompare.vLastMonth = this.getCompareDiff(
            b.value,
            this.myMap.get(keyM).v
          );
        }

        if (this.myMap.has(keyY)) {
          baseCompare.cOneYearAgo = this.getCompareDiff(
            b.consumption,
            this.myMap.get(keyY).c
          );
          baseCompare.vOneYearAgo = Number(
            (b.value - this.myMap.get(keyY).v).toFixed(2)
          );
        }

        baseCompare.c = b.consumption;
        baseCompare.v = b.value;

        this.myMap.set(key, baseCompare);
      });
      //console.log(this.myMap);
    });
  }

  reloadMaxIssueDate(): void {
    this.getCollectionWithQuery(
      `/users/${this.userId}/${this.collectionName}`,
      (ref) =>
        ref.where("type", "==", this.type).orderBy("issueDate", "desc").limit(1)
    )
      .pipe(take(1))
      .subscribe((item) => {
        this.maxIssueDate = item[0].issueDate;
      });
  }
}

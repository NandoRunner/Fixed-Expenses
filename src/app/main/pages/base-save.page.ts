import { OnInit, Directive, OnDestroy, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { PageModel } from '../models/page.model';
import { TranslateService } from '@ngx-translate/core';
import { Timestamp } from '@firebase/firestore-types';

@Directive()
export class BaseSavePageDirective<T> {
  myDate: Date = new Date();
  pageTitle = '...';
  formGroup: FormGroup;
  protected page: PageModel = new PageModel();
  private baseId: string = undefined;

  protected type: string;

  protected fb: FormBuilder;
  protected navCtrl: NavController;
  protected overlayService: OverlayService;
  protected translate: TranslateService;

  constructor(
    private injectorObj: Injector,
    protected service: any
  ) {
    this.fb = this.injectorObj.get(FormBuilder);
    this.navCtrl = this.injectorObj.get(NavController);
    this.overlayService = this.injectorObj.get(OverlayService);
    this.translate = this.injectorObj.get(TranslateService);

    const name = this.service.serviceName.toLowerCase();
    this.type = this.service.type;
    this.page.titleNew = `${name}.new`;
    this.page.titleEdit = `${name}.edit`;
    this.page.navBack = `/${name}`;

    this.translate.get('page').subscribe((translation) => {
      this.page.error = translation.errorSaving;
      this.page.saving = translation.saving;
    });
  }

  protected init(itemId: any): void {
    if (!itemId) {
      this.pageTitle = this.page.titleNew;
      this.myDate = this.service.maxIssueDate.toDate();
      this.myDate.setMonth(this.myDate.getMonth() + 1);
      // this.formGroup
      //   .get('issueDate')
      //   .setValue(dt.toISOString());
      return;
    }
    this.baseId = itemId;
    this.pageTitle = this.page.titleEdit;
    this.service
      .get(itemId)
      .pipe(take(1))
      .subscribe(({ issueDate, consumption, value, type }) => {
        this.formGroup.get('id').setValue(itemId);
        this.formGroup
          .get('issueDate')
          .setValue(issueDate.toDate().toISOString());
        this.formGroup.get('consumption').setValue(consumption);
        this.formGroup.get('value').setValue(value);
        this.formGroup.get('type').setValue(type);
      });
  }

  protected createForm(): void {
    this.formGroup = this.fb.group({
      id: [''],
      issueDate: ['', [Validators.required]],
      consumption: [
        '',
        [Validators.required, Validators.min(1), Validators.max(1000)],
      ],
      value: [
        '',
        [Validators.required, Validators.min(1), Validators.max(1000)],
      ],
      type: [this.type],
    });
  }

  async onSubmit(): Promise<void> {
    this.formGroup.get('issueDate').setValue(this.myDate);

    const loading = await this.overlayService.loading({
      message: this.page.saving,
    });
    try {
      const item = !this.baseId
        ? await this.service.create(this.formGroup.value)
        : await this.service.update({
          id: this.baseId,
          ...this.formGroup.value,
        });
      this.service.deleteFieldId(item.id);
      
      this.service.reloadMax();

      console.log('chegou');
      this.navCtrl.pop();
    } catch (error) {
      console.log(this.page.error, error);
      await this.overlayService.toast({
        message: error.message,
      });
    } finally {
      loading.dismiss();
    }
  }

  ionViewDidEnter(): void {
    this.formGroup.get('issueDate').setValue(this.myDate.toISOString());
  }

  changeDate(selectedValue: any): void {
    this.myDate = new Date(selectedValue);
  }
}

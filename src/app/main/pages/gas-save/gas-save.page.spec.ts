import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GasSavePage } from './gas-save.page';

describe('GasSavePage', () => {
  let component: GasSavePage;
  let fixture: ComponentFixture<GasSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GasSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

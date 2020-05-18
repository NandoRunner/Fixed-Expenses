import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaterSavePage } from './water-save.page';

describe('WaterSavePage', () => {
  let component: WaterSavePage;
  let fixture: ComponentFixture<WaterSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaterSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

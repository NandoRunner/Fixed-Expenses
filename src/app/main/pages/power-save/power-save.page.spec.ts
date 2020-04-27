import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PowerSavePage } from './power-save.page';

describe('PowerSavePage', () => {
  let component: PowerSavePage;
  let fixture: ComponentFixture<PowerSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PowerSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

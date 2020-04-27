import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PowerListPage } from './power-list.page';

describe('PowerListPage', () => {
  let component: PowerListPage;
  let fixture: ComponentFixture<PowerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PowerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

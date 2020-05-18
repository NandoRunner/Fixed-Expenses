import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GasListPage } from './gas-list.page';

describe('GasListPage', () => {
  let component: GasListPage;
  let fixture: ComponentFixture<GasListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

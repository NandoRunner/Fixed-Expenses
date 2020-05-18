import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaterListPage } from './water-list.page';

describe('WaterListPage', () => {
  let component: WaterListPage;
  let fixture: ComponentFixture<WaterListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

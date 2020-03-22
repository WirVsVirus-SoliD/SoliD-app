import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NearByPage } from './near-by.page';

describe('NearByPage', () => {
  let component: NearByPage;
  let fixture: ComponentFixture<NearByPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NearByPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NearByPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

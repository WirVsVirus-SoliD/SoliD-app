import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpersPage } from './helpers.page';

describe('HelpersPage', () => {
  let component: HelpersPage;
  let fixture: ComponentFixture<HelpersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

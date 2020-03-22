import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperTabsPage } from './helper-tabs.page';

describe('HelperTabsPage', () => {
  let component: HelperTabsPage;
  let fixture: ComponentFixture<HelperTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelperTabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

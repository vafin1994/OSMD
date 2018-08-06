import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSelectorComponent } from './house-selector.component';

describe('HouseSelectorComponent', () => {
  let component: HouseSelectorComponent;
  let fixture: ComponentFixture<HouseSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

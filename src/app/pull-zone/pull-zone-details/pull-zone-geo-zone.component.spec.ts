import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullZoneGeoZoneComponent } from './pull-zone-geo-zone.component';

describe('PullZoneGeoZoneComponent', () => {
  let component: PullZoneGeoZoneComponent;
  let fixture: ComponentFixture<PullZoneGeoZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullZoneGeoZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullZoneGeoZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

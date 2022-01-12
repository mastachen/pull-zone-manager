import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullZoneDetailsComponent } from './pull-zone-details.component';

describe('PullZoneDetailsComponent', () => {
  let component: PullZoneDetailsComponent;
  let fixture: ComponentFixture<PullZoneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullZoneDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullZoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

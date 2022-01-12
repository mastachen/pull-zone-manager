import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullZoneListComponent } from './pull-zone-list.component';

describe('PullZoneListComponent', () => {
  let component: PullZoneListComponent;
  let fixture: ComponentFixture<PullZoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullZoneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullZoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

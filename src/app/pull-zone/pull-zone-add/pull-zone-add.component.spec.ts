import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullZoneAddComponent } from './pull-zone-add.component';

describe('PullZoneAddComponent', () => {
  let component: PullZoneAddComponent;
  let fixture: ComponentFixture<PullZoneAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullZoneAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullZoneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

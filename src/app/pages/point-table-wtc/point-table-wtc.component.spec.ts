import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTableWtcComponent } from './point-table-wtc.component';

describe('PointTableWtcComponent', () => {
  let component: PointTableWtcComponent;
  let fixture: ComponentFixture<PointTableWtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointTableWtcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointTableWtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

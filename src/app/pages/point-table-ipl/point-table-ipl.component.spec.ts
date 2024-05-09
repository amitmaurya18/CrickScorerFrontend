import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTableIplComponent } from './point-table-ipl.component';

describe('PointTableIplComponent', () => {
  let component: PointTableIplComponent;
  let fixture: ComponentFixture<PointTableIplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointTableIplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointTableIplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

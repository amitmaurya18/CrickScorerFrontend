import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTableCwcComponent } from './point-table-cwc.component';

describe('PointTableCwcComponent', () => {
  let component: PointTableCwcComponent;
  let fixture: ComponentFixture<PointTableCwcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointTableCwcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointTableCwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

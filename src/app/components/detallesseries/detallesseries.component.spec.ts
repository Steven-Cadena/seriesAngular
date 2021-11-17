import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesseriesComponent } from './detallesseries.component';

describe('DetallesseriesComponent', () => {
  let component: DetallesseriesComponent;
  let fixture: ComponentFixture<DetallesseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

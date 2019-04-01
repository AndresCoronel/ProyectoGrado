import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCompraComponent } from './plan-compra.component';

describe('PlanCompraComponent', () => {
  let component: PlanCompraComponent;
  let fixture: ComponentFixture<PlanCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

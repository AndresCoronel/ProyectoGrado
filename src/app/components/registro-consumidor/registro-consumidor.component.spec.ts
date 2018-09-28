import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroConsumidorComponent } from './registro-consumidor.component';

describe('RegistroConsumidorComponent', () => {
  let component: RegistroConsumidorComponent;
  let fixture: ComponentFixture<RegistroConsumidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroConsumidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

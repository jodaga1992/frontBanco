import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarClienteComponent } from './activar-cliente.component';

describe('ActivarClienteComponent', () => {
  let component: ActivarClienteComponent;
  let fixture: ComponentFixture<ActivarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

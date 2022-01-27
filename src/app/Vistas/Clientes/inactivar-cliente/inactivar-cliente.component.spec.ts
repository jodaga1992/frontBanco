import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivarClienteComponent } from './inactivar-cliente.component';

describe('InactivarClienteComponent', () => {
  let component: InactivarClienteComponent;
  let fixture: ComponentFixture<InactivarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactivarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

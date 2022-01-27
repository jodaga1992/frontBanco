import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarCuentaComponent } from './cancelar-cuenta.component';

describe('CancelarCuentaComponent', () => {
  let component: CancelarCuentaComponent;
  let fixture: ComponentFixture<CancelarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

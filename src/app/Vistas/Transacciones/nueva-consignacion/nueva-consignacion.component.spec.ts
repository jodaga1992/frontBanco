import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaConsignacionComponent } from './nueva-consignacion.component';

describe('NuevaConsignacionComponent', () => {
  let component: NuevaConsignacionComponent;
  let fixture: ComponentFixture<NuevaConsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaConsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaConsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

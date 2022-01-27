import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoRetiroComponent } from './nuevo-retiro.component';

describe('NuevoRetiroComponent', () => {
  let component: NuevoRetiroComponent;
  let fixture: ComponentFixture<NuevoRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoRetiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

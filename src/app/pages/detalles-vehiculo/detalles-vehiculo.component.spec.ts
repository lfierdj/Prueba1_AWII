import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVehiculoComponent } from './detalles-vehiculo.component';

describe('DetallesVehiculoComponent', () => {
  let component: DetallesVehiculoComponent;
  let fixture: ComponentFixture<DetallesVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

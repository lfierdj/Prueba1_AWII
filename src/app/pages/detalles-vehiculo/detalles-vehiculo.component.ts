import { Component, inject } from '@angular/core';
import { MotocicletaService } from '../../services/motocicleta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-vehiculo',
  standalone: true,
  imports: [],
  templateUrl: './detalles-vehiculo.component.html',
  styleUrl: './detalles-vehiculo.component.css'
})
export class DetallesVehiculoComponent {
  servicios = inject(MotocicletaService)
  ruta = inject(ActivatedRoute)
  vehiculo : any;
  

  ngOnInit(){
    this.ruta.params.subscribe(id=>{
      this.servicios.getPersonalUnico(id['idCarros']).subscribe(a=>{
        this.vehiculo = a
      })
    })
}
}

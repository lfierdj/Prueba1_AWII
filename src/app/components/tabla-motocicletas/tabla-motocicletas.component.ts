import { Component, inject } from '@angular/core';
import { MotocicletaService } from '../../services/motocicleta.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-motocicletas',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './tabla-motocicletas.component.html',
  styleUrl: './tabla-motocicletas.component.css'
})
export class TablaMotocicletasComponent {
  servicio = inject(MotocicletaService)

  motocicletas : any;
  anio ="";

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.motocicletas = p
    )

    )

  }

  
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
 busqueda:any
}

import { Component, inject } from '@angular/core';
import { ExternaService } from '../../services/externa.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-empleados',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla-empleados.component.html',
  styleUrl: './tabla-empleados.component.css'
})
export class TablaEmpleadosComponent {
  servicio = inject(ExternaService)

  empleados : any;
  marca ="";

  ngOnInit(){
    this.servicio.getEmpleados().subscribe(p=>(
      this.empleados = p
    )

    )

  }

  
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
 busqueda:any

}

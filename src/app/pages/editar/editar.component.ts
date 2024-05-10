import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MotocicletaService } from '../../services/motocicleta.service';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  id:any
  precio:any
  placa_id:any
  anio:any
  imagen:any
personal:any

servicio = inject(MotocicletaService)
route = inject(Router)
ruta = inject(ActivatedRoute)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()
    this.route.navigateByUrl("gestion")
  }
  ngOnInit(){
    this.ruta.params.subscribe( p =>{
     this.id= p['idCarros']
 
     this.servicio.getPersonalUnico(this.id).subscribe( e =>{
       this.personal= e
     })
 
 
    })
   }
}
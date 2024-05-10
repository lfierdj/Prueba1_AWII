import { Component } from '@angular/core';
import { TablaMotocicletasComponent } from '../../components/tabla-motocicletas/tabla-motocicletas.component';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [TablaMotocicletasComponent],
  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.css'
})
export class VehiculoComponent {

}

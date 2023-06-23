import { Component, OnInit } from '@angular/core';
import { PortalesService } from '../Service/Portales.service';

interface Portal {
  url: string;
  imagen: string;
  nombre: string;
  seleccionado: boolean;
}
@Component({
  selector: 'app-portales',
  templateUrl: './portales.component.html',
  styleUrls: ['./portales.component.css']
})
export class PortalesComponent implements OnInit {
  jsonData: any[] = [];

  constructor(private servicePortales: PortalesService) { }



  portalesfn() {
    console.log(this.jsonData)
  }
  ngOnInit() {
    this.servicePortales.getJsonData().subscribe((data: any) => {
      this.jsonData = data;
    });
  }
  // En tu componente
  toggleSeleccionado(item: Portal) {
    item.seleccionado = !item.seleccionado;
  }

}

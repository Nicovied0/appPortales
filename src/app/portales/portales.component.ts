import { Component, OnInit } from '@angular/core';
import { PortalesService } from '../Service/Portales.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface Portal {
  url: string;
  imagen: string;
  nombre: string;
  seleccionado: boolean;
}
@Component({
  selector: 'app-portales',
  templateUrl: './portales.component.html',
  styleUrls: ['./portales.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300)
      ])
    ])
  ]
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

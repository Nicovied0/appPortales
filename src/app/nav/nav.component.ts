import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() styleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  public mode: boolean = false
  changeStyle() {
    this.styleChange.emit(true);// Emite el evento para indicar que se debe cambiar el estilo
    this.mode = !this.mode
    console.log(this.mode,"soy mode")
  }
}

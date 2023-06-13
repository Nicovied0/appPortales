import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Output() styleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private router: Router) { }
  public mode: boolean = false

  changeStyle() {
    this.styleChange.emit(true);// Emite el evento para indicar que se debe cambiar el estilo
    this.mode = !this.mode
    console.log(this.mode, "soy mode")
  }
  goHome() {
    this.router.navigate(['/']);
  }
  goPortales() {
    this.router.navigate(['/portales']);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPortales';
  darkMode = false;

  changeStyle() {
    this.darkMode = !this.darkMode;
    console.log('Modo oscuro:', this.darkMode);
  }
}

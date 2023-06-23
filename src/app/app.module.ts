import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { PortalesComponent } from './portales/portales.component';
import { FooterComponent } from './footer/footer.component';
import { PortalesService } from './Service/Portales.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponentComponent,
    PortalesComponent,
    FooterComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [PortalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

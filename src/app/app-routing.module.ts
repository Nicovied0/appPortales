import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponentComponent } from './body-component/body-component.component';
import { PortalesComponent } from './portales/portales.component';

const routes: Routes = [
  { path: '', component: BodyComponentComponent },
  { path: 'portales', component: PortalesComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

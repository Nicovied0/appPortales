import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponentComponent } from './body-component/body-component.component';

const routes: Routes = [
  { path: '', component: BodyComponentComponent },]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

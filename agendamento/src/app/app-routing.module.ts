import { FormAgendarComponent } from './components/form-agendar/form-agendar.component';
import { FormServicosComponent } from './components/form-servicos/form-servicos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "agendar", component: FormAgendarComponent},
  {path: "servicos", component: FormServicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

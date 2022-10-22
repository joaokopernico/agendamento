import { ServiceDeleteComponent } from './components/service/service-delete/service-delete.component';
import { ServiceUpdateComponent } from './components/service/service-update/service-update.component';
import { ServiceCrudComponent } from './views/service-crud/service-crud.component';
import { ServiceCreateComponent } from './components/service/service-create/service-create.component';
import { HomeComponent } from './views/home/home.component';
// import { FormConfirmaComponent } from './components/agendamento/form-confirma/form-confirma.component';
import { CalendarioComponent } from './components/agendamento/calendario/calendario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "agendamento/agendar", component: CalendarioComponent},
  // {path: "agendamento/confirma", component: FormConfirmaComponent},
  {path: "servicos/create", component: ServiceCreateComponent},
  {path: "servicos", component: ServiceCrudComponent},
  {path: "servicos/update/:id", component: ServiceUpdateComponent},
  {path: "servicos/delete/:id", component: ServiceDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

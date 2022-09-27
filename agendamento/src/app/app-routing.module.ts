import { FormServicosComponent } from './components/form-servicos/form-servicos.component';
import { HomeComponent } from './views/home/home.component';
import { FormConfirmaComponent } from './components/agendamento/form-confirma/form-confirma.component';
import { CalendarioComponent } from './components/agendamento/calendario/calendario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "agendamento/agendar", component: CalendarioComponent},
  {path: "agendamento/confirma", component: FormConfirmaComponent},
  {path: "servicos", component: FormServicosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

<<<<<<< HEAD
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { FormServicosComponent } from './components/pages/form-servicos/form-servicos.component';
import { HomeComponent } from './views/home/home.component';
=======
import { ServiceDeleteComponent } from './components/service/service-delete/service-delete.component';
import { ServiceUpdateComponent } from './components/service/service-update/service-update.component';
import { ServiceCrudComponent } from './views/service-crud/service-crud.component';
import { ServiceCreateComponent } from './components/service/service-create/service-create.component';
import { HomeComponent } from './views/home/home.component';
// import { FormConfirmaComponent } from './components/agendamento/form-confirma/form-confirma.component';
>>>>>>> bf014050f88aa2bf017a0b8e1698efe9b19d1b58
import { CalendarioComponent } from './components/agendamento/calendario/calendario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: "login", component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  {path: "", component: HomeComponent, canActivate: [UsuarioAutenticadoGuard],
   children: [],
},
{path: "agendamento/agendar", component: CalendarioComponent, canActivate: [UsuarioAutenticadoGuard]},
{path: "servicos", component: FormServicosComponent, canActivate: [UsuarioAutenticadoGuard]},
=======
  {path: "", component: HomeComponent},
  {path: "agendamento/agendar", component: CalendarioComponent},
  // {path: "agendamento/confirma", component: FormConfirmaComponent},
  {path: "servicos/create", component: ServiceCreateComponent},
  {path: "servicos", component: ServiceCrudComponent},
  {path: "servicos/update/:id", component: ServiceUpdateComponent},
  {path: "servicos/delete/:id", component: ServiceDeleteComponent}
>>>>>>> bf014050f88aa2bf017a0b8e1698efe9b19d1b58
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

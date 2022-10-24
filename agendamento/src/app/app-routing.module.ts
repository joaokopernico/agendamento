import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { FormServicosComponent } from './components/pages/form-servicos/form-servicos.component';
import { HomeComponent } from './views/home/home.component';
import { CalendarioComponent } from './components/agendamento/calendario/calendario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {path: "login", component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  {path: "", component: HomeComponent, canActivate: [UsuarioAutenticadoGuard],
   children: [],
},
{path: "agendamento/agendar", component: CalendarioComponent, canActivate: [UsuarioAutenticadoGuard]},
{path: "servicos", component: FormServicosComponent, canActivate: [UsuarioAutenticadoGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

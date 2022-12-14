<<<<<<< HEAD
import { UsuarioService } from 'src/app/services/usuario.service';
=======
import { MatSnackBarModule } from '@angular/material/snack-bar';
>>>>>>> bf014050f88aa2bf017a0b8e1698efe9b19d1b58
import { ConfirmComponent } from './components/agendamento/confirm/confirm.component';
import { AgendamentoService } from './components/agendamento/agendamento.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './components/template/nav/nav.component';
<<<<<<< HEAD
=======
// import { FormConfirmaComponent } from './components/agendamento/form-confirma/form-confirma.component';
>>>>>>> bf014050f88aa2bf017a0b8e1698efe9b19d1b58
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './components/agendamento/calendario/calendario.component';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { HomeComponent } from './views/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { LoginComponent } from './components/pages/login/login.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

=======
import { ServiceCrudComponent } from './views/service-crud/service-crud.component';
import { ServiceCreateComponent } from './components/service/service-create/service-create.component';
import { ServiceReadComponent } from './components/service/service-read/service-read.component';
import localePt from '@angular/common/locales/pt';
import { MatTableModule } from '@angular/material/table';
import { ServiceUpdateComponent } from './components/service/service-update/service-update.component';
import { ServiceDeleteComponent } from './components/service/service-delete/service-delete.component';
>>>>>>> bf014050f88aa2bf017a0b8e1698efe9b19d1b58

registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
<<<<<<< HEAD
    HomeComponent,
    CalendarioComponent,
    ConfirmComponent,
    LoginComponent,




=======
    // FormConfirmaComponent,
    HomeComponent,
    CalendarioComponent,
    ConfirmComponent,
    ServiceCrudComponent,
    ServiceCreateComponent,
    ServiceReadComponent,
    ServiceUpdateComponent,
    ServiceDeleteComponent
>>>>>>> bf014050f88aa2bf017a0b8e1698efe9b19d1b58
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    RouterModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCommonModule,
    HttpClientModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    MatSnackBarModule


=======
    MatSnackBarModule,
    MatTableModule
>>>>>>> bf014050f88aa2bf017a0b8e1698efe9b19d1b58
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './components/template/nav/nav.component';
import { FormConfirmaComponent } from './components/agendamento/form-confirma/form-confirma.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './components/agendamento/calendario/calendario.component';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { HomeComponent } from './views/home/home.component';

registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FormConfirmaComponent,
    HomeComponent,
    CalendarioComponent


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


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

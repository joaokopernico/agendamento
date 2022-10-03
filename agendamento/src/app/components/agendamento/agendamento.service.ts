import { ConfirmComponent } from './confirm/confirm.component';
import { Agendamento } from './agendamento.model';
import { CalendarioComponent } from './calendario/calendario.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  baseUrl: string = 'http://localhost:3000/'

  constructor(private dialog: MatDialog, private http: HttpClient) { }


EscolheDia(dia: number) {
}

readById(servico: string, id: string): Observable<any> {
  const url = `${this.baseUrl}${servico}/${id}`
    return this.http.get<any>(url)
    }

// openDialog() {
//   const dialogConfig = new MatDialogConfig();

//   dialogConfig.disableClose = true;
//   dialogConfig.autoFocus = true;

//   this.dialog.open(CalendarioComponent, dialogConfig)

// }

}

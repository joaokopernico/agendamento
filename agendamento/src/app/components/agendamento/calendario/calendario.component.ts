import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from './../agendamento.model';
import { ConfirmComponent } from '../confirm/confirm.component';
import { AgendamentoService } from './../agendamento.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];
  mes: any;
  idhorario: any;
  idpagamento: any;
  idservico: any
  idcliente: any


  constructor(
    private http: HttpClient,
     private agendamentoService: AgendamentoService,
     private router: Router,
     private dialog: MatDialog
     ) { }

     openDialog(dia: any): void {


      const dialogRef = this.dialog.open(ConfirmComponent, {
        width: '250px',
        data: {dia, mes: this.mes, idhorario: this.idhorario, idpagamento: this.idpagamento, idservico: this.idservico,
        idcliente: this.idcliente}      //
     });

       dialogRef.afterClosed().subscribe(result => {
        console.log('Diálogo Fechado');

        console.log(result)



      })

  }

  ngOnInit() {
    this.construirCalendario();



  }

  construirCalendario() {
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();

    const primeiroDiaDaSemana = 0; // domingo
    const ultimoDiaDaSemana = 6; // sábado

    // Vai subtraindo -1 até chegarmos no primeiro dia da semana
    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay() !== primeiroDiaDaSemana) {
      dataInicial.setDate(dataInicial.getDate() - 1);
    }

    // Vai somando +1 até chegarmos no último dia da semana
    const dataFinal = new Date(ano, mes + 1, 0);
    while (dataFinal.getDay() !== ultimoDiaDaSemana) {
      dataFinal.setDate(dataFinal.getDate() + 1);
    }

    this.diasCalendario = [];
    for (
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
      this.diasCalendario.push(new Date(data.getTime()));
    }
  }

  alterarMes(offsetMes: number) {
      this.dataAtual.setMonth(this.dataAtual.getMonth() + offsetMes);
      this.dataAtual = new Date(this.dataAtual.getTime());
      this.construirCalendario();
  }

  showServices(id: string) {

      this.showServices = this.agendamentoService.showServices


      }

}

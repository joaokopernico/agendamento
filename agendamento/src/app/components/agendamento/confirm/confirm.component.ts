import { Agendamento } from './../agendamento.model';
import { CalendarioComponent } from '../calendario/calendario.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogConfig } from '@angular/cdk/dialog';
import { formatDate, UpperCasePipe } from '@angular/common';
import { AgendamentoService } from './../agendamento.service';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {




 description: string = 'KOASDOKASKODKSOA'

 dataD: string = ''

 servicos: any = {
  nome: '',
  descricao: '',
  valor: 0,
  duracao: 0 }

selectService: string = ''
selectPagamento: string = ''
selectHorario: string = ''

horarios: any = {
  horas: ''
}

pagamentos: any = {
  nome_pagamento: ''
}



  constructor(
  //  private fb:FormBuilder,
    private dialogRef: MatDialogRef<CalendarioComponent>,
    private AgendamentoService: AgendamentoService,
    @Inject(MAT_DIALOG_DATA) private data: {dia: any, mes: any, idhorario: any, idpagamento: any,
    idservico: any}, private matDialogRef:
    MatDialogRef<ConfirmComponent>

  ){





       }

  ngOnInit(): void {

     // NECESSÁRIO FAZER CALLBACK PARA ESPERAR RETORNO DO OBSERVABLE

     this.data.mes = formatDate(this.data.dia, 'MM', 'pt-Br')
     this.data.dia = formatDate(this.data.dia, 'dd', 'pt-Br')


     this.dataD = this.data.dia + '/' + this.data.mes
     console.log(this.data.dia)
     console.log(this.data.mes)
     this.servicos = this.AgendamentoService.readById('servico', '').subscribe(val => this.servicos = val)
     this.horarios = this.AgendamentoService.readById('horario', '').subscribe(val => this.horarios = val)
     this.pagamentos = this.AgendamentoService.readById('forma_de_pagamento', '').subscribe(val => this.pagamentos = val)

     //console.log(this.servicos)




  }

  save(idhorario: string, pagamento: string, idservico: string) {
    this.data.idpagamento = pagamento
    this.data.idservico = idservico
    this.data.idhorario = idhorario
    this.dialogRef.close(this.data)




  }

  showServices() {
    console.log(this.servicos)

  }


}


//ngOnDestroy(){
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
 // this.matDialogRef.close(this.data)
//}

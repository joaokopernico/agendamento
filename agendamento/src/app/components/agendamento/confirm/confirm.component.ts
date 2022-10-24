import { IUsuario } from './../../../interfaces/Iusuario';
import { Agendamento } from './../agendamento.model';
import { CalendarioComponent } from '../calendario/calendario.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogConfig } from '@angular/cdk/dialog';
import { formatDate, UpperCasePipe } from '@angular/common';
import { AgendamentoService } from './../agendamento.service';
import { timeout } from 'rxjs';
import { UsuarioService } from './../../../services/usuario.service';
import { HttpClient } from '@angular/common/http';


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

agendamento: any = {
    "id": '',
    "id_cliente": '',
    "id_servico": '',
    "dia_agend": '',
    "mes_agend": '',
    "id_horario": '',
    "status": '',
    "observacao": "Cabelo longo",
    "id_pagamento": ''
}

usuario: any = localStorage.getItem('usuario')

  constructor(
  //  private fb:FormBuilder,
    private dialogRef: MatDialogRef<CalendarioComponent>,
    private agendamentoService: AgendamentoService,
    private usuarioService: UsuarioService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) private data: {
      idcliente: string;dia: any, mes: any, idhorario: any, idpagamento: any,
    idservico: any}, private matDialogRef:
    MatDialogRef<ConfirmComponent>

  ){





       }

  ngOnInit(): void {

     // NECESSÁRIO FAZER CALLBACK PARA ESPERAR RETORNO DO OBSERVABLE

     this.data.mes = formatDate(this.data.dia, 'MM', 'pt-Br')
     this.data.dia = formatDate(this.data.dia, 'dd', 'pt-Br')


     this.dataD = this.data.dia + '/' + this.data.mes

     this.servicos = this.agendamentoService.readById('servico', '').subscribe(val => this.servicos = val)
     this.horarios = this.agendamentoService.readById('horario', '').subscribe(val => this.horarios = val)
     this.pagamentos = this.agendamentoService.readById('forma_de_pagamento', '').subscribe(val => this.pagamentos = val)
     this.agendamento = this.http.get('http://localhost:3000/agendamento').subscribe(val => this.agendamento = val)
     console.log(this.validaHorario())







  }

  validaHorario() {
   setTimeout(() => {
    var i = 0
    for (const el of this.agendamento) {
     // console.log(el)

      if(el.dia_agend == this.data.dia) {
        console.log('ACHEI O DIA')
        if(el.mes_agend == this.data.mes) {
          setTimeout(() => {
            this.horarios = this.horarios.id.filter()
          }, 200);
          }} else {i++ }
        }
   }, 200);
  }

  save(idhorario: string, pagamento: string, idservico: string) {
    this.data.idpagamento = pagamento
    this.data.idservico = idservico
    this.data.idhorario = idhorario
    this.data.idcliente = this.usuarioService.obterIdUsuarioLogado
    this.dialogRef.close(this.data)



  }


}






//ngOnDestroy(){
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
 // this.matDialogRef.close(this.data)
//}

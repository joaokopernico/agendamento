import { IUsuario } from './../../../interfaces/Iusuario';
import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService : UsuarioService,
    private snackbar: MatSnackBar,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.criarForm();


  }

  criarForm(){
    this.formLogin = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
  }


  logar(){

    var dados: any = this.http.get(`http://localhost:3000/cliente/`).subscribe( val => dados = val)


    setTimeout(() => {
      if(this.formLogin.invalid) return
      var usuario = this.formLogin.getRawValue() as IUsuario


      this.usuarioService.logar(usuario, dados).subscribe((response) => {
        if(!response.sucesso){
          this.snackbar.open('Falha na autenticação', 'Usuário ou senha incorretos', {
            duration: 500
          })
        }
      })
    }, 500);
  }


}

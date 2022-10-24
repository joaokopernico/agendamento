import { IUsuario } from './../interfaces/Iusuario';
import { NgxLoadingModule } from 'ngx-loading';
import { LoginComponent } from './../components/pages/login/login.component';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

//const apiUrlUsuario = environment.apiUrl + "Usuario";

var dados: any = ''

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = 'http://localhost:3000/cliente'


  constructor(private http: HttpClient,
    private router: Router
    ) {
  }


logar(usuario: IUsuario, dados: any) : Observable<any> {



    return this.mockUsuarioLogin(usuario, dados).pipe(tap((resposta) => {
    if(!resposta.sucesso) return;
    localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")))
    this.router.navigate([''])
    console.log(localStorage.getItem('usuario'))

   }))




}


  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.


private mockUsuarioLogin(usuario: IUsuario, dados: any): Observable<any> {
  var retornoMock: any = []

  // var loginDataList = this.httpClient.get(this.baseUrl)
  // console.log(loginDataList)

  // var jsonStringE = JSON.stringify(loginDataList).indexOf('email');





  if(this.valida(usuario, dados) == true){

    retornoMock.sucesso = true
    retornoMock.usuario = usuario
    retornoMock.token = "TokenQueSeriaGeradoPelaAPI"
    return of(retornoMock);
  }

  retornoMock.sucesso = false
    retornoMock.usuario = usuario
    return of(retornoMock)

}

public loading: boolean = false




valida(usuario: IUsuario, dados: any): boolean {
  var i = 0
   // Object.keys(dados).forEach(el => {

     for (const el of dados) {
      console.log(el)
      if(el.email == usuario.email) {
        if(el.senha == usuario.senha) {
          i = -1
          localStorage.setItem('usuario', btoa(JSON.stringify(el)))
          break }} else {i++ }
        }
  //console.log(i)
  if(i != -1) {
    return false

  } else return true }


deslogar(){
  localStorage.clear()
  this.router.navigate(['login'])
}
get obterUsuarioLogado(): IUsuario {
  return localStorage.getItem('usuario')
  ? JSON.parse(atob(localStorage.getItem('usuario') || ''))
  : null
}

get obterIdUsuarioLogado(): string {
  return localStorage.getItem('usuario')
  ? (JSON.parse(atob(localStorage.getItem('usuario') || '')) as IUsuario).id
  : null!
}

get obterTokenUsuario(): string {
  return localStorage.getItem('token')
  ? JSON.parse(atob(localStorage.getItem('token') || ''))
  : null
}



get logado(): boolean {
  return localStorage.getItem('token') ? true : false;
}

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}


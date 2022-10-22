import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Service } from './service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = "http://localhost:3000/servico"

  constructor(
    private snackBar: MatSnackBar,
    private http:HttpClient
    ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(service: Service): Observable<Service> {
    return this.http.post<Service>(this.baseUrl,service)
  }

  read(): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseUrl);
  }

  readById(id: string): Observable<Service> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Service>(url);
  }

  update(service: Service): Observable<Service> {
    const url = `${this.baseUrl}/${service.id}`
    return this.http.put<Service>(url, service)
  }

  delete(id: number): Observable<Service> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Service>(url)
  }
}

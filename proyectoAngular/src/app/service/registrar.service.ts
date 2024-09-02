import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http:HttpClient) { }

  registrar(cliente:Cliente):Observable<any>{
    let url="http://localhost:8000/registrar";
    return this.http.post(url,cliente);
  }
}

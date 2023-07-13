import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  backendURL = 'https://jthmarquez-backendportfolio.onrender.com/';
    apiURL = enviroment.URL + 'educacion/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Educacion[]> {
      return this.httpClient.get<Educacion[]>(this.apiURL + 'lista');
    }
  
    public detail(id: number): Observable<Educacion> {
      return this.httpClient.get<Educacion>(this.apiURL + `detail/${id}`);
    }
  
    public save(educacion: Educacion): Observable<any> {
      return this.httpClient.post<any>(this.apiURL + 'create', educacion);
    }
  
    public update(id: number, educacion: Educacion): Observable<any> {
      return this.httpClient.put<any>(this.apiURL + `update/${id}`, educacion);
    }
  
    public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.apiURL + `delete/${id}`);
    }
  
    public backendEndpoint(): string {
      return this.backendURL;
    
      }
    }
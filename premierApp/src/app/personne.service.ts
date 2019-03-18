import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private InsetUrl = 'http://localhost:8084/api/addpersonnes';
  private getUrl = 'http://localhost:8084/api/personnes';

  CONFIG = {
	  HTTP_OPTIONS : {
	    headers: new HttpHeaders({
	      'Content-Type': 'application/x-www-form-urlencoded',
	    })
	  }
  };

  constructor(private http: HttpClient) { }

  createPersonne(person: any): Observable<any> {
    return this.http.post(this.InsetUrl,person ); 
   }

  getpersonneList(): Observable<any> {
    return this.http.get(this.getUrl);
  } 
}

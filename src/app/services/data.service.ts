import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers: HttpHeaders = new HttpHeaders(
		{'Content-Type': 'application/json'}
	)

	constructor(private http: HttpClient) {}

	get(url: string): Observable<any> {
		return this.http.get<any>(url, {headers: this.headers})
	}

	post(url: string, data: any): Observable<any> {
		return this.http.post(url, data, {headers: this.headers})
	}

	put(url: string, data: any): Observable<any> {
		return this.http.put(url, data, {headers: this.headers})
	}

	delete(url: string): Observable<any> {
		return this.http.delete(url, {headers: this.headers})
	}
}

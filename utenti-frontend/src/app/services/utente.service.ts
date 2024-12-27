import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Utente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  dataNascita: string;
}

@Injectable({
  providedIn: 'root',
})
export class UtenteService {
  private apiUrl = 'http://localhost:8080/api/utenti';

  constructor(private http: HttpClient) {}

  getUtenti(page: number, size: number): Observable<{ content: Utente[]; totalElements: number }> {
    return this.http.get<{ content: Utente[]; totalElements: number }>(
      `${this.apiUrl}?page=${page}&size=${size}`
    );
  }

  createUtente(utente: Partial<Utente>): Observable<Utente> {
    return this.http.post<Utente>(this.apiUrl, utente);
  }

  updateUtente(id: number, utente: Partial<Utente>): Observable<Utente> {
    return this.http.put<Utente>(`${this.apiUrl}/${id}`, utente);
  }

  deleteUtente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Utente, UtenteService } from '../../services/utente.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UtenteDialogComponent } from '../utente-dialog/utente-dialog.component';
import {MatCardModule} from '@angular/material/card'; 
import { UserDetailsDialogComponent } from '../user-details-dialog/user-details-dialog.component';
import { UserDeleteDialogComponent } from '../user-delete-dialog/user-delete-dialog.component';

@Component({
  selector: 'app-utenti',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule
  ],
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css'],
})
export class UtentiComponent implements OnInit {
  utenti: Utente[] = [];
  displayedColumns: string[] = ['nome', 'cognome', 'azioni'];
  totalElements = 0;
  pageSize = 5;
  currentPage = 0;

  constructor(private utenteService: UtenteService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadUtenti();
  }

  loadUtenti(): void {
    this.utenteService.getUtenti(this.currentPage, this.pageSize).subscribe((data) => {
      this.utenti = data.content;
      this.totalElements = data.totalElements;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUtenti();
  }

  createOrEditUtente(utente?: Utente): void {
    const dialogRef = this.dialog.open(UtenteDialogComponent, {
      width: '400px',
      data: utente ? { ...utente } : { nome: '', cognome: '', email: '', dataNascita: '' },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (utente) {
          // Update utente
          this.utenteService.updateUtente(utente.id, result).subscribe(() => this.loadUtenti());
        } else {
          // Create utente
          this.utenteService.createUtente(result).subscribe(() => this.loadUtenti());
        }
      }
    });
  }

  // Funzione per aprire il dialogo con i dettagli dell'utente
  openUserDetailsDialog(utente: any): void {
    this.dialog.open(UserDetailsDialogComponent, {
      data: utente // Passa i dati dell'utente al dialogo
    });
  }

  openDeleteDialog(utenteId: number): void {
    const dialogRef = this.dialog.open(UserDeleteDialogComponent);  // Usa il componente giusto

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUtente(utenteId);
      }
    });
  }

  deleteUtente(utenteId: number): void {
    this.utenteService.deleteUtente(utenteId).subscribe(() => {
      this.loadUtenti();  // Ricarica la lista degli utenti dopo l'eliminazione
    });
  }

  // Funzioni per creare/aggiornare utenti possono essere aggiunte qui
}

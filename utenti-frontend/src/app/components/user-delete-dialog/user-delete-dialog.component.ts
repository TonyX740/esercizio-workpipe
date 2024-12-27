import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-delete-dialog',
  templateUrl: './user-delete-dialog.component.html',
  styleUrls: ['./user-delete-dialog.component.css'],
  imports: [
      MatCardModule,
      MatDialogModule,
      CommonModule,
      MatButtonModule
    ]
})
export class UserDeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<UserDeleteDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);  // Chiude il dialogo e restituisce "true"
  }

  onCancel(): void {
    this.dialogRef.close(false); // Chiude il dialogo e restituisce "false"
  }
}

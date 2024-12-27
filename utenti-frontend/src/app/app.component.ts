import { Component } from '@angular/core';
import { UtentiComponent } from './components/utenti/utenti.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UtentiComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Gestione Utenti';
}

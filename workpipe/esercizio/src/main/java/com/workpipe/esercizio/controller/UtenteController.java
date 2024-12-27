package com.workpipe.esercizio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import com.workpipe.esercizio.model.Utente;
import com.workpipe.esercizio.service.UtenteService;

@RestController // Indica che questa classe è un controller REST
@RequestMapping("/api/utenti")  // Mappa tutte le richieste in entrata a "/api/utenti"
@CrossOrigin(origins = "http://localhost:4200") // Permette richieste dal frontend Angular
public class UtenteController {

  @Autowired  // Inietta automaticamente un'istanza di UtenteService
  private UtenteService utenteService;

  // Ottieni tutti gli utenti con paginazione
  @GetMapping // Mappa le richieste GET a questo metodo
  public Page<Utente> getAllUtenti(@RequestParam(defaultValue = "0") int page,
      @RequestParam(defaultValue = "10") int size) {  // Imposta valori predefiniti per pagina e dimensione della pagina
    return utenteService.getAllUtenti(page, size);
  }

  // Ottieni un utente per ID
  @GetMapping("/{id}")  // Mappa le richieste GET a "/{id}" a questo metodo
  public Utente getUtenteById(@PathVariable Long id) {
    return utenteService.getUtenteById(id);
  }

  // Crea un nuovo utente
  @PostMapping  // Mappa le richieste POST a questo metodo
  public Utente createUtente(@RequestBody Utente utente) {
    return utenteService.createUtente(utente);
  }

  // Aggiorna un utente esistente
  @PutMapping("/{id}")  // Mappa le richieste PUT a "/{id}" a questo metodo
  public Utente updateUtente(@PathVariable Long id, @RequestBody Utente utenteDetails) {
    return utenteService.updateUtente(id, utenteDetails);
  }

  // Elimina un utente
  @DeleteMapping("/{id}") // Mappa le richieste DELETE a "/{id}" a questo metodo
  public void deleteUtente(@PathVariable Long id) {
    utenteService.deleteUtente(id);
  }
}

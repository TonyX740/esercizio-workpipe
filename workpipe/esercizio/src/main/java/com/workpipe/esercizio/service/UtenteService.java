package com.workpipe.esercizio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.workpipe.esercizio.model.Utente;
import com.workpipe.esercizio.repository.UtenteRepository;

@Service  // Indica che questa classe è un servizio Spring
public class UtenteService {

  @Autowired  // Iniezione di UtenteRepository
  private UtenteRepository utenteRepository;

  public Page<Utente> getAllUtenti(int page, int size) {  // Metodo per ottenere tutti gli utenti paginati
    Pageable pageable = PageRequest.of(page, size, Sort.by("nome").ascending()); // Ordinato per nome
    return utenteRepository.findAll(pageable);
  }

  public Utente getUtenteById(Long id) {  // Metodo per ottenere un utente per ID
    return utenteRepository.findById(id).orElse(null);
  }

  public Utente createUtente(Utente utente) {  // Metodo per creare un nuovo utente
    return utenteRepository.save(utente);
  }

  public Utente updateUtente(Long id, Utente utenteDetails) { //aggiorna un utente esistente. Se l'utente non viene trovato, restituisce null
    Utente utente = utenteRepository.findById(id).orElse(null);
    if (utente != null) {
      utente.setNome(utenteDetails.getNome());
      utente.setCognome(utenteDetails.getCognome());
      utente.setEmail(utenteDetails.getEmail());
      utente.setDataNascita(utenteDetails.getDataNascita());
      return utenteRepository.save(utente);
    }
    return null;
  }

  public void deleteUtente(Long id) { //elimina un utente dal database per ID.
    utenteRepository.deleteById(id);
  }
}

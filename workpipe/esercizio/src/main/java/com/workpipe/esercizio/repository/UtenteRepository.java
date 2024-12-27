package com.workpipe.esercizio.repository;

import com.workpipe.esercizio.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository // Indica che questa interfaccia è un componente di Spring che fornisce l'accesso ai dati.
public interface UtenteRepository extends JpaRepository<Utente, Long> { // Estende JpaRepository per fornire operazioni CRUD di base su Utente.
  // Paginazione e ordinamento
  @NonNull
  Page<Utente> findAll(@NonNull Pageable pageable); // Restituisce una pagina di Utente, con la possibilità di specificare la pagina e la dimensione della pagina.
}

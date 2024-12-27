package com.workpipe.esercizio.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity //indica che questa classe è un'entità JPA, ovvero una classe che verrà mappata su una tabella del database
@Table(name = "utenti") //specifica il nome della tabella nel database
public class Utente {

  @Id //indica che il campo seguente è la chiave primaria della tabella
  @GeneratedValue(strategy = GenerationType.IDENTITY) //indica che il valore della chiave primaria verrà generato automaticamente dal database
  private Long id;

  //I campi nome, cognome, email e dataNascita rappresentano le colonne della tabella.

  @Column(nullable = false) //indica che il campo non può essere nullo
  private String nome;

  @Column(nullable = false)
  private String cognome;

  @Column(nullable = false, unique = true)  //indica che il campo non può essere nullo e deve essere unico
  private String email;

  @Column(nullable = false)
  private LocalDate dataNascita;

  // Getters e Setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getCognome() {
    return cognome;
  }

  public void setCognome(String cognome) {
    this.cognome = cognome;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public LocalDate getDataNascita() {
    return dataNascita;
  }

  public void setDataNascita(LocalDate dataNascita) {
    this.dataNascita = dataNascita;
  }
}

package com.project.ProjectIonic;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "personne")
public class Personne implements Serializable {

	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	 @Column(name = "prenom")
	private String prenom;
	 @Column(name = "nom")
	private String nom;
	 public Personne() {
			super();
			// TODO Auto-generated constructor stub
		}
	public Personne(String nom, String prenom) {
		 
		this.prenom=prenom;
		this.nom=nom;
		}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;

	}

	public String getPrenom() {

		return this.prenom;

	}

	public void setPrenom(String prenom) {

		this.prenom = prenom;

	}

	public String getNom() {

		return this.nom;

	}

	public void setNom(String nom) {

		this.nom = nom;

	}
}
import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
 public personne: Personne = new Personne();
  submitted=false; 
  constructor(private pservice : PersonneService) { }

  ngOnInit() {
  } 
   
 
  save() {
    this.pservice.createPersonne(this.personne);
    console.log(this.personne.nom);
     this.personne = new Personne();
    
}}

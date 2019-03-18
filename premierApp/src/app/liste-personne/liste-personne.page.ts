import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';
@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.page.html',
  styleUrls: ['./liste-personne.page.scss'],
})
export class ListePersonnePage implements OnInit {
  public personne: Array<any>;
  cars: Array<any>;
  constructor(private pservice : PersonneService) { }

  ngOnInit() {
    this.pservice.getpersonneList().subscribe(data => {
      this.personne = data;
    });
  
  }
 
}

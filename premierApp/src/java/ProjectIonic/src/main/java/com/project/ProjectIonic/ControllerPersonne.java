package com.project.ProjectIonic;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController 
@RequestMapping("/api")
public class ControllerPersonne {
	@Autowired
	PersonneRepository repository;
	@PostMapping(value = "/addpersonnes")
	public ResponseEntity<Personne> postPersonne( Personne personne) {
		try {
			Personne ppersonne = repository.save(new Personne(personne.getNom, personne.getPrenom));
			return new ResponseEntity<>(ppersonne, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
 }
	 @GetMapping("/personnes")
	  public ResponseEntity<List<Personne>> getAllPeronnes() {
	    List<Personne> customers = new ArrayList<>();
	    try {
	      repository.findAll().forEach(customers::add);
	      
	      if (customers.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	      }
	      return new ResponseEntity<>(customers, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  
}
	 @RequestMapping("/findall")
		public String findAll(){
			String result = "<html>";
			
			for(Personne cust : repository.findAll()){
				result += "<div>" + cust.getNom() + "</div>";
			}
			
			return result + "</html>";
		}
	 }

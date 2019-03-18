package com.project.ProjectIonic;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PersonneRepository extends CrudRepository<Personne, Long>{
	List<Personne> findByNom(String nom);
}

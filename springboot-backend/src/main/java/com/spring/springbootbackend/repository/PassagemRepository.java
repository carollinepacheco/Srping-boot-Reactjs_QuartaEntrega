package com.spring.springbootbackend.repository;

import com.spring.springbootbackend.model.Passagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassagemRepository extends JpaRepository<Passagem, Long> {
    // crud completo database methods


}

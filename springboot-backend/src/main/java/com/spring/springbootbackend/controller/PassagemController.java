package com.spring.springbootbackend.controller;

import com.spring.springbootbackend.repository.PassagemRepository;
import com.spring.springbootbackend.exception.ResourceNotFoundException;
import com.spring.springbootbackend.model.Passagem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/passagens")
public class PassagemController {

    @Autowired
    private PassagemRepository passagemRepository;

    @GetMapping
    public List<Passagem> getAllPassagens(){
        return passagemRepository.findAll();
    }

    // create passagem REST API

    @PostMapping
    public Passagem createPassagem(@RequestBody Passagem passagem) {
        return passagemRepository.save(passagem);
    }

    // get passagem by id REST API

    @GetMapping("{id}")
    public ResponseEntity<Passagem> getPassagemById(@PathVariable long id) {
        Passagem passagem = passagemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Passagem não existe com id: " + id));
        return ResponseEntity.ok(passagem);
    }

    // update passagem REST API

    @PutMapping("{id}")
    public ResponseEntity<Passagem> updatePassagem(@PathVariable long id, @RequestBody Passagem detalhesPassagem) {
        Passagem updatePassagem = passagemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Passagem não existe com id: " + id));

        updatePassagem.setDestino(detalhesPassagem.getDestino());
        updatePassagem.setData(detalhesPassagem.getData());
        updatePassagem.setHorario(detalhesPassagem.getHorario());

        passagemRepository.save(updatePassagem);

        return ResponseEntity.ok(updatePassagem);
    }

    // delete passagem REST API

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deletePassagem(@PathVariable long id){
        Passagem passagem = passagemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Passagem não existe com id: " + id));

        passagemRepository.delete(passagem);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

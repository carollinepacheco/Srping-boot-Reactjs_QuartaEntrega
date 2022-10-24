package com.spring.springbootbackend;

import com.spring.springbootbackend.repository.PassagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private PassagemRepository passagemRepository;

	@Override
	public void run(String... args) throws Exception {
//		Passagem passagem = new Passagem();
//		passagem.setDestino("Pernambuco");
//		passagem.setData("2022-10-30");
//		passagem.setHorario("17:00");
//		passagemRepository.save(passagem);
//
//		Passagem passagem1 = new Passagem();
//		passagem1.setDestino("Goiânia");
//		passagem1.setData("2022-12-01");
//		passagem1.setHorario("08:00");
//		passagemRepository.save(passagem1);
	}
}

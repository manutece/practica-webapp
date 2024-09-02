package com.market.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.market.model.Cliente;

public interface ClientesRepository extends JpaRepository<Cliente, String> {
	Cliente findByUsuarioAndPassword(String usuario, String password);
}

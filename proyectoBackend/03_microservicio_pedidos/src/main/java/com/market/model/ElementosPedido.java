package com.market.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "elementopedido")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ElementosPedido {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idElementoPedido;
	@ManyToOne()
	@JoinColumn(name="idProductoFk", referencedColumnName = "idProducto")
	private Producto producto;
	private int idPedidoFk;
	private int unidades;
}

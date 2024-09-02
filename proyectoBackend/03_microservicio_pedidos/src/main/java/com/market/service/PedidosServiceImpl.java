package com.market.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.market.model.ElementosPedido;
import com.market.model.Pedido;
import com.market.repository.ElementosPedidosRepository;
import com.market.repository.PedidosRepository;

@Service
public class PedidosServiceImpl implements PedidosService{
	String urlProductos = "http://localhost:8001/";
	@Autowired
	RestTemplate restTemplate;
	@Autowired
	PedidosRepository pedidosRepository;
	@Autowired
	ElementosPedidosRepository elementosPedidosRepository;
	
	@Override
	public List<Pedido> pedidosUsuario(String usuario) {
		return pedidosRepository.findByUsuario(usuario);
	}

	@Override
	public Pedido guardarPedido(List<ElementosPedido> elementosPedido, String usuario) {
		try {
			//creamos el obj y lo guardamos
			Pedido pedido = new Pedido(0, usuario, new Date(), "pendiente", null);
			Pedido p = pedidosRepository.save(pedido);
			//guardamos los obj elementosPedido
			elementosPedido.forEach(e->{
				e.setIdPedidoFk(p.getIdPedidos());
				elementosPedidosRepository.save(e);
				//guardamos elementosPedido, actualiza el producto correspondiente llamando al recurso del microservicio de productos
				UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(urlProductos + "producto")
				.queryParam("idProducto", e.getProducto().getIdProducto())
				.queryParam("unidades", e.getUnidades());
				restTemplate.put(builder.toUriString(), null);
			});
			return pedido;
		} catch (Exception e) {
			return null;
		}
		
	}

}

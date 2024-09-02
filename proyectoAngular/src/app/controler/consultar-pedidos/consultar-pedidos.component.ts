import { MenuComponent } from './../menu/menu.component';
import { Pedido } from '../../model/Pedido';
import { ConsultarPedidoService } from './../../service/consultar-pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrl: './consultar-pedidos.component.css'
})
export class ConsultarPedidosComponent implements OnInit{
  pedidos:Pedido[];
  usuario:string;
  constructor(private consultarPedidoService:ConsultarPedidoService, private menuComponent:MenuComponent){}

  ngOnInit(): void {
    this.usuario = this.menuComponent.cliente.usuario;
    this.consultarPedidoService.consultarPedidos(this.usuario).subscribe(p=>this.pedidos=p);
  }

}

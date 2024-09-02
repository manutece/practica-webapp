import { Cliente } from './../../model/Cliente';
import { MenuComponent } from './../menu/menu.component';
import { Producto } from './../../model/Producto';
import { ProcesarPedidoService } from './../../service/procesar-pedido.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../model/Categoria';
import { CestaItem } from '../../model/CestaItem';

@Component({
  selector: 'app-procesar-pedido',
  templateUrl: './procesar-pedido.component.html',
  styleUrl: './procesar-pedido.component.css'
})
export class ProcesarPedidoComponent implements OnInit{
  categorias:Categoria[];
  productos:Producto[];
  idCategoriaSel:number;
  cesta:CestaItem[];
  constructor(private procesarPedidoService:ProcesarPedidoService, private menuComponent:MenuComponent){

  }
  ngOnInit(): void {
    this.procesarPedidoService.categorias().subscribe(c=>this.categorias=c);
    this.cesta=[];
  }

  productosCategoria(){
    this.procesarPedidoService.productosCategorias(this.idCategoriaSel).subscribe(p=>
      {
        this.productos=p;
        this.actualizarStocks();
      });
  }
  actualizarStocks() {
    this.productos.forEach(p => {
      this.cesta.forEach(c => {
        if(p.idProducto == c.producto.idProducto){
          p.stock = p.stock - c.unidades;
        }
      });
    });
  }

  agregarProductoCesta(producto:Producto){
    if(producto.unidades <= producto.stock){
      let item = new CestaItem();
      item.producto = producto;
      item.unidades = producto.unidades;
      producto.stock = producto.stock - producto.unidades;
      this.cesta.push(item);
    } else {
      alert("No hay suficiente stock!");
    }
  }

  eliminarProductoCesta(pos:number){
    let item = this.cesta[pos];
    this.cesta.splice(pos,1);
    let producto = this.productos.find(p=>p.idProducto == item.producto.idProducto);
    producto.stock = Number(producto.stock) + Number(item.unidades);
  }

  procesarPedido(){
    this.procesarPedidoService.enviarPedido(this.cesta, this.menuComponent.cliente.usuario).subscribe({
      next:r=>alert("Pedido procesado"),
      error:e=>alert("El pedido no se ha procesado")
    });
  }
}



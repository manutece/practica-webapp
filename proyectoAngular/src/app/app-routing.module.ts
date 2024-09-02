import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './controler/login/login.component';
import { ConsultarPedidosComponent } from './controler/consultar-pedidos/consultar-pedidos.component';
import { ProcesarPedidoComponent } from './controler/procesar-pedido/procesar-pedido.component';
import { RegistrarComponent } from './controler/registrar/registrar.component';
import { PortadaComponent } from './controler/portada/portada.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"consultar", component:ConsultarPedidosComponent},
  {path:"procesar", component:ProcesarPedidoComponent},
  {path:"registrar", component:RegistrarComponent},
  {path:"portada", component:PortadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

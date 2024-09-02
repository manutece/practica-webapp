import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './controler/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './controler/registrar/registrar.component';
import { ProcesarPedidoComponent } from './controler/procesar-pedido/procesar-pedido.component';
import { ConsultarPedidosComponent } from './controler/consultar-pedidos/consultar-pedidos.component';
import { MenuComponent } from './controler/menu/menu.component';
import { PortadaComponent } from './controler/portada/portada.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    ProcesarPedidoComponent,
    ConsultarPedidosComponent,
    MenuComponent,
    PortadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }

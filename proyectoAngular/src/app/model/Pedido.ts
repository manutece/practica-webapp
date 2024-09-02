import { CestaItem } from "./CestaItem";

export class Pedido{
  usuario:string;
  idPedidos:number;
  fecha:Date;
  estado:string;
  elementosPedido:CestaItem[];
}

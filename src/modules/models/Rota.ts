import { Ponto } from "./Ponto";

export class Rota {
  id?: number;
  origem: Ponto;
  destino: Ponto;
  distancia: number;
  duracao: number;

  constructor(origem: Ponto, destino: Ponto, distancia: number, duracao: number, id?: number) {
    this.origem = origem;
    this.destino = destino;
    this.distancia = distancia;
    this.duracao = duracao;
    if (id) this.id = id;
  }
}

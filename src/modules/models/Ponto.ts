export class Ponto {
  id?: number;
  nome: string;
  latitude: number;
  longitude: number;

  constructor(nome: string, latitude: number, longitude: number, id?: number) {
    this.nome = nome;
    this.latitude = latitude;
    this.longitude = longitude;
    if (id) this.id = id;
  }
}
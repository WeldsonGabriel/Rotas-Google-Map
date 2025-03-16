import { Request, Response } from "express";
import { RotaService } from "../services/RotaService";

export class ListarRotas {
  private service: RotaService;

  constructor() {
    this.service = new RotaService();
  }

  async execute(req: Request, res: Response): Promise<void> {
    const rotas = await this.service.listarRotas();
    res.send(rotas);
  }
}

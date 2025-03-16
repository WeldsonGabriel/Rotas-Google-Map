import { Request, Response } from "express";
import { RotaService } from "../services/RotaService";

export class CriarRota {
  private service: RotaService;

  constructor() {
    this.service = new RotaService();
  }

  async execute(req: Request, res: Response): Promise<void> {
    const { origemId, destinoId } = req.body;
    const { nome } = req.body;
    const rota = await this.service.criarRota(nome, origemId, destinoId);
    res.status(201).send(rota);
  }
}

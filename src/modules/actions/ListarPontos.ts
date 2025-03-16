import { Request, Response } from "express";
import { PontoService } from "../services/PontoService";

export class ListarPontos {
  private service: PontoService;

  constructor() {
    this.service = new PontoService();
  }

  async execute(req: Request, res: Response): Promise<void> {
    const pontos = await this.service.listarPontos();
    res.send(pontos);
  }
}
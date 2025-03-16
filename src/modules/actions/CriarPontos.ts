import { Request, Response } from "express";
import { PontoService } from "../services/PontoService";

export class CriarPonto {
  private service: PontoService;

  constructor() {
    this.service = new PontoService();
  }

  async execute(req: Request, res: Response): Promise<void> {
    const { nome, latitude, longitude } = req.body;
    const ponto = await this.service.adicionarPonto(nome, latitude, longitude);
    res.status(201).send(ponto);
  }
}
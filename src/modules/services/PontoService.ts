import { PrismaClient } from '@prisma/client';
import { Ponto } from "../models/Ponto";

const prisma = new PrismaClient();

export class PontoService {
  async listarPontos(): Promise<Ponto[]> {
    return prisma.ponto.findMany();
  }

  async adicionarPonto(nome: string, latitude: number, longitude: number): Promise<Ponto> {
    return prisma.ponto.create({
      data: {
        nome,
        latitude,
        longitude,
      },
    });
  }
}
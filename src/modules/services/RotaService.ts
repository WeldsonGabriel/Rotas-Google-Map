import { PrismaClient } from '@prisma/client';
import { Rota } from "../models/Rota"; // Ensure this path is correct
import { redisClient } from "../../config/redis"; // Ensure this path is correct

const prisma = new PrismaClient();

export class RotaService {
  async criarRota(nome: string, origem: string, destino: string): Promise<Rota> {
    const rota = await prisma.rota.create({
      data: {
        nome,
        origem,
        destino,
      },
    });

    await redisClient.set(`rota:${rota.id}`, JSON.stringify(rota));

    return rota;
  }

  async listarRotas(): Promise<Rota[]> {
    return prisma.rota.findMany();
  }
}

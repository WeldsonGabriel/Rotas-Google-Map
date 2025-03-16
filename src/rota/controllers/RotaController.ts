import { Request, Response } from "express";
import { z } from "zod";
import { ListarRotas } from "../../modules/actions/ListarRotas";
import { CriarRota } from "../../modules/actions/CriarRota";

const listarRotas = new ListarRotas();
const criarRota = new CriarRota();

const criarRotaSchema = z.object({
  origemId: z.number(),
  destinoId: z.number(),
});

export const RotaController = {
  listar: async (req: Request, res: Response) => {
    return listarRotas.execute(req, res);
  },

  criar: async (req: Request, res: Response) => {
    try {
      criarRotaSchema.parse(req.body);
      return criarRota.execute(req, res);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).send({
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        res.status(500).send({
          message: "Internal server error",
        });
      }
    }
  },
};

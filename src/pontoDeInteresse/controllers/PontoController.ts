import { Request, Response } from "express";
import { z } from "zod";
import { ListarPontos } from "../../modules/actions/ListarPontos";
import { CriarPonto } from "../../modules/actions/CriarPontos";

const listarPontos = new ListarPontos();
const criarPonto = new CriarPonto();
// const rotaController = new RotaController();

const criarPontoSchema = z.object({
  nome: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});

export const PontoController = {
  listar: async (req: Request, res: Response) => {
    return listarPontos.execute(req, res);
  },

  criar: async (req: Request, res: Response) => {
    try {
      criarPontoSchema.parse(req.body);
      return criarPonto.execute(req, res);
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
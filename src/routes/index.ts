import { Router } from "express";
import { PontoController } from "../pontoDeInteresse/controllers/PontoController";
import { RotaController } from "../rota/controllers/RotaController";

const router = Router();

router.get("/pontos", PontoController.listar);
router.post("/pontos", PontoController.criar);

router.get("/rotas", RotaController.listar);
router.post("/rotas", RotaController.criar);

export { router };
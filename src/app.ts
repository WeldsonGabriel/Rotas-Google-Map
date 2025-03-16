import express, { Express } from "express";
import { router } from "./routes";
import { ZodError } from "zod";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();

app.use(express.json());

// Configuração do Swagger
configureSwagger(app);

function configureSwagger(app: Express) {
  app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// Registro das rotas
app.use(router);

// Middleware para lidar com erros de validação do Zod
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof ZodError) {
    res.status(400).send({
      message: "Validation error",
      errors: err.errors,
    });
  } else {
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

export { app };
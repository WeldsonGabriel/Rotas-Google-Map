import { app } from "./app";

const start = async () => {
  try {
    console.log("Iniciando o servidor...");
    app.listen(3000, () => {
      console.log("Servidor rodando em http://localhost:3000");
      console.log("Documentação do Swagger disponível em http://localhost:3000/documentation");
    });
  } catch (err) {
    console.error("Erro ao iniciar o servidor:", err); // Logar o erro
    process.exit(1);
  }
};

start();
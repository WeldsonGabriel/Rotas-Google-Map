import { FastifyRequest, FastifyReply } from "fastify";

export interface ICriarRota {
  criarRota(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}

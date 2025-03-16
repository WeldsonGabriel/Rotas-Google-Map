import { FastifyRequest, FastifyReply } from "fastify";

export interface IListar {
  listar(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}
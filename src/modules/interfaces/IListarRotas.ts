import { FastifyRequest, FastifyReply } from "fastify";

export interface IListarRotas {
  listarRotas(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}

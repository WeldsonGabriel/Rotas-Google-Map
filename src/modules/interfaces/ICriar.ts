import { FastifyRequest, FastifyReply } from "fastify";

export interface ICriar {
  criar(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}
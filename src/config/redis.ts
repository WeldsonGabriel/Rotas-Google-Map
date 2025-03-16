// filepath: e:\PORTIFOLIO\projetos nodejs-vite\controle-de-rotas\Rotas-Google-Map\src\config\redis.ts
import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

redisClient.connect();

export { redisClient };
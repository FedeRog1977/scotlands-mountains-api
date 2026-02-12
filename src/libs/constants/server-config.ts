import dotenv from 'dotenv';
import { ENV } from '../types/env';

dotenv.config();

type ServerConfig = {
  hostname: string;
  port: number;
  env: ENV;
};

export const serverConfig: ServerConfig = {
  hostname: process.env.HOSTNAME ?? 'localhost',
  port: process.env.PORT ? Number(process.env.PORT) : 8080,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  env: (process.env.NODE_ENV ?? 'test') as ENV,
};

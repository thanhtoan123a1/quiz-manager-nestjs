import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config({});

const {
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_HOST,
  TYPEORM_PORT,
  TYPEORM_DATABASE,
  TYPEORM_LOGGING,
  TYPEORM_IS_SYNC_DB,
} = process.env;

export const DATABASE_CONFIG: TypeOrmModuleOptions = {
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  host: TYPEORM_HOST,
  port: Number(TYPEORM_PORT),
  database: TYPEORM_DATABASE,
  type: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: !!Number(TYPEORM_IS_SYNC_DB),
  logging: !!Number(TYPEORM_LOGGING),
};

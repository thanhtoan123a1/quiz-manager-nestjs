import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DATABASE_CONFIG } from 'src/constants/env';

export const typeOrmConfig: TypeOrmModuleOptions = DATABASE_CONFIG;

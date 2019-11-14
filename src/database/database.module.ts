import { TypeOrmModule } from '@nestjs/typeorm';
import DATABASE_CONFIG from '../configs/database.config';
import { AllModels } from '../models';

const {
  TYPE,
  HOST,
  PORT,
  USERNAME,
  PASSWORD,
  DATABASE,
} = DATABASE_CONFIG;

export const DatabaseModule = TypeOrmModule.forRoot({
  type: TYPE,
  host: HOST,
  port: PORT,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  entities: AllModels,
  synchronize: true,
  logging: true,
});

import { get } from 'config';

export default {
  TYPE: get('database.type'),
  HOST: get('database.host'),
  PORT: get('database.port'),
  USERNAME: get('database.username'),
  PASSWORD: get('database.password'),
  DATABASE: get('database.database'),
};

import dotenv from 'dotenv';

dotenv.config();
export const ConnectionString = process.env.CONNECTION_STRING;
export const testEnvVariable = process.env.TEST_ENV_VARIABLE;

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });
export const connectionString = process.env.CONNECTION_STRING;
export const testEnvVariable = process.env.TEST_ENV_VARIABLE;

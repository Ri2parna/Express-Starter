import { Pool } from 'pg';
import dotenv from 'dotenv';
import { connectionString } from '../settings';

export const pool = new Pool({ connectionString });

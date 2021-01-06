import { createTables, insertIntoTables } from './queryFunctions';
import { ConnectionString } from '../settings';

(async () => {
  await createTables();
  await insertIntoTables();
})();

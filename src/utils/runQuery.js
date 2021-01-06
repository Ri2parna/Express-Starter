import { createTables, insertIntoTables } from './queryFunctions';
import { ConnectionString } from '../settings';

(async () => {
  await createTables().catch((err) => console.timeLog(err));
  await insertIntoTables().catch((err) => console.log(err));
})();

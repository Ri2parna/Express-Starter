import { pool } from '../models/pool';

import {
  insertMessages,
  dropMessagesTable,
  createMessagesTable,
} from './queries';

// DFLL
// Executes an array of queries and waits for each one to complete inside the loop.
// (Don’t do such a thing in production code though).
// Then, we only resolve the promise once we have executed the last query in the list.
// The reason for using an array is that the number of such queries will grow as
// the number of tables in our database grows.

export const executeQueryArray = async (arr) =>
  new Promise((resolve) => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
      await pool.query(q);
      if (index + 1 === stop) resolve();
    });
  });

export const createTables = () => executeQueryArray([createMessagesTable]);
export const insertIntoTables = () => executeQueryArray([insertMessages]);
export const dropTables = () => executeQueryArray([dropMessagesTable]);

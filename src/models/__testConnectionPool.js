import { pool } from './pool';

const assert = require('assert');

assert(pool.totalCount === 0);
const firefly = async () => {
  const client = pool.connect((err) => {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });
  console.log(`The total count is ${pool.totalCount}`);
  assert(pool.totalCount === 1);
};
firefly();

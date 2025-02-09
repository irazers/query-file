import { DuckDBInstance } from '@duckdb/node-api';

export async function getConnection() {
  const database = await DuckDBInstance.create();
  return await database.connect();
}

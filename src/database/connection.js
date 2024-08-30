import { createPool } from "mysql2/promise";
import {
  DB_HOST,
  DB_USER,
  DB_PORT,
  DB_NAME,
} from "../setting/environments.js";

const createMyPool = () => {
  try {
    const pool = createPool({
      database: DB_NAME,
      user: DB_USER,
      port: DB_PORT,
      host: DB_HOST,
    });

    return pool;
  } catch (error) {
    console.log("Error al conectar la base de datos");
  }
};

const connection = createMyPool();
export { connection };

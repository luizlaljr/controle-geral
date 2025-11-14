import pool from "../db";

async function createUsersTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  try {
    await pool.query(query);
    console.log("Tabela 'users' criada com sucesso");
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    pool.end();
  }
}

createUsersTable();

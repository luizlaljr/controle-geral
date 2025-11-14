import { Request, Response } from "express";
import pool from "../db";

export async function getUsers(req: Request, res: Response) {
  try {
    const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
}

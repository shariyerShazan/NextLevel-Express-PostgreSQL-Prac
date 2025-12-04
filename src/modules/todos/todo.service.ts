import { pool } from "../../utils/db";

export class TodoService {
  static async create(userId: number, title: string, desc: string) {
    const todo = await pool.query(
      "INSERT INTO todos(userId,title,description) VALUES($1,$2,$3) RETURNING *",
      [userId, title, desc]
    );

    return todo.rows[0];
  }

  static async getAll(userId: number) {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE userId=$1 ORDER BY id DESC",
      [userId]
    );

    return todos.rows;
  }
}

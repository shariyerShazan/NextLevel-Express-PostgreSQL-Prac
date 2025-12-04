import { pool } from "../../utils/db";

export class UserService {
  static async getProfile(id: number) {
    const user = await pool.query(
      "SELECT id, name, email, createdAt FROM users WHERE id=$1",
      [id]
    );
    return user.rows[0];
  }
}

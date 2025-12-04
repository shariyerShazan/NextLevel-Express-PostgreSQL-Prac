import { Request, Response } from "express";
import { TodoService } from "./todo.service";
import { AuthRequest } from "../../middlewares/auth.middlewares";

export class TodoController {
  static async create(req: AuthRequest, res: Response) {
    try {
      const userId = (req.userId as any).id;
      const { title, description } = req.body;

      const todo = await TodoService.create(userId, title, description);

      res.json({ success: true, todo });
    } catch (err) {
      res.status(500).json({ success: false, message: err });
    }
  }

  static async getAll(req: AuthRequest, res: Response) {
    try {
      const userId = (req.userId as any).id;

      const todos = await TodoService.getAll(userId);

      res.json({ success: true, todos });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}

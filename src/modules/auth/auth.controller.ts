import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const user = await AuthService.register(name, email, password);

      res.status(201).json({ message: "Registered", success: true, user });
    } catch (error) {
      res.status(400).json({ message: error, success: false });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const data = await AuthService.login(email, password);

      res.json({ message: "Logged in", success: true, ...data });
    } catch (error) {
      res.status(400).json({ message: error, success: false });
    }
  }
}

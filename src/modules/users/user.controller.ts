import { Request, Response } from "express";
import { UserService } from "./user.service";
import { AuthRequest } from "../../middlewares/auth.middlewares";

export class UserController {
  static async profile(req: AuthRequest, res: Response) {
    try {
      const userId = (req.userId as any).id;

      const user = await UserService.getProfile(userId);

      res.json({ success: true, user });
    } catch (error) {
      res.status(400).json({ message: error, success: false });
    }
  }
}

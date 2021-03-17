import { Request, Response } from "express";
import CreateCourseService from "./createCourseService";

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
      name: "Nodejs",
      duration: 10,
      educator: "Rocketseat"
  });

  return res.send();
}

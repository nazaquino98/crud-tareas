import { Router } from "express";
import {
  createTaskCtrl,
  deleteTasksCrtl,
  findTaskByIdCtrl,
  getTasksCtrl,
  updateTasksCrtl,
} from "../controllers/task.controllers.js";
import { createTaskValidations } from "../validations/tasks.validations.js";

const tasksRoutes = Router();

tasksRoutes.get("/", getTasksCtrl);
tasksRoutes.post("/", createTaskValidations, createTaskCtrl);

tasksRoutes.get("/:id", findTaskByIdCtrl);
tasksRoutes.patch("/:id", updateTasksCrtl);
tasksRoutes.delete("/:id", deleteTasksCrtl);

export { tasksRoutes };

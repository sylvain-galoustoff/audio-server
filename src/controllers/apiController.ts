import { Request, Response } from "express";
import { categories } from "../data/category";

export const getCategories = (req: Request, res: Response) => {
  res.json(categories);
};

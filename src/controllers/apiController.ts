import { Request, Response } from "express";
import { categories } from "../data/category";
import { tracks } from "../data/tracks";

export const getCategories = (req: Request, res: Response) => {
  res.json(categories);
};

export const getTracksByCategory = (req: Request, res: Response) => {
  const filteredTracks = tracks.filter(
    (track) => track.categoryId === Number(req.params.categoryId)
  );
  return res.json(filteredTracks);
};

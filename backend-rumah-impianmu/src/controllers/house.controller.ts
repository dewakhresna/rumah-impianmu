import { Request, Response } from "express";
import HouseService from "../service/house.service.js";

export default {
  async getAll(req: Request, res: Response) {
    try {
      const houses = await HouseService.findAll();
      return res.status(200).json(houses);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const house = await HouseService.findById(Number(id));
      res.status(200).json(house);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const newHouse = await HouseService.create(req.body);
      res.status(201).json(newHouse);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedHouse = await HouseService.update(Number(id), req.body);
      res.status(200).json(updatedHouse);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await HouseService.delete(Number(id));
      res.json({ message: "Data berhasil dihapus" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
};

import { Op } from "sequelize";
import House, { HouseAttributes } from "../models/house.model.js";
import HouseDetail from "../models/house_detail.model.js";

// Buat antarmuka (interface) untuk menampung parameter filter dari controller
export interface ChatFilters {
  hargaMin?: number;
  hargaMax?: number;
  luasMin?: number;
  luasMax?: number;
  beds?: number;
  baths?: number;
}

export default {
  async findAll(page: number = 1, limit: number = 10, search: string = "") {
    const offset = (page - 1) * limit;
    const whereClause = search ? { nama: { [Op.like]: `%${search}%` } } : {};

    const { count, rows } = await House.findAndCountAll({
      where: whereClause,
      limit: limit,
      offset: offset,
      order: [["id", "DESC"]],
      include: [
        {
          model: HouseDetail,
        },
      ],
    });

    return { count, rows };
  },

  async getFilteredForChat(filters: ChatFilters) {
    const { hargaMin, hargaMax, luasMin, luasMax, beds, baths } = filters;

    const whereHouse: any = {};

    if (hargaMin !== undefined || hargaMax !== undefined) {
      whereHouse.c1_harga = {};
      if (hargaMin !== undefined) whereHouse.c1_harga[Op.gte] = hargaMin;
      if (hargaMax !== undefined) whereHouse.c1_harga[Op.lte] = hargaMax; 
    }

    if (luasMin !== undefined || luasMax !== undefined) {
      whereHouse.c4_luas = {};
      if (luasMin !== undefined) whereHouse.c4_luas[Op.gte] = luasMin;
      if (luasMax !== undefined) whereHouse.c4_luas[Op.lte] = luasMax;
    }

    const whereDetail: any = {};

    if (beds !== undefined) {
      whereDetail.beds = { [Op.gte]: beds }; 
    }

    if (baths !== undefined) {
      whereDetail.baths = { [Op.gte]: baths };
    }

    const hasDetailFilter = Object.keys(whereDetail).length > 0;

    return await House.findAll({
      where: whereHouse,
      order: [["id", "DESC"]],
      include: [
        {
          model: HouseDetail,
          where: hasDetailFilter ? whereDetail : undefined,
          required: hasDetailFilter, 
        },
      ],
    });
  },

  async findById(id: number) {
    const house = await House.findByPk(id, {
      include: [
        {
          model: HouseDetail,
        },
      ],
    });

    return house;
  },

  async create(data: HouseAttributes) {
    return await House.create(data as any);
  },

  async update(id: number, data: Partial<HouseAttributes>) {
    return await House.update(data, {
      where: { id },
    });
  },

  async delete(id: number) {
    return await House.destroy({
      where: { id },
    });
  },
};
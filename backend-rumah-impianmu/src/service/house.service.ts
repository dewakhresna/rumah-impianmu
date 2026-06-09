import { Op } from "sequelize";
import House, { HouseAttributes } from "../models/house.model.js";
import HouseDetail from "../models/house_detail.model.js";

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

  async getAllForChat() {
    // Mengambil semua data murni tanpa limit dan pagination
    return await House.findAll({
      raw: true, // Mengubah output menjadi JSON murni yang sangat ringan untuk dibaca AI
      order: [["id", "DESC"]],
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
    // Sequelize update mengembalikan array, contoh: [1] jika berhasil, [0] jika gagal
    return await House.update(data, {
      where: { id },
    });
  },

  async delete(id: number) {
    // Sequelize destroy mengembalikan jumlah baris yang terhapus (1 atau 0)
    return await House.destroy({
      where: { id },
    });
  },
};

import { Op } from "sequelize";
import House, { HouseAttributes } from '../models/house.model.js';

export default {
  async findAll(page: number, limit: number, search: string) {
    // Hitung offset (data ke-berapa yang mulai diambil)
    const offset = (page - 1) * limit;

    // Logika pencarian (jika ada input search, cari berdasarkan nama)
    const whereClause = search ? { nama: { [Op.like]: `%${search}%` } } : {};

    // findAndCountAll mengembalikan { count: jumlahTotal, rows: arrayData }
    const { count, rows } = await House.findAndCountAll({
      where: whereClause,
      limit: limit,
      offset: offset,
      order: [['id', 'DESC']] // Opsional: urutkan dari yang terbaru
    });

    return { count, rows };
  }, 

  async findById(id: number) {
    return await House.findByPk(id, { raw: true });
  },

  async create(data: HouseAttributes) {
    return await House.create(data as any);
  },

  async update(id: number, data: Partial<HouseAttributes>) {
    // Sequelize update mengembalikan array, contoh: [1] jika berhasil, [0] jika gagal
    return await House.update(data, { 
      where: { id } 
    });
  },

  async delete(id: number) {
    // Sequelize destroy mengembalikan jumlah baris yang terhapus (1 atau 0)
    return await House.destroy({ 
      where: { id } 
    });
  }
};
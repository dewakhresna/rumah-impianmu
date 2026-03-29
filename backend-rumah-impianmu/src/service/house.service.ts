import { Op } from "sequelize";
import House, { HouseAttributes } from '../models/house.model.js';

export default {
  async findAll(page: number = 1, limit: number = 10, search: string = "") {
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

  async getAllForChat() {
    // Mengambil semua data murni tanpa limit dan pagination
    return await House.findAll({
      raw: true, // Mengubah output menjadi JSON murni yang sangat ringan untuk dibaca AI
      order: [['id', 'DESC']]
    });
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
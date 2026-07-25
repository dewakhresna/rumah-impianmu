import Favorite from "../models/favorite.model.js";
import House from "../models/house.model.js";
import HouseDetail from "../models/house_detail.model.js";

export default {
  async findAllByUser(userId: number, page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;

    const { count, rows } = await Favorite.findAndCountAll({
      where: { user_id: userId },
      limit: limit,
      offset: offset,
      order: [["id", "DESC"]],
      // Melakukan JOIN ke tabel House agar data rumah langsung didapatkan
      include: [
        {
          model: House,
          // Jika Anda juga butuh detail rumahnya di halaman favorit, Anda bisa melakukan nested include
          include: [
            {
              model: HouseDetail,
            },
          ],
        },
      ],
    });

    return { count, rows };
  },

  // Opsional: Berguna jika Anda ingin mengecek apakah user sudah memfavoritkan rumah ini
  // agar tidak terjadi duplikasi data saat user menekan tombol "Like" berkali-kali
  async findByUserAndHouse(userId: number, houseId: number) {
    return await Favorite.findOne({
      where: {
        user_id: userId,
        house_id: houseId,
      },
    });
  },

  async create(data: { user_id: number; house_id: number }) {
    return await Favorite.create(data as any);
  },

  async delete(id: number) {
    // Sequelize destroy mengembalikan jumlah baris yang terhapus (1 atau 0)
    return await Favorite.destroy({
      where: { id },
    });
  },
};
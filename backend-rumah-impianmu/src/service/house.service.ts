import House, { HouseAttributes } from '../models/house.model.js';

export default {
    async findAll() {
        // raw: true supaya hasilnya objek JSON murni (penting untuk perhitungan TOPSIS)
        return await House.findAll({ raw: true });
    },

    async findById(id: number) {
        return await House.findByPk(id, { raw: true });
    },

    async create(data: HouseAttributes) {
        return await House.create(data as any);
    },

    async update(id: number, data: Partial<HouseAttributes>) {
        return await House.update(data, { 
            where: { id } 
        });
    },

    async delete(id: number) {
        return await House.destroy({ 
            where: { id } 
        });
    }
};
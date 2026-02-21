import prisma from "../prisma";

export interface HouseInput {
    nama: string;
    c1_harga: number;
    c2_jarak: number;
    c3_keamanan: number;
    c4_luas: number;
}

export default {
    async findAll() {
        return await prisma.house.findMany();
    },

    async findById(id: number) {
        return await prisma.house.findUnique({ where: { id } });
    },

    async create(data: HouseInput) {
        return await prisma.house.create({ data });
    },

    async update(id: number, data: Partial<HouseInput>) {
        return await prisma.house.update({ where: { id }, data });
    },

    async delete(id: number) {
        return await prisma.house.delete({ where: { id } });
    }
};
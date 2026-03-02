import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.js';

export interface HouseAttributes {
  id?: number;
  nama: string | null;
  c1_harga: number | null;
  c2_jarak: number | null;
  c3_keamanan: number | null;
  c4_luas: number | null;
}

class House extends Model<HouseAttributes> implements HouseAttributes {
  public id!: number;
  public nama!: string | null;
  public c1_harga!: number | null;
  public c2_jarak!: number | null;
  public c3_keamanan!: number | null;
  public c4_luas!: number | null;
}

House.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: DataTypes.STRING,
  c1_harga: DataTypes.FLOAT,
  c2_jarak: DataTypes.FLOAT,
  c3_keamanan: DataTypes.INTEGER,
  c4_luas: DataTypes.FLOAT,
}, {
  sequelize,
  tableName: 'houses',
  timestamps: false, // Matikan jika tabel Anda tidak punya createdAt/updatedAt
});

export default House;
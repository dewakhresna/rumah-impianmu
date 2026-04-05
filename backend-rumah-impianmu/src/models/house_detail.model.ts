import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.js';
import House from './house.model.js';

export interface HouseDetailAttributes {
  id?: number;
  house_id: number;
  contact: string | null;
  description: string | null;
  image_1: string | null;
  image_2: string | null;
  image_3: string | null;
  beds: number | null;
  baths: number | null;
}

class HouseDetail extends Model<HouseDetailAttributes> implements HouseDetailAttributes {
  public id!: number;
  public house_id!: number;
  public contact!: string | null;
  public description!: string | null;
  public image_1!: string | null;
  public image_2!: string | null;
  public image_3!: string | null;
  public beds!: number | null;
  public baths!: number | null;
}

HouseDetail.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  house_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: House,
      key: 'id'
    },
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
  },
  contact: DataTypes.STRING,
  description: {
    type: DataTypes.TEXT, 
  },
  image_1: DataTypes.STRING,
  image_2: DataTypes.STRING,
  image_3: DataTypes.STRING,
  beds: DataTypes.INTEGER,
  baths: DataTypes.INTEGER,
}, {
  sequelize,
  tableName: 'house_details',
  timestamps: true,
});

House.hasOne(HouseDetail, { foreignKey: 'house_id', onDelete: 'CASCADE' });

HouseDetail.belongsTo(House, { foreignKey: 'house_id' });

export default HouseDetail;
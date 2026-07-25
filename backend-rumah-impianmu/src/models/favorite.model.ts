import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.js';
import House from './house.model.js';
import User from './user.model.js';

export interface FavoriteAttributes {
  id?: number;
  user_id: number;
  house_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Favorite extends Model<FavoriteAttributes> implements FavoriteAttributes {
  declare id: number;
  declare user_id: number;
  declare house_id: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Favorite.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // Sesuaikan dengan nama tabel user di database Anda
      key: 'id'
    }
  },
  house_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'houses', // Merujuk ke tabel houses
      key: 'id'
    }
  },
}, {
  sequelize,
  tableName: 'favorites',
  timestamps: true,
});

Favorite.belongsTo(House, { foreignKey: 'house_id' });
House.hasMany(Favorite, { foreignKey: 'house_id' });

Favorite.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Favorite, { foreignKey: 'user_id' });

export default Favorite;
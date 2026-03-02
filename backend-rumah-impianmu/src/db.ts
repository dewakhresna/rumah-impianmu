import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Gunakan variabel environment atau langsung string jika ingin lebih pasti
const sequelize = new Sequelize('db_rumah_impian', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Biar terminal tidak penuh dengan log SQL
});

// Test koneksi
try {
  await sequelize.authenticate();
  console.log('✅ Koneksi database (Sequelize) berhasil!');
} catch (error) {
  console.error('❌ Gagal koneksi ke database:', error);
}

export default sequelize;
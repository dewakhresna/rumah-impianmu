import { Request, Response } from "express";
import fs from "fs";
import path from "path";

export default {
  async uploadSingle(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({
          meta: { status: 400, message: "No file uploaded" },
          data: null,
        });
      }

      // Mengembalikan URL gambar lengkap
      const fileUrl = `/uploads/${req.file.filename}`;

      return res.status(200).json({
        meta: { status: 200, message: "Success upload file" },
        data: { fileUrl: fileUrl },
      });
    } catch (error: any) {
      return res.status(500).json({
        meta: { status: 500, message: error.message },
        data: null,
      });
    }
  },

  async removeFile(req: Request, res: Response) {
    try {
      const { fileUrl } = req.body;

      if (!fileUrl) {
        return res.status(400).json({
          meta: { status: 400, message: "URL gambar tidak diberikan" },
          data: null,
        });
      }

      // Memecah URL untuk mengambil nama filenya saja (contoh: "1691234567-gambar.jpg")
      const filename = fileUrl.split("/").pop();

      // Mencari rute absolut letak file tersebut di dalam folder komputer/server
      const filePath = path.join(process.cwd(), "public", "uploads", filename);

      // Mengecek apakah filenya benar-benar ada di dalam folder
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath); // <--- INI PERINTAH NUKLIR UNTUK MENGHAPUS FILE FISIK
        return res.status(200).json({
          meta: { status: 200, message: "File berhasil dihapus dari server" },
          data: null,
        });
      } else {
        return res.status(404).json({
          meta: { status: 404, message: "File tidak ditemukan di server" },
          data: null,
        });
      }
    } catch (error: any) {
      return res.status(500).json({
        meta: { status: 500, message: error.message },
        data: null,
      });
    }
  },
};

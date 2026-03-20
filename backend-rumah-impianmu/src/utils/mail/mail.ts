import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url"; 

import {
  EMAIL_SMTP_SERVICE_NAME,
  EMAIL_SMTP_HOST,
  EMAIL_SMTP_PASS,
  EMAIL_SMTP_PORT,
  EMAIL_SMTP_SECURE,
  EMAIL_SMTP_USER,
} from "../env.js"; 

// --- Membuat __dirname di ES Module ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// --------------------------------------

const transporter = nodemailer.createTransport({
  // service: EMAIL_SMTP_SERVICE_NAME,
  host: EMAIL_SMTP_HOST,
  port: EMAIL_SMTP_PORT,
  secure: EMAIL_SMTP_SECURE,
  auth: {
    user: EMAIL_SMTP_USER,
    pass: EMAIL_SMTP_PASS,
  },
  requireTLS: true,
});

export interface ISendMail {
  from?: string; // Buat opsional jika ingin otomatis pakai EMAIL_SMTP_USER
  to: string;
  subject: string;
  html: string;
}

export const sendMail = async ({ ...mailParams }: ISendMail) => {
  const result = await transporter.sendMail({
    from: EMAIL_SMTP_USER, // Set default dari agar tidak perlu dikirim manual
    ...mailParams,
  });
  return result;
};

export const renderMailHtml = async (
  template: string,
  data: any
): Promise<string> => {
  // Sekarang __dirname sudah bisa digunakan dengan aman
  const content = await ejs.renderFile(
    path.join(__dirname, `templates/${template}`),
    data
  );
  return content as string;
};
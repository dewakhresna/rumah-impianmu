import { Request, Response } from "express";
import { Op } from "sequelize";
import UserModel, {
  userDTO,
  userLoginDTO,
  userUpdatePasswordDTO,
} from "../models/user.model.js";
import { encrypt } from "../utils/encryption.js";
import { generateToken } from "../utils/jwt.js";
import { IReqUser } from "../utils/interfaces.js";
import response from "../utils/response.js";

export default {
  async updateProfile(req: IReqUser, res: Response) {
    try {
      const userId = req.user?.id;
      const { fullName, profilePicture } = req.body;

      // Update data
      await UserModel.update(
        { fullName, profilePicture },
        { where: { id: userId } }
      );

      // Ambil data terbaru
      const result = await UserModel.findByPk(userId);

      if (!result) return response.notFound(res, "user not found");

      return response.success(res, result, "success to update profile");
    } catch (error) {
      return response.error(res, error, "failed to update profile");
    }
  },

  async updatePassword(req: IReqUser, res: Response) {
    try {
      const userId = req.user?.id;
      const { oldPassword, password, confirmPassword } = req.body;

      await userUpdatePasswordDTO.validate({
        oldPassword,
        password,
        confirmPassword,
      });

      const user = await UserModel.findByPk(userId);

      if (!user || user.password !== encrypt(oldPassword)) {
        return response.notFound(res, "user not found or wrong password");
      }

      // Update password
      await UserModel.update(
        { password: encrypt(password) },
        { where: { id: userId } }
      );

      const result = await UserModel.findByPk(userId);
      return response.success(res, result, "success to update password");
    } catch (error) {
      return response.error(res, error, "failed to update password");
    }
  },

  async register(req: Request, res: Response) {
    const { fullName, username, email, password, confirmPassword } = req.body;

    try {
      await userDTO.validate({
        fullName,
        username,
        email,
        password,
        confirmPassword,
      });

      const result = await UserModel.create({
        fullName,
        email,
        username,
        password,
      });

      return response.success(res, result, "success registration!");
    } catch (error) {
      return response.error(res, error, "failed registration");
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { identifier, password } = req.body;
      await userLoginDTO.validate({ identifier, password });

      const userByIdentifier = await UserModel.findOne({
        where: {
          [Op.or]: [
            { email: identifier },
            { username: identifier }
          ],
          isActive: true,
        },
      });

      if (!userByIdentifier) {
        return response.unauthorized(res, "user not found or inactive");
      }

      // Validasi password
      const validatePassword = encrypt(password) === userByIdentifier.password;

      if (!validatePassword) {
        return response.unauthorized(res, "wrong password");
      }

      const token = generateToken({
        id: userByIdentifier.id,
        role: userByIdentifier.role,
      });

      return response.success(res, token, "login success");
    } catch (error) {
      return response.error(res, error, "login failed");
    }
  },

  async me(req: IReqUser, res: Response) {
    try {
      const userId = req.user?.id;
      const result = await UserModel.findByPk(userId);

      if (!result) return response.notFound(res, "user not found");

      return response.success(res, result, "success get user profile");
    } catch (error) {
      return response.error(res, error, "failed get user profile");
    }
  },

  async activation(req: Request, res: Response) {
    try {
      const { code } = req.body as { code: string };

      // Cari user berdasarkan kode aktivasi
      const user = await UserModel.findOne({ where: { activationCode: code } });
      
      if (!user) {
        return response.notFound(res, "invalid activation code");
      }

      // Aktifkan user
      await user.update({ isActive: true });

      return response.success(res, user, "user successfully activated");
    } catch (error) {
      return response.error(res, error, "user is failed activated");
    }
  },
};
import { Types } from "mongoose";
import { UserRoleEnum } from "./enums/enum";

export interface IUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: UserRoleEnum;
  createdAt: Date;
  updatedAt: Date;
}

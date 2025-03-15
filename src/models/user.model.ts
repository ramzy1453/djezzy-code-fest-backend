import { model, Schema } from "mongoose";
import { IUser } from "../types/models";
import { UserRoleEnum } from "../types/enums/enum";

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: UserRoleEnum.REGULAR,
      enum: UserRoleEnum,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model<IUser>("User", userSchema);
export default userModel;

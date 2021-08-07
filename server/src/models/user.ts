import { Schema, model, HookNextFunction } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import logger from "../lib/logger";
import { IUser } from '../types';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 32,
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      maxLength: 11,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    bdate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next: HookNextFunction) {
  const thisObj = this as IUser;

  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  try {
    thisObj.password = await bcrypt.hash(thisObj.password, 10);
    return next();
  } catch (error) {
    logger.error('Something went wrong: UserModel: pre save hash password:', error);
    return next(error);
  }
});

userSchema.methods.validatePassword = async function (candidatePassword) {
  const thisObj = this as IUser;

  try {
    return await bcrypt.compare(candidatePassword, thisObj.password);
  } catch (error) {
    logger.error('Something went wrong: UserModel: pre save hash password:', error);
  }
};

userSchema.methods.toJSON = function (): any {
  const userObject = this.toObject();
  userObject.id = userObject._id;
  delete userObject._id;
  delete userObject['password'];
  delete userObject['__v'];
  return userObject;
};

export default model<IUser>('User', userSchema);

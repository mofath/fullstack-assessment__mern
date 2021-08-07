import { Document } from 'mongoose';

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T

interface IUser extends Document {
  id: string;
  username: string;
  mobile: string
  password: string;
  bdate: Date;
  validatePassword(candidatePassword: string): Promise<boolean>;
}


import { Model } from 'mongoose';
import { Service, Inject } from 'typedi';
import { IUser } from '../types';
import { LoginDto, RegisterDto } from '../dto';
import 'reflect-metadata';

@Service()
export default class AuthService {
  constructor(
    @Inject('usersModel') private UsersModel: Model<IUser>,
    @Inject('logger') private Logger,
  ) {
  }

  async signup({ username, password, mobile, bdate }: RegisterDto) {
    try {
      const existingUser = await this.UsersModel.findOne({ mobile });

      if (existingUser)
        throw new Error('Mobile number exists');

      const user = new this.UsersModel({ username, password, mobile, bdate });
      await user.save();

      return user.toJSON()
    }
    catch (error) {
      this.Logger.error('Something went wrong: AuthService: signup:', error);
      throw error;
    }
  }

  async login({ mobile, password }: LoginDto) {
    try {      
      const user = await this.UsersModel.findOne({ mobile })

      if (!user)
        throw new Error('User not exist');

      const passwordMatches = await user.validatePassword(password);

      if (!passwordMatches)
        throw new Error('Incorrect password');

      return user.toJSON()
    }
    catch (error) {
      this.Logger.error('Something went wrong: AuthService: login:', error);
      throw error;
    }
  }
}

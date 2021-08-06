import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';
import logger from '../../lib/logger';
import AuthService from '../../services/auth';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authServiceInstance = Container.get(AuthService);
    await authServiceInstance.signup(req.body);
    res.status(201).json({
      success: true,
    });
  } catch (error) {
    logger.error('Something went wrong: AuthService: signup:', error)
    next(new Error(error.message));
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authServiceInstance = Container.get(AuthService);
    const user = await authServiceInstance.login(req.body);
    res.status(201).json({
      isAuthenticated: true,
      user
    });
  } catch (error) {
    logger.error('Something went wrong: AuthService: signup:', error)
    next(new Error(error.message));
  }
};

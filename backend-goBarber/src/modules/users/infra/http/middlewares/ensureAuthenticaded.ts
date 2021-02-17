import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensuredAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHearder = request.headers.authorization;

  if (!authHearder) {
    throw new AppError('JWT token is Missing', 401);
  }

  const [, token] = authHearder.split(' ');

  const { secret } = authConfig.jwt;

  try {
    const decoded = verify(token, secret);

    const { sub } = decoded as ITokenPayload;

    request.user = {
      id: sub,
    };
    return next();
  } catch (err) {
    throw new AppError('Invalid JWT token', 401);
  }
}

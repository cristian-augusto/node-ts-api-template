import { Express, Request, Response, NextFunction } from 'express';
import AppError from './AppError';

class Handler {
  public static genericError(_app: Express): Express {
    _app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        _: NextFunction,
      ): Response => {
        if (err instanceof AppError)
          return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
          });

        return response.status(500).json({
          status: 'error',
          message: 'Internal server error',
        });
      },
    );

    return _app;
  }
}

export default Handler;

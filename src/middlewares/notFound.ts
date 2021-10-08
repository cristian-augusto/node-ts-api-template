import { Request, Response, NextFunction } from 'express';

const notFound = (
  request: Request,
  response: Response,
  _: NextFunction,
): Response => {
  return response.json({ message: 'Route not found.' });
};

export default notFound;

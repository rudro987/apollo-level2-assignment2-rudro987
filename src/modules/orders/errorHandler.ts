import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.message === 'Route not found') {
    return res.status(404).json({ success: false, message: 'Route not found' });
  }

  // Handle other types of errors here
  // ...

  // If no error handlers matched, send a generic error response
  return res.status(500).json({ success: false, message: 'Internal Server Error' });
};
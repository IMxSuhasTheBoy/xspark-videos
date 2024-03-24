import { NextFunction, Request, Response } from "express";

export default function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(404);
  const error = new Error(`Not Found!!! - ${req.originalUrl}`);
  next(error);
}

// export function errorHandlerMiddleware(
//   err: Error,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   return;
// }

/// 2.approach, returning the function in promises format
import { NextFunction, Request, Response } from "express";

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void;
/*@function asyncHandler @description
  It is a higher-order function that takes a function and returns another function that
  will call the given function with the arguments (req, res, next) wrapped in a promise,
  and catch any error that might be thrown and pass it to the next middleware.
 
  @param {RequestHandler} reqHandler Express Request Handler
  @returns {RequestHandler} Express Request Handler with the error handling
 */
const asyncHandler = (reqHandler: RequestHandler): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };

/// 1.approach HOF: const asyncHandler = (Fn) => { async () => {trycatch} }; /// accepting a func then passing it into an func
/*
const asyncHandler = (Fn) => async (req, res, next) => {
  try {
    await Fn(req, res, next);
  } catch (error) {
    ///expecting error code from user
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
*/
///pourpose/output : take a func wrap it with try catch (for error handling work) then return the func

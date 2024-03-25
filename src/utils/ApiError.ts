//TODO: extending Error class of nodejs to have a custom & consistent error message throughout the app.
class ApiError extends Error {
  statusCode: number;
  data: null;
  success: boolean;
  errors: string[];
  constructor(
    statusCode: number,
    message = "Something went wrong", //! doesn't have a ref
    errors: string[] = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode; ///overriding
    this.data = null; ///* Docs to know about whats the data fieald.
    this.message = message; ///overriding
    this.success = false; ///Cause Api is only served for error
    this.errors = errors; ///overriding

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

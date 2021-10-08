class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    Error.captureStackTrace(this, this.constructor);

    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;

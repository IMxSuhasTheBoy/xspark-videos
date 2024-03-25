class ApiResponse {
  statusCode: number;
  data: any;
  message: string;
  private success: boolean;
  constructor(statusCode: number, data: any, message: string = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = this.calculateSuccess(statusCode);
  }

  private calculateSuccess(statusCode: number): boolean {
    return statusCode < 400;
  }

  getSuccess(): boolean {
    return this.success;
  }
}

export { ApiResponse };

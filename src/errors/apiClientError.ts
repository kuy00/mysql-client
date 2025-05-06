class ApiClientError extends Error {
  readonly cause?: Error;

  constructor(message: string, cause?: Error) {
    super(message);
    this.cause = cause;
    this.name = "ApiClientError";

    if (cause) {
      this.stack += `\nCaused by: ${cause.stack}`;
    }
  }
}

export default ApiClientError;

class UsecaseError extends Error {
  readonly cause?: Error;

  constructor(message: string, cause?: Error) {
    super(message);
    this.cause = cause;
    this.name = "UsecaseError";

    if (cause) {
      this.stack += `\nCaused by: ${cause.stack}`;
    }
  }
}

export default UsecaseError;

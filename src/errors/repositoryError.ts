class RepositoryError extends Error {
  readonly cause?: Error;

  constructor(message: string, cause?: Error) {
    super(message);
    this.cause = cause;
    this.name = "RepositoryError";

    if (cause) {
      this.stack += `\nCaused by: ${cause.stack}`;
    }
  }
}

export default RepositoryError;

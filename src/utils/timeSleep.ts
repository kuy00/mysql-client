const timeSleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default timeSleep;

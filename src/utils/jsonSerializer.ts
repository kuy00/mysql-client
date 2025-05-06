import { JsonSerializer as Lib, throwError } from "typescript-json-serializer";

const jsonSerializer = new Lib({
  errorCallback: throwError,
  nullishPolicy: {
    undefined: "disallow",
    null: "allow",
  },
});

export default jsonSerializer;

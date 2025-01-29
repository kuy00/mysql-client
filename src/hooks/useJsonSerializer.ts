import { JsonSerializerContext } from "@/providers/JsonSerializerProvider";
import { useContext } from "react";

export const useJsonSerializer = () => {
  const jsonSerializer = useContext(JsonSerializerContext);

  if (!jsonSerializer) {
    throw new Error("No JsonSerializer set");
  }

  return jsonSerializer;
};

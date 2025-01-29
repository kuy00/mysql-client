import { JsonSerializerContext } from "@/providers/JsonSerializerProvider";
import { useContext } from "react";

export const useJsonSerializer = () => {
  const context = useContext(JsonSerializerContext);

  if (!context) {
    throw new Error(
      "useJsonSerializer must be used within a JsonSerializerProvider",
    );
  }

  return context;
};

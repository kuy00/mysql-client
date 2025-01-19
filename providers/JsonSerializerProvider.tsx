import { createContext, ReactNode } from "react";
import { JsonSerializer } from "typescript-json-serializer";

export const JsonSerializerContext = createContext<JsonSerializer | null>(null);

type JsonSerializerProviderProps = {
  serializer: JsonSerializer;
  children?: ReactNode;
};

export const JsonSerializerProvider = (props: JsonSerializerProviderProps) => {
  const { serializer, children } = props;

  return (
    <JsonSerializerContext.Provider value={serializer}>
      {children}
    </JsonSerializerContext.Provider>
  );
};

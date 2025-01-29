import { RepositoryContext } from "@/providers/RepositoryProvider";
import { useContext } from "react";

export const useRepository = () => {
  const context = useContext(RepositoryContext);

  if (!context) {
    throw new Error("useRepository must be used within a RepositoryProvider");
  }

  return context;
};

import { UseCaseContext } from "@/providers/UseCaseProvider";
import { useContext } from "react";

export const useUseCase = () => {
  const context = useContext(UseCaseContext);

  if (!context) {
    throw new Error("useUseCase must be used within a UseCaseProvider");
  }

  return context;
};

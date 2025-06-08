import { useQueryClient } from "@tanstack/react-query";
import { ReactNode, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

type SuspenseBoundaryProps = {
  fallback?: ReactNode;
  errorFallback?: ReactNode;
  children: ReactNode;
  queryKey?: string[];
};

const SuspenseBoundary = (prosp: SuspenseBoundaryProps) => {
  const { fallback, errorFallback, children, queryKey } = prosp;
  const queryClient = useQueryClient();

  useEffect(() => {
    if (queryKey) {
      queryClient.removeQueries({ queryKey: queryKey });
    }
  }, []);

  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseBoundary;

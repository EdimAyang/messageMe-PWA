import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import { getApiErrorMessage } from '../utils/error-message';
import { simpleHash } from '../utils/hash';


// dont retry the query if the response is of the following status codes
const SKIP_RETRY_CODES = [401, 404];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute
      retry: (failureCount, error) => {
        if (isAxiosError(error)) {
          const status = error?.response?.status;
          if (status && SKIP_RETRY_CODES.includes(status)) {
            return false;
          }
        }

        return failureCount < 1;
      },
    },
    mutations: {
      onError: err => {
        const errorMessage = getApiErrorMessage(err);
        const toastId = simpleHash(errorMessage);
        toast.error(errorMessage, { id: toastId });
      },
    },
  },
});

export const ReactQueryClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

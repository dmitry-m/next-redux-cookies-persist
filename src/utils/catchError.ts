import { AxiosError } from "axios";

interface AxiosErrorResponse {
  message: string | string[];
}

function isAxiosError(
  error: AxiosError<AxiosErrorResponse> | unknown,
): error is AxiosError<AxiosErrorResponse> {
  return (error as AxiosError<AxiosErrorResponse>)?.response?.data?.message !== undefined;
}

export const errorMessage = (error: AxiosError<AxiosErrorResponse> | unknown): string => {
  if (isAxiosError(error)) {
    if (typeof error?.response?.data.message === "object") {
      return error.response.data.message.join(", ");
    }
    if (error?.response?.data.message) {
      return error.response.data.message;
    }

    return error.message;
  }

  if (error instanceof Error) return error.toString();

  throw error;
};

export default errorMessage;

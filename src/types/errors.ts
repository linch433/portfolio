type ErrorAdditional_T = {
  message: string;
  stack: string;
};

export type MockErrorData_T = {
  errorHeader: string;
  errorMessage: string;
  errorResponseHandlerMessage: string;
};

export interface IError {
  data: string;
  error: ErrorAdditional_T;
  internal: boolean;
  status: number;
  statusText: string;
}

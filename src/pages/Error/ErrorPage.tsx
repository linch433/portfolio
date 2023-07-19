import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { clsx } from 'clsx';
import { errorData } from '@/utils/errorMockData.ts';

const ErrorPage = () => {
  const error = useRouteError();
  const { errorHeader, errorResponseHandlerMessage, errorMessage } = errorData;

  return (
    <div
      className={clsx(
        'h-[100vh] flex flex-col',
        'items-center justify-center',
        'gap-10',
        'bg-primary-navy',
      )}
    >
      <h1 className={'text-6xl font-bold text-primary-light-grey'}>
        {errorHeader}
      </h1>
      <p className={'text-3xl text-primary-light-grey'}>{errorMessage}</p>
      <p>
        <i className={'text-xl text-secondary-light-grey'}>
          {isRouteErrorResponse(error)
            ? error.error?.message || error.statusText
            : errorResponseHandlerMessage}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;

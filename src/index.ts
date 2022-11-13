// fetch-hook.ts

type RequestConfig = {
    input: RequestInfo | URL;
    init?: RequestInit;
  };
  type Handler<T> = (res: T) => void;
  type RequestHandler = Handler<RequestConfig>;
  type ResponseHandler = Handler<Response>;
  type ErrorHandler = Handler<Response | Error>;
  
  const nativeFetch = fetch;
  
  export default function fetchHook({
    onRequest,
    onResponse,
    onError,
  }: {
    onRequest: (request: RequestConfig, handler: RequestHandler) => void;
    onResponse: (response: Response, handler: ResponseHandler) => void;
    onError: (error: Error, handler: ErrorHandler) => void;
  }) {
    const fetchWithHook: typeof nativeFetch = async function (
      input,
      init?
    ): Promise<Response> {
      return new Promise(async (resolve, reject) => {
        const responseHandler: ResponseHandler = (modifiedResponse) => {
          resolve(modifiedResponse);
        };
        const errorHandler: ErrorHandler = (res) => {
          if (res instanceof Response) resolve(res);
          else reject(res);
        };
        const requestHandler: RequestHandler = async (modifiedRequest) => {
          const { input, init } = modifiedRequest;
          try {
            const originResponse = await nativeFetch(input as RequestInfo, init);
            onResponse(originResponse, responseHandler);
          } catch (error) {
            onError(error, errorHandler);
          }
        };
        onRequest({ input, init }, requestHandler);
      });
    };
    window.fetch = fetchWithHook;
  }
  
  export const stop = () => {
    window.fetch = nativeFetch;
  };
  

  console.log(1)
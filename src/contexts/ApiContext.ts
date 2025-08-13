import { createContext } from "react";

interface ContextType {
  response: Record<string, string | boolean | Record<string, string>>;
  setResponse: React.Dispatch<
    React.SetStateAction<
      Record<string, string | boolean | Record<string, string>>
    >
  >;
  request: Record<string, string | boolean | Record<string, string>>;
  setRequest: React.Dispatch<
    React.SetStateAction<
      Record<string, string | boolean | Record<string, string>>
    >
  >;
}

const apiContextInitialize = {
  response: {},
  setResponse: () => {},
  request: {},
  setRequest: () => {},
};

const ApiContext = createContext<ContextType>(apiContextInitialize);

export default ApiContext;

import { createContext } from "react";

interface ContextType {
  response: Record<string, string>;
  setResponse: (
    response: Record<string, Record<string, string> | unknown>
  ) => void;
  request: Record<string, unknown>;
  setRequest: (
    Request: Record<string | number, Record<string, unknown> | string>
  ) => void;
}

const apiContextInitialize = {
  response: {},
  setResponse: () => {},
  request: {},
  setRequest: () => {},
};

const ApiContext = createContext<ContextType>(apiContextInitialize);

export default ApiContext;

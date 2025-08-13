import { createContext } from "react";

interface ContextType {
  response: Record<string, unknown>;
  setResponse: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
  request: Record<string, unknown>;
  setRequest: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
}

const apiContextInitialize = {
  response: {},
  setResponse: () => {},
  request: {},
  setRequest: () => {},
};

const ApiContext = createContext<ContextType>(apiContextInitialize);

export default ApiContext;

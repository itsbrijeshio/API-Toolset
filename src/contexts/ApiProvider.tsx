import { useState, type ReactNode } from "react";
import ApiContext from "./ApiContext";

const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [response, setResponse] = useState<Record<string, unknown>>({});
  const [request, setRequest] = useState<Record<string, unknown>>({});

  const values = { response, setResponse, request, setRequest };

  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};

export default ApiProvider;

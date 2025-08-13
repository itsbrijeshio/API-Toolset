import { useState, type ReactNode } from "react";
import ApiContext from "./ApiContext";

const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [response, setResponse] = useState<Record<string, string>>({});
  const [request, setRequest] = useState<Record<string, string>>({});

  const values = { response, setResponse, request, setRequest };

  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};

export default ApiProvider;

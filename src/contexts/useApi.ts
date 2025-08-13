import { useContext } from "react";
import ApiContext from "./ApiContext";

const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    console.error("Please useApi to use inside the ApiProvider");
  }
  return context;
};

export default useApi;

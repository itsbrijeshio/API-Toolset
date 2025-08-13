import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { ApiProvider } from "../contexts";

const Router = () => {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
};

export default Router;

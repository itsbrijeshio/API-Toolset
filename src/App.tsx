import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import "./App.css";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;

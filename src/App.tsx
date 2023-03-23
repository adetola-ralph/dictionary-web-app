import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { AppContainer } from "./components";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer />
    </QueryClientProvider>
  );
}

export default App;

import { Router } from "./components/Router";
import { client } from './lib/apollo';
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App

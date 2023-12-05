import "./App.css";
import React from "react";
import RouterMain from "./router";
import { ApolloProvider } from "@apollo/client";
import  client  from "./utils/apollo";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <RouterMain />
    </ApolloProvider>
  );
};

export default App;

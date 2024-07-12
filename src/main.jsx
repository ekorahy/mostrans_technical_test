import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

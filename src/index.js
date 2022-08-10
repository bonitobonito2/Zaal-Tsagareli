import React from "react";
import ReactDOM from "react-dom/client";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/",
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
export default client
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

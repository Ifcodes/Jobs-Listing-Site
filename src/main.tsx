import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { apolloClient } from "./graphql";
import AppTheme from "./styles/AppTheme";
import GlobalStyles from "./styles/GlobalStyles.style";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={AppTheme}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);

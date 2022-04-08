import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import theme from "./theme";
import "./theme/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

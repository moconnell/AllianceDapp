import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import "./index.css";
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/Users/matthewocon... Remove this comment to see the full error message
import App from "./App";

import theme from "./theme";
import "./theme/styles.css";

ReactDOM.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ChakraProvider theme={theme}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

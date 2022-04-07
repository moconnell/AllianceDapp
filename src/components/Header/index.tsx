import React from "react";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button' was resolved to '/Users/matthew... Remove this comment to see the full error message
import { Button } from "../Button";
import { Container } from "./styles";

export function Header() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button>Connect Wallet</Button>
    </Container>
  );
}

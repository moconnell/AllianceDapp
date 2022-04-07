import React from "react";
import { Container, ButtonComponent } from "./styles";

export function Button({
  children,
  disabled,
  onClick
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container disabled={disabled} onClick={onClick}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ButtonComponent disabled={disabled}>{children}</ButtonComponent>
    </Container>
  );
}

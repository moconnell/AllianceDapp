import React from "react";
import { Container, ButtonComponent } from "./styles";

export function Button({ children, disabled, onClick }) {
  return (
    <Container disabled={disabled} onClick={onClick}>
      <ButtonComponent disabled={disabled}>{children}</ButtonComponent>
    </Container>
  );
}

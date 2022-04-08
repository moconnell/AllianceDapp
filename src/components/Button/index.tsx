import React from "react";
import { Container, ButtonComponent } from "./styles";

interface ButtonProps {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <Container aria-disabled={disabled} onClick={onClick}>
      <ButtonComponent disabled={disabled}>{children}</ButtonComponent>
    </Container>
  );
};

export default Button;

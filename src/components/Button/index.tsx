import React from "react";
import { Container, ButtonComponent } from "./styles";

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  title,
  type = "button",
  onClick,
}) => {
  return (
    <Container aria-disabled={disabled}>
      <ButtonComponent disabled={disabled} title={title} onClick={onClick} type={type}>
        {children}
      </ButtonComponent>
    </Container>
  );
};

export default Button;

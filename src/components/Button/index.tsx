import React from "react";
import { Container, ButtonComponent } from "./styles";

interface ButtonProps {
  children?: React.ReactNode;
  title?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler;
}

const Button = ({
  children,
  disabled,
  title,
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <Container aria-disabled={disabled}>
      <ButtonComponent disabled={disabled} title={title} onClick={onClick} type={type}>
        {children}
      </ButtonComponent>
    </Container>
  );
};

export default Button;

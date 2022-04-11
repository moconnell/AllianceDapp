import React from "react";
import { Container, ButtonComponent } from "./styles";

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  title,
  onClick,
}) => {
  return (
    <Container aria-disabled={disabled} onClick={onClick}>
      <ButtonComponent disabled={disabled} title={title}>
        {children}
      </ButtonComponent>
    </Container>
  );
};

export default Button;

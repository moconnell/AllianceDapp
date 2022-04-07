import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff3864;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  ${({ disabled }) =>
    disabled &&
    `
      cursor: auto;
      opacity: 0.7;

      :hover{
      opacity: 0.7;
      }
    `}
`;

export const ButtonComponent = styled.button`
  padding: 8px 16px;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  cursor: inherit;
`;

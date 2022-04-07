// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
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

  ${({
  disabled
}: any) =>
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

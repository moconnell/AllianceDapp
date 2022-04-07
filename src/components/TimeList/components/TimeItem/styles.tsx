// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";

export const TimeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  background: ${({
  active
}: any) => (active ? "#FF3864" : "transparent")};
  border: 1px solid #ff3864;
  box-sizing: border-box;
  border-radius: 6px;
  color: #fff;
  margin-bottom: 8px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

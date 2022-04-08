import styled from "styled-components";

export const TimeContainer = styled.div`
  width: 200px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  height: auto;
  overflow-y: scroll;
  scrollbar-color: #ff3864 transparent;
  padding-right: 10px;

  // For Google Chrome
  &::-webkit-scrollbar {
    border: 1px solid #ff3864;
    border-radius: 26px;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff3864;
    border-radius: 26px;
    padding: 0.5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  // For Internet Explorer
  & {
    scrollbar-face-color: #ff3864;
    scrollbar-track-color: transparent;
  }

  &::-moz-scrollbar {
    -moz-border: 1px solid #ff3864;
    border: 1px solid #ff3864;
    border-radius: 26px;
    width: 5px;
  }
  /* Track */

  &::-moz-scrollbar-track {
    background: transparent;
    border: 1px solid #ff3864;
    border-radius: 26px;
  }
  /* Handle */

  &::-moz-scrollbar-thumb {
    background: #ff3864;
    padding: 0.5px;
  }
`;

export const StyledSubtitle = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;

  /* Raid Red */
  color: #ff3864;

  margin-bottom: 12px;
`;

export const Container = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  height: 350px;
  max-height: 350px;
`;

export const StyledTitle = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  /* Raid Red */
  color: #ff3864;
  margin-bottom: 12px;
`;

export const InlineContainer = styled.div`
  margin-right: 4px;
  display: flex;
  margin-bottom: 12px;
`;

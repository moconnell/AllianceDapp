import styled from 'styled-components'

export const TimeContainer = styled.div`
width: 200px;
max-width: 250px;
display: flex;
flex-direction: column;
height:350px;
overflow-y: scroll;
scrollbar-color: #FF3864 transparent ;
padding: 10px;

  // For Google Chrome
  &::-webkit-scrollbar {
    border:1px solid #FF3864;
    border-radius:26px;
    width:5px

  }

  &::-webkit-scrollbar-thumb {
    background: #FF3864;
    border-radius:26px;
    padding: 0.5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  // For Internet Explorer
  & {
    scrollbar-face-color: #FF3864;
    scrollbar-track-color: transparent;
  }

  &::-moz-scrollbar {
    -moz-border:1px solid #FF3864;
    border:1px solid #FF3864;
    border-radius:26px;
    width:5px
    }
    /* Track */

     &::-moz-scrollbar-track {
        background: transparent;
        border:1px solid #FF3864;
    border-radius:26px;
    }
    /* Handle */

     &::-moz-scrollbar-thumb {
        background: #FF3864;
    padding: 0.5px;
    }


`
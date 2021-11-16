import styled from 'styled-components'

export const TimeButton = styled.button`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 24px;
background: ${({active})=>(active ? "#FF3864": "transparent")};
border: 1px solid #FF3864;
box-sizing: border-box;
border-radius: 6px;
color:#fff;
margin-bottom:8px;

&:hover{
    opacity: 0.6;
    cursor:pointer
}

`
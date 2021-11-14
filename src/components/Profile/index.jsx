import { shortenAddress } from "../../utils/shortenAddress";
import { AddressText, Container, Description, FlexContainer,TextContainer, ProfilePic, Username } from "./styles";

export function Profile({profile:{picture,address,username,description}}){
    return (
        <Container>
            <FlexContainer>

         <FlexContainer>
         <ProfilePic src={picture}/>
         </FlexContainer>
            <TextContainer>
            <AddressText>{shortenAddress(address)}</AddressText>
            <Username>{username}</Username>
            </TextContainer>
        </FlexContainer>
            <Description>{description}</Description>
        </Container>
    )
}
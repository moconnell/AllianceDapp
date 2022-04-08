import { shortenAddress } from "../../utils/shortenAddress";
import Profile from "../../types/profile";
import {
  AddressText,
  Container,
  Description,
  FlexContainer,
  TextContainer,
  ProfilePic,
  Username,
} from "./styles";

interface ProfileProps {
  profile: Profile;
}

const Profile: React.VFC<ProfileProps> = ({
  profile: { picture, address, username, description },
}) => (
  <Container>
    <FlexContainer>
      <FlexContainer>
        <ProfilePic src={picture} />
      </FlexContainer>
      <TextContainer>
        <AddressText>{shortenAddress(address)}</AddressText>
        <Username>{username}</Username>
      </TextContainer>
    </FlexContainer>
    <Description>{description}</Description>
  </Container>
);

export default Profile;

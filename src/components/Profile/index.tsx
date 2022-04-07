import { shortenAddress } from "../../utils/shortenAddress";
import {
  AddressText,
  Container,
  Description,
  FlexContainer,
  TextContainer,
  ProfilePic,
  Username,
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/Users/matthewo... Remove this comment to see the full error message
} from "./styles";

export function Profile({
  profile: { picture, address, username, description }
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FlexContainer>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FlexContainer>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ProfilePic src={picture} />
        </FlexContainer>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextContainer>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AddressText>{shortenAddress(address)}</AddressText>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Username>{username}</Username>
        </TextContainer>
      </FlexContainer>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Description>{description}</Description>
    </Container>
  );
}

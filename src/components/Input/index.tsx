import { Container, Flex } from "@chakra-ui/react";
// @ts-expect-error ts-migrate(6142) FIXME: Module './profile' was resolved to '/Users/matthew... Remove this comment to see the full error message
import { Profile } from "./profile";
// @ts-expect-error ts-migrate(6142) FIXME: Module './availabilityTime' was resolved to '/User... Remove this comment to see the full error message
import { AvailabilityTime } from "./availabilityTime";

export function Input() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container maxW="container.xl" p={0}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Flex
        h={{ base: "auto", md: "100%" }}
        py={20}
        direction={{ base: "column", md: "row" }}
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Profile />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvailabilityTime />
      </Flex>
    </Container>
  );
}

import React from "react";
import { Spinner, Progress } from "@chakra-ui/react";
import {
  Container,
  TextAndIconContainer,
  IconContainer,
  Text,
  ProgressBarContainer,
  MainContent,
} from "./styles";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../../../assets/double-chec... Remove this comment to see the full error message
import { ReactComponent as DoubleCheck } from "../../../../assets/double-check.svg";

export function LoadingTransaction({ loading = true }) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <MainContent>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextAndIconContainer>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconContainer>
            {loading ? (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Spinner size={"md"} color="#FF3864" />
            ) : (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DoubleCheck />
            )}
          </IconContainer>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Text>
            {loading
              ? "Your transaction is processing..."
              : "Yay, your transaction is complete!"}
          </Text>
        </TextAndIconContainer>
      </MainContent>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ProgressBarContainer>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Progress
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'false | 100' is not assignable to type 'numb... Remove this comment to see the full error message
          value={!loading && 100}
          colorScheme="red"
          height="3px"
          isIndeterminate={loading}
        />
      </ProgressBarContainer>
    </Container>
  );
}

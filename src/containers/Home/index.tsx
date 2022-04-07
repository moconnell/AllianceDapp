import React, { useState } from "react";
import {
  Container,
  ButtonContainer,
  Content,
  LogoContainer,
  Main,
  DescriptionText,
} from "./styles";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/Button' was resolved to '... Remove this comment to see the full error message
import { Button } from "../../components/Button";
import { IconContainer } from "../../components/Modal/components/LoadingTransaction/styles";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/document.svg' or ... Remove this comment to see the full error message
import { ReactComponent as Document } from "../../assets/document.svg";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/alliance.svg' or ... Remove this comment to see the full error message
import { ReactComponent as Alliance } from "../../assets/alliance.svg";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export function Home() {
  const [modalProvider, setModalProvider] = useState(null);
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "3d30748db4fc43439aedd3909843270c",
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ background: string; main: string; secondar... Remove this comment to see the full error message
    theme: {
      background: "#2B2C34",
      main: "#ff3864",
      secondary: "#fff",
      hover: "rgba(255, 255, 255, 0.08);",
    },
  });

  async function connect() {
    try {
      const provider = await web3Modal.connect();
      setModalProvider(provider);
    } catch (err) {
      console.log("err", err);
      setModalProvider(null);
      return;
    }
  }

  async function disconnect() {
    web3Modal.clearCachedProvider();
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Content>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Main>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <LogoContainer>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IconContainer>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Document />
            </IconContainer>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Alliance />
          </LogoContainer>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <DescriptionText>
            Alliance is a web3 coordination tool designed to align your calendar
            your network of colleagues. By utilizing the combination of
            connectivity to your 0x identity and the utility of Google or iCloud
            calendar, you can schedule a meeting with a simple handshake.
            Designed by the Raid Guild 2021.
          </DescriptionText>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ButtonContainer>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button onClick={connect}>Connect Wallet</Button>
          </ButtonContainer>
        </Main>
      </Content>
    </Container>
  );
}

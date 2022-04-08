import React, { useState } from "react";
import {
  Container,
  ButtonContainer,
  Content,
  LogoContainer,
  Main,
  DescriptionText,
} from "./styles";
import Button from "../../components/Button";
import { IconContainer } from "../../components/Modal/components/LoadingTransaction/styles";
import { ReactComponent as Document } from "../../assets/document.svg";
import { ReactComponent as Alliance } from "../../assets/alliance.svg";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const Home: React.VFC = () => {
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
    theme: {
      background: "#2B2C34",
      border: "#2B2C34",
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
    <Container>
      <Content>
        <Main>
          <LogoContainer>
            <IconContainer>
              <Document />
            </IconContainer>

            <Alliance />
          </LogoContainer>

          <DescriptionText>
            Alliance is a web3 coordination tool designed to align your calendar
            your network of colleagues. By utilizing the combination of
            connectivity to your 0x identity and the utility of Google or iCloud
            calendar, you can schedule a meeting with a simple handshake.
            Designed by the Raid Guild 2021.
          </DescriptionText>

          <ButtonContainer>
            <Button onClick={connect}>Connect Wallet</Button>
          </ButtonContainer>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;

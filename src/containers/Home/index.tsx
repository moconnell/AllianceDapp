import React from "react";
import {
  Container,
  Content,
  LogoContainer,
  Main,
  DescriptionText,
} from "./styles";
import { IconContainer } from "../../components/Modal/components/LoadingTransaction/styles";
import { ReactComponent as Document } from "../../assets/document.svg";
import { ReactComponent as Alliance } from "../../assets/alliance.svg";

const Home: React.VFC = () => (
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
          calendar, you can schedule a meeting with a simple handshake. Designed
          by the Raid Guild 2021.
        </DescriptionText>
      </Main>
    </Content>
  </Container>
);

export default Home;

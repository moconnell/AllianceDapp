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
import { useCalendar } from "../../hooks/useCalendar";
import { Navigate } from "react-router-dom";
import Web3Button from "../../components/Web3Button";
import { useWeb3Context } from "../../context/Web3Context";

const Home: React.VFC = () => {
  const { calendar } = useCalendar();
  const { address } = useWeb3Context();
  
  if (calendar) return <Navigate to="/meetings" />;
  if (address) return <Navigate to="/profile" />;

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
            Designed by the Raid Guild 2021. Connect wallet to get started.
          </DescriptionText>

          <Web3Button />
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
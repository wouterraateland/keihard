import React from "react";
import styled from "styled-components";
import { withTranslation, Trans } from "react-i18next";

import { Text, Link, Wrapper, Row, Button } from "components/lib";
import Waves from "components/Waves";
import Title from "components/Title";
import Sponsors from "components/Sponsors";

const FooterContainer = styled.footer`
  position: relative;
  padding: 4em 0;

  background: linear-gradient(#fff, #f2f2f2 2em);
`;

const FooterWaves = styled(Waves)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;

  width: 100%;
  height: 4em;

  transform: scale(1, -1);

  fill: rgba(255, 255, 255, 0.4);
`;

const Languages = styled.div`
  text-align: center;
`;

const Language = styled(Button)`
  margin: 0 0.25em;
`;

const Footer = ({ i18n }) => (
  <FooterContainer>
    <FooterWaves />
    <Wrapper>
      <Title>
        <Trans i18nKey="page:thanks">
          <strong>Thanks</strong>
        </Trans>
      </Title>
      <Row>
        <Sponsors />
      </Row>
      <Row>
        <Text center>
          <Trans i18nKey="page:further_questions">
            For questions, email{" "}
            <Link href="mailto:wouterraateland@gmail.com">
              wouterraateland@gmail.com
            </Link>
          </Trans>
        </Text>
      </Row>
      <Row>
        <Languages>
          <Language
            medium
            primary
            onClick={() => {
              i18n.changeLanguage("nl");
            }}
          >
            NL
          </Language>
          <Language
            medium
            primary
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            EN
          </Language>
        </Languages>
      </Row>
    </Wrapper>
  </FooterContainer>
);

export default withTranslation()(Footer);

import React from "react";
import styled from "styled-components";
import { media } from "style-utils";
import { withTranslation, Trans } from "react-i18next";

import { Text, Link, Wrapper, Row, Column } from "components/lib";

import Header from "components/Header";
import Title from "components/Title";
import SubTitle from "components/SubTitle";
import SponsorForm from "components/SponsorForm";
import ShareForm from "components/ShareForm";
import Photos from "components/Photos";
import Footer from "components/Footer";

const Page = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

const StickyColumn = styled(Column)`
  position: sticky;
  top: 0;

  ${media.small`position: static;`}
`;

const HomePage = ({ t }) => (
  <Page currentModal={null}>
    <Header />
    <Wrapper>
      <Row>
        <Column size={8} sSize={12}>
          <Title>
            <Trans i18nKey="page:title">
              <strong>hard</strong>
              <strong>KiKa</strong>
            </Trans>
          </Title>
          <Text>{t("page:intro")}</Text>
        </Column>
        <StickyColumn size={4} sSize={12}>
          <SponsorForm />
          <ShareForm />
        </StickyColumn>
        <Column size={8} sSize={12}>
          <Photos />
        </Column>
        <Column size={8} sSize={12}>
          <SubTitle>{t("page:question1")}</SubTitle>
          <Text>
            <Trans i18nKey="page:answer1">
              That’s your choice. If you choose to support both us and KiKa,
              part<sup>*</sup> of your donation goes to getting our shirts
              printed, and the rest goes straight to KiKa. If you choose to
              support only KiKa, your entire sponsorship goes there. Either way,
              your name and (company) logo will also be on our shirts. That’s
              100 kilometers of exposure!
            </Trans>
          </Text>
          <Text size={0.75}>
            <sup>*</sup>
            <em>{t("page:remark")}</em>
          </Text>
          <SubTitle>{t("page:question2")}</SubTitle>
          <Text>
            <Trans i18nKey="page:answer2">
              At 100 kilometers, the Ringvaart is the longest rowing marathon of
              Europe. The race is open to all kinds of rowers: from competitive
              rowers with years of experience to “Ringvaartleden” who started
              rowing this winter (us). For more information, see{" "}
              <Link
                href="http://parthenon-ey-ringvaartregatta.nl"
                target="_blank"
              >
                parthenon-ey-ringvaartregatta.nl
              </Link>
              .
            </Trans>
          </Text>
          <SubTitle>{t("page:question2")}</SubTitle>
          <Text>
            <Trans i18nKey="page:answer3">
              Yes! During the approximately 8 to 13 hours we’ll be in the boat,
              we’d love any and all support. If you’re free on June 6th, you can
              come bike along with us! Check the biking route on{" "}
              <Link
                href="http://parthenon-ey-ringvaartregatta.nl/fietsroute/"
                target="_blank"
              >
                parthenon-ey-ringvaartregatta.nl/fietsroute
              </Link>
              .
            </Trans>
          </Text>
        </Column>
      </Row>
    </Wrapper>
    <Footer />
  </Page>
);

export default withTranslation()(HomePage);

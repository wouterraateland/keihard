import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import styled from "styled-components";

import { opacity, media } from "style-utils";
import { Column, Text, Button } from "components/lib";

import * as Modals from "ducks/modals";

import Waves from "components/Waves";

const Paper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;

  padding: 1em;
  margin: 3em 0 0;
  ${media.small`margin: 0 -1em;`}

  border: 1px solid ${(props) => opacity(props.theme.colors.primary, 0.1)};
  border-radius: ${(props) => props.theme.border.radius};
  box-shadow: 0 .1em .3em ${(props) =>
    opacity(props.theme.colors.primary, 0.2)};
`;

const TagValue = styled(Text)`
  font-size: 2em;
  margin: 0;
`;

const TagLabel = styled(Text)`
  font-size: 0.75em;
  margin-top: 0;
`;

const FormWaves = styled(Waves)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  width: 100%;
  height: 5em;

  fill: ${(props) => opacity(props.theme.colors.accent, 0.5)};
`;

const SponsorForm = ({
  t,
  amount,
  shirtAmount,
  count,
  days,
  onRefLoad,
  onButtonClick,
}) => (
  <Paper>
    <Column size={12} sSize={5}>
      <TagValue accent>€{amount},-</TagValue>
      <TagLabel>
        {t`donated`}
        <sup>†</sup>
      </TagLabel>
    </Column>
    <Column size={12} sSize={3}>
      <TagValue>{count}</TagValue>
      <TagLabel>{t`sponsors`}</TagLabel>
    </Column>
    <Column size={12} sSize={4}>
      <TagValue>{days}</TagValue>
      <TagLabel>{t`days`}</TagLabel>
    </Column>
    <Column size={12}>
      <Text size={0.75}>
        <sup>†</sup>
        <em>
          {t("remark", { kikaAmount: amount - shirtAmount, shirtAmount })}
        </em>
      </Text>
    </Column>
    <Button
      block
      large
      primary
      disabled
      onClick={onButtonClick}
      innerRef={onRefLoad}
    >{t`cta`}</Button>
    <FormWaves part={0.5} />
  </Paper>
);

const mapStateToProps = (state, props) => ({
  amount: state.sponsors.map((s) => s.amount).reduce((acc, x) => acc + x, 0),
  shirtAmount: state.sponsors
    .filter((s) => s.who === "both")
    .map((s) => s.amount * 0.2)
    .reduce((acc, x) => Math.ceil(Math.min(acc + x, 120)), 0),
  count: state.sponsors.length,
  days: Math.max(
    0,
    Math.ceil(
      (new Date(2018, 5, 6).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    )
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  onRefLoad: (el) => dispatch(Modals.setOrigin("sponsor", el)),
  onButtonClick: () => dispatch(Modals.open("sponsor")),
});

export default withTranslation("form")(
  connect(mapStateToProps, mapDispatchToProps)(SponsorForm)
);

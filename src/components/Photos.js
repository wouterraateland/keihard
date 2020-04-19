import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { opacity } from "style-utils";

import * as Modals from "ducks/modals";

import { Text, Row, Column } from "components/lib";
import SubTitle from "components/SubTitle";

import photo1 from "assets/photo1.jpg";
import photo2 from "assets/photo2.jpg";
import photo3 from "assets/photo3.jpg";
import photo4 from "assets/photo4.jpg";
import photo5 from "assets/photo5.jpg";
import photo6 from "assets/photo6.jpg";

const StyledPhoto = styled.div`
  cursor: pointer;

  padding-top: 75%;
  margin-bottom: 1em;
  border-radius: ${(props) => props.theme.border.radius};

  box-shadow: 0 0.1em 0.3em
    ${(props) => opacity(props.theme.colors.primary, 0.2)};

  background: url(${(props) => props.src}) no-repeat center / cover;
`;

const mapDispatchToProps = (dispatch, { n }) => ({
  innerRef: (el) => dispatch(Modals.setOrigin(`photo${n}`, el)),
  onClick: () => dispatch(Modals.open(`photo${n}`)),
});

const Photo = connect(() => ({}), mapDispatchToProps)(StyledPhoto);

export default () => (
  <Row>
    <Column size={12}>
      <SubTitle>Post mortem</SubTitle>
      <Text>
        In februari 2018 stapten we voor het eerst de roeiboot in bij studenten
        roeivereniging Proteus te Delft. Een plek waar we de maanden daarna nog
        veel uren zouden doorbrengen op de roeimachines en in de boten. Na
        maanden training op 6 juni was het dan zover, de Ringvaart. Deze dag
        hebben wij: Daniël, Leon, Sigur, Wouter en natuurlijk onze stuur
        Suzanne, de 100 kilometers geroeid in 10 uur en 8 minuten. De dag is nu
        voorbij, maar gelukkig hebben we de foto's nog.
      </Text>
    </Column>
    <Column size={4}>
      <Photo src={photo1} n={1} />
    </Column>
    <Column size={4}>
      <Photo src={photo2} n={2} />
    </Column>
    <Column size={4}>
      <Photo src={photo3} n={3} />
    </Column>
    <Column size={4}>
      <Photo src={photo4} n={4} />
    </Column>
    <Column size={4}>
      <Photo src={photo5} n={5} />
    </Column>
    <Column size={4}>
      <Photo src={photo6} n={6} />
    </Column>
  </Row>
);

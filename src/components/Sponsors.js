import React from "react";
import styled from "styled-components";

import { Text } from "components/lib";

import sponsors from "assets/sponsors.json";

const Sponsors = styled(Text)`
  margin: 2em 0;
`;

// const Sponsor = styled.div`
//   display: inline-block;
//   width: 100%;
//   padding: 50%;
//
//   border-radius: 100%;
//
//   background: ${props => props.image
//     ? `rgba(0, 0, 0, .2) url(${props.image}) no-repeat center / 70%`
//     : `rgba(0, 0, 0, .2)`};
// `

const Sponsor = styled.strong`
  display: inline-block;
  margin-right: 1.5em;
  margin-bottom: 0.5em;
`;

export default () => (
  <Sponsors>
    {sponsors.map(
      ({ name }, i) => (
        <Sponsor key={i}>{name}</Sponsor>
      )
      // <Column key={i} size={1} sSize={2}>
      //   <Sponsor {...sponsor} />
      // </Column>
    )}
  </Sponsors>
);

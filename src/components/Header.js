import React from "react";
import styled from "styled-components";

import { Link } from "components/lib";
import Waves from "components/Waves";

import headerBg from "assets/header.jpg";
import kika from "assets/kika.png";

const Header = styled.header`
  position: relative;

  height: 40vmin;
  background-color: ${(props) => props.theme.colors.primary};
  background: linear-gradient(90deg, transparent 75%, rgba(255, 255, 255, 0.1)),
    linear-gradient(transparent 80%, #fff),
    url(${headerBg}) no-repeat left 30% top 50% / cover;
`;

const KiKaImage = styled.img`
  position: absolute;
  right: 2em;
  top: 2em;

  height: 50%;
`;

const HeaderWaves = styled(Waves)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 20%;

  fill: rgba(255, 255, 255, 0.8);
`;

export default () => (
  <Header>
    <Link href="https://www.actievoorkika.nl/" target="_blank">
      <KiKaImage src={kika} alt="voor KiKa" />
    </Link>
    <HeaderWaves />
  </Header>
);

import React from "react";
import styled from "styled-components";

import { Modal } from "components/lib";

import photo1 from "assets/photo1.jpg";
import photo2 from "assets/photo2.jpg";
import photo3 from "assets/photo3.jpg";
import photo4 from "assets/photo4.jpg";
import photo5 from "assets/photo5.jpg";
import photo6 from "assets/photo6.jpg";

const Center = styled.div`
  text-align: center;
`;

const Photo = styled.img`
  max-width: calc(100vw - 4em);
  max-height: calc(100vh - 4.5em);
  margin: -2em;
  border-radius: ${(props) => props.theme.border.radius};
`;

const getSrc = (n) => {
  switch (n) {
    case 1:
      return photo1;
    case 2:
      return photo2;
    case 3:
      return photo3;
    case 4:
      return photo4;
    case 5:
      return photo5;
    case 6:
      return photo6;
    default:
      return null;
  }
};

const PhotoModal = ({ n }) => (
  <Modal transparent name={`photo${n}`}>
    <Center>
      <Photo src={getSrc(n)} />
    </Center>
  </Modal>
);

export default PhotoModal;

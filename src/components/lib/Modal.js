import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { opacity } from "style-utils";

import Wrapper from "./Wrapper";

const ModalContent = styled(Wrapper).attrs(({ origin, open }) => ({
  style:
    origin && !open
      ? {
          left: `${origin.x + origin.width / 2}px`,
          top: `${origin.y + origin.height / 2}px`,
          width: `${origin.width}px`,
          maxHeight: `${origin.height}px`,
        }
      : {},
}))`
  position: fixed;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  padding: 2em;
  margin: auto;

  border-radius: ${(props) => props.theme.border.radius};

  background-color: ${(props) =>
    props.transparent
      ? "transparent"
      : opacity(props.theme.colors.background, 0.9)};

  transform: translate(-50%, -50%);

  will-change: left, top, width, maxHeight, opacity;

  ${(props) =>
    props.origin &&
    css`
      transition-property: left, top, width, max-height, opacity;
      transition-duration: 0.4s;
      transition-timing-function: ease-out;
    `}

  ${(props) =>
    !props.open &&
    css`
      pointer-events: none;

      opacity: 0;
    `}

  ${(props) =>
    props.open &&
    css`
      left: 50%;
      top: 50%;
      width: calc(100vw - 4em);
      max-height: calc(100vh - 4em);

      opacity: 1;
    `}
`;

const Modal = ({ origin, open, children, ...props }) => (
  <ModalContent open={open} origin={origin} {...props}>
    {children}
  </ModalContent>
);

const getOriginRect = (el) =>
  el && el.getBoundingClientRect ? el.getBoundingClientRect() : null;

const mapStateToProps = (state, props) => ({
  origin: getOriginRect(state.modals.origin[props.name]),
  open: state.modals.current === props.name,
});

export default connect(mapStateToProps)(Modal);

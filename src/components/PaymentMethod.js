import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import * as Pledge from "ducks/pledge";

import { Image } from "components/lib";

import paypal from "assets/icons/paypal.png";
import iban from "assets/icons/iban.png";

const Method = styled.div`
  cursor: pointer;

  position: relative;

  display: inline-block;
  width: 3em;
  height: 3.5em;
  padding: 0.5em;
  margin: 0.5em 0.5em 0 0;
  border-radius: ${(props) => props.theme.border.radius};

  ${(props) =>
    props.selected &&
    css`
      background-color: rgba(0, 0, 0, 0.1);
    `}
`;

const CenterImage = styled(Image)`
  position: absolute;
  left: 0.5em;
  top: 0.5em;
  right: 0.5em;
  bottom: 0.5em;

  max-width: 2em;
  max-height: 2.5em;
  margin: auto;
`;

const PaymentMethod = ({ image, method, selected, onClick }) => (
  <Method selected={selected} onClick={onClick}>
    <CenterImage src={image} alt={method} />
  </Method>
);

const getImage = (method) => {
  switch (method) {
    case "PayPal":
      return paypal;
    case "Bankoverschrijving":
      return iban;
    default:
      return paypal;
  }
};

const mapStateToProps = (state, props) => ({
  image: getImage(props.method),
  selected: state.pledge.payment_method === props.method,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(Pledge.update("payment_method", props.method)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);

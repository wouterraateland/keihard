import React from "react";
import { withTranslation, Trans } from "react-i18next";
import { connect } from "react-redux";
import styled from "styled-components";

import * as Pledge from "ducks/pledge";

import {
  Title,
  Text,
  Form,
  InputGroup,
  Input,
  Button,
  Modal,
} from "components/lib";
import PaymentMethod from "components/PaymentMethod";

const H1 = styled(Title(1))`
  strong {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Kbd = styled.kbd`
  padding: 0.125em 0.25em;
  border-radius: ${(props) => props.theme.border.radius};

  background-color: rgba(0, 0, 0, 0.05);
`;

const PaymentMethods = () => (
  <div>
    <PaymentMethod method="PayPal" />
    <PaymentMethod method="Bankoverschrijving" />
  </div>
);

const SponsorModal = ({ t, values, update, updateModified, submit }) => (
  <Modal name="sponsor" small height="480px">
    <H1>
      <Trans i18nKey="title">
        <strong>Thanks</strong>
      </Trans>
    </H1>
    {values.success ? (
      values.payment_method === "Bankoverschrijving" ? (
        <Text center>
          {t("transfer", { amount: values.amount })}{" "}
          <Kbd>NL48 RABO 0118 539 108</Kbd> {t`to`} <Kbd>Wouter Raateland</Kbd>{" "}
          {t`stating`} <Kbd>Sponsoring {values.name}</Kbd> {t`confirm`}.
        </Text>
      ) : (
        <Text center>
          {t`success`}{" "}
          <span role="img" aria-label="party">
            🎉
          </span>
        </Text>
      )
    ) : (
      <Form>
        <InputGroup>
          <Input
            block
            label={t`name`}
            name="name"
            type="text"
            value={values.name}
            onChange={update("name")}
            required
          />
          <Input
            block
            label={t`email`}
            name="email"
            type="email"
            value={values.email}
            onChange={update("email")}
            required
          />
        </InputGroup>
        <InputGroup>
          <Input
            block
            label={t`amount`}
            type="text"
            value={`€${values.amount > 0 ? values.amount : ""}`}
            onChange={updateModified("amount")}
          />
          <Input
            block
            label={`${t`payment method`}: ${t(
              `methods.${values.payment_method}`
            )}`}
            component={PaymentMethods}
          />
        </InputGroup>
        <InputGroup>
          <Input
            type="radio"
            options={[
              { label: t`options.both`, value: "both" },
              { label: t`options.kika`, value: "kika" },
            ]}
            value={values.who}
            onChange={update("who")}
          />
          <Button
            type="submit"
            block
            primary
            large
            onClick={(event) => {
              event.preventDefault();
              submit();
            }}
          >{t`cta`}</Button>
        </InputGroup>
      </Form>
    )}
  </Modal>
);

const mapStateToProps = (state) => ({
  values: state.pledge,
});

const mapDispatchToProps = (dispatch) => ({
  update: (field) => (value) => dispatch(Pledge.update(field, value)),
  updateModified: (field) => (value) =>
    dispatch(Pledge.update(field, parseInt(value.substring(1) || 0, 10))),
  submit: () => dispatch(Pledge.submit()),
});

export default withTranslation("modal")(
  connect(mapStateToProps, mapDispatchToProps)(SponsorModal)
);

import React from "react";
import { Container, Text, Loader } from "tempest-ui";

const UnderConstruction: React.FC = () => {
  return (
    <Container layout="centered">
      <Text variant="extra-large">
        Ready when it's done
        <span style={{ color: "var(--color-primary)" }}>.</span>
      </Text>
      <Loader />
      <img src="construction.svg" alt="" />
    </Container>
  );
};

export default UnderConstruction;

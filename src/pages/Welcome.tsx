import React from "react";
import { Container, Text, Blockquote } from "tempest-ui";

const Welcome: React.FC = () => {
  return (
    <Container>
      <Text variant="extra-large">
        tempest-ui<span style={{ color: "var(--color-primary)" }}>.</span>
      </Text>
      <Text variant="h2">
        A <span style={{ color: "var(--color-primary)" }}>new</span> and{" "}
        <span style={{ color: "var(--color-primary)" }}>improved</span> way to
        build functional and beautiful UIs.
      </Text>
      <Blockquote language="bash" copyable={true}>
        npm install tempest-ui
      </Blockquote>
    </Container>
  );
};

export default Welcome;

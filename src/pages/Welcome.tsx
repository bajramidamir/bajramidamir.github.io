import React from "react";
import { Container, Text, Blockquote } from "tempest-ui";

const Welcome: React.FC = () => {
  return (
    <Container>
      <Text variant="extra-large">
        tempest-ui<span style={{ color: "var(--color-primary)" }}>.</span>
      </Text>
      <Text variant="h2">
        Streamlining UI development, one component at a time.
      </Text>
      <Blockquote language="bash" copyable={true}>
        npm install tempest-ui
      </Blockquote>
    </Container>
  );
};

export default Welcome;

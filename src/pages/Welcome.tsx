import React from "react";
import { Container, Text, Blockquote, Button, Icon, Link } from "tempest-ui";

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
      <Text variant="small">
        Don't forget to check out the{" "}
        <Link
          href="https://damirs-organization.gitbook.io/tempest-ui-docs"
          target="_blank"
        >
          docs
        </Link>
      </Text>
      <Container layout="grid" margin="0" padding="0">
        <Link href="https://github.com/bajramidamir/tempest-ui" target="_blank">
          <Button variant="text">
            <Icon src="github-mark.svg" />
          </Button>
        </Link>
        <Link href="https://www.npmjs.com/package/tempest-ui" target="_blank">
          <Button variant="text">
            <Icon src="npm.png" />
          </Button>
        </Link>
      </Container>
      <Blockquote language="bash" copyable={true}>
        npm install tempest-ui
      </Blockquote>
    </Container>
  );
};

export default Welcome;

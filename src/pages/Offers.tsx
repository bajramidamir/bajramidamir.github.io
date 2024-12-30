import React from "react";
import { Container, Card, Text, Button, Link } from "tempest-ui";

const Offers: React.FC = () => {
  return (
    <>
      <Container>
        <Text variant="h3">An offers page</Text>
        <Link
          href="https://github.com/bajramidamir/tempest-ui/blob/main/src/templates/Offers.tsx"
          target="_blank"
        >
          <Button color="primary" variant="text">
            Source Code
          </Button>
        </Link>
      </Container>

      <Container layout="grid">
        <Card
          title="Starter"
          content={
            <>
              <Text variant="h3" centered>
                $4.99 a month
              </Text>
              <Text centered>Only the basics. What do you expect?</Text>
            </>
          }
          image="https://picsum.photos/1000"
          actions={
            <Container margin="0" padding="0" layout="centered">
              <Button color="primary">Subscribe</Button>
            </Container>
          }
        />
        <Card
          title="Standard"
          content={
            <>
              <Text variant="h3" centered>
                $9.99 a month
              </Text>
              <Text centered>You get more options, hence the name.</Text>
            </>
          }
          image="https://picsum.photos/1000"
          actions={
            <Container margin="0" padding="0" layout="centered">
              <Button color="primary">Subscribe</Button>
            </Container>
          }
        />
        <Card
          title="Deluxe"
          content={
            <>
              <Text variant="h3" centered>
                $19.99 a month
              </Text>
              <Text centered>You get everything our service offers!</Text>
            </>
          }
          image="https://picsum.photos/1000"
          actions={
            <Container margin="0" padding="0" layout="centered">
              <Button color="primary">Subscribe</Button>
            </Container>
          }
        />
      </Container>
    </>
  );
};

export default Offers;

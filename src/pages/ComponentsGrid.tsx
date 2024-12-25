import React, { useState } from "react";
import {
  Container,
  Text,
  Button,
  Card,
  Accordion,
  Input,
  Alert,
} from "tempest-ui";

const ComponentsGrid: React.FC = () => {
  const [alertVisibility, setAlertVisibility] = useState<boolean>(false);

  const handleAlertButton = () => {
    setAlertVisibility(true);
    setTimeout(() => {
      setAlertVisibility(false);
    }, 3000);
  };

  return (
    <div>
      <Container>
        <Text variant="h3">Buttons</Text>
      </Container>

      <Container layout="grid">
        <Button variant="filled" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="text" color="primary">
          Primary
        </Button>
      </Container>

      <Container layout="grid">
        <Button variant="filled" color="neutral">
          Neutral
        </Button>
        <Button variant="outlined" color="neutral">
          Neutral
        </Button>
        <Button variant="text" color="neutral">
          Neutral
        </Button>
      </Container>

      <Container>
        <Button variant="disabled">Disabled</Button>
      </Container>

      <Container>
        <Text variant="h3">Inputs</Text>
      </Container>

      <Container>
        <Input type="text" placeholder="Text input" />
        <Input type="text" disabled placeholder="Disabled text input" />
        <Input type="password" placeholder="Password!" />
        <Input type="number" placeholder="Number. You get the idea..." />
      </Container>

      <Container>
        <Text variant="h3">Accordion</Text>
      </Container>

      <Container>
        <Accordion title="Title">
          <Text>Isn't this accordion pretty cool? I'd say so.</Text>
          <Button onClick={handleAlertButton} color="primary" variant="text">
            What does the button do?
          </Button>
          {alertVisibility && (
            <Alert variant="success">It pops this alert!</Alert>
          )}
        </Accordion>
        <Accordion initialOpen={true} title="Open?!">
          <Text variant="small">Hey! This one's already open!</Text>
        </Accordion>
      </Container>

      <Container>
        <Text variant="h3">Card</Text>
      </Container>

      <Container layout="grid">
        <Card
          image="https://picsum.photos/1000"
          title="Cards are so cool"
          content={
            <>
              <Text>We can put a lot of things here!</Text>
            </>
          }
          actions={
            <>
              <Button color="primary">Button 1</Button>
              <Button>Button 2</Button>
            </>
          }
        />
        <Card
          image="https://picsum.photos/1000"
          title="Cards still cool"
          content={<Text>Social media post</Text>}
          actions={
            <Button color="primary" variant="text">
              Like
            </Button>
          }
        />
      </Container>
    </div>
  );
};

export default ComponentsGrid;

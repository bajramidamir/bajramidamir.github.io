import React from "react";
import { Loader, Text, Container, Spacer } from "tempest-ui";

const FourOhFour: React.FC = () => {
  return (
    <>
      <Container>
        <Text variant="h3">A 404 page</Text>
      </Container>

      <Container layout="centered">
        <Text variant="extra-large">
          Oops. The page you are looking for has gone missing...
        </Text>
        <Spacer space={128} />
        <Loader />
      </Container>
    </>
  );
};

export default FourOhFour;

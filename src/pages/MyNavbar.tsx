import React from "react";
import { Navbar, Link, Text } from "tempest-ui";

const MyNavbar: React.FC = () => {
  return (
    <Navbar
      title="tempest-ui"
      fixed
      actions={
        <>
          <Text>
            <Link href="#">Docs</Link>
          </Text>
          <Text>
            <Link href="#">Guide</Link>
          </Text>
          <Text>
            <Link href="#examples">Examples</Link>
          </Text>
        </>
      }
    />
  );
};

export default MyNavbar;

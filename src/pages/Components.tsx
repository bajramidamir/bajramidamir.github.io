import React, { useState } from "react";
import {
  Container,
  Text,
  Carousel,
  Button,
  Input,
  Dropdown,
  Switch,
  RadioButton,
} from "tempest-ui";

const Components: React.FC = () => {
  const dropdownOptions = ["Apple", "Banana", "Blueberry", "Cherry"];
  const [isOn, setIsOn] = useState<boolean>(false);
  const [radioSelected, setRadioSelected] = useState<string>("Option 1");

  const carouselItems = [
    <Button onClick={() => alert("Button clicked")} color="primary">
      I'm a Button!
    </Button>,
    <Input type="text" placeholder="I'm a text Input!" />,
    <Dropdown
      label="Dropdown"
      options={dropdownOptions}
      onSelect={(selected) => alert(selected)}
    />,
    <Switch checked={isOn} onChange={() => setIsOn(!isOn)} />,
    <div>
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2" color="primary">
        Primary Heading 2
      </Text>
      <Text variant="small">Small.</Text>
    </div>,
    <div>
      <RadioButton
        label="Radio 1"
        name="radioGroup"
        checked={radioSelected === "Option 1"}
        onChange={() => setRadioSelected("Option 1")}
      />
      <RadioButton
        label="Radio 2"
        name="radioGroup"
        checked={radioSelected === "Option 2"}
        onChange={() => setRadioSelected("Option 2")}
      />
      <RadioButton
        label="Radio 3"
        name="radioGroup"
        checked={radioSelected === "Option 3"}
        onChange={() => setRadioSelected("Option 3")}
      />
      <RadioButton
        label="Radio 4"
        name="radioGroup"
        disabled
        checked={false}
        onChange={() => {}}
      />
    </div>,
  ];

  return (
    <Container>
      <Text variant="extra-large" color="primary">
        Components
      </Text>
      <Text>Aren't they lovely? Have a taste. There are tons more.</Text>

      <Carousel items={carouselItems} />
    </Container>
  );
};

export default Components;

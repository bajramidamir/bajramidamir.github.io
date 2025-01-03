import React, { useState } from "react";
import {
  Container,
  Text,
  Textarea,
  Button,
  Input,
  Form,
  Link,
} from "tempest-ui";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      firstName: formData.firstName ? "" : "First name is required.",
      lastName: formData.lastName ? "" : "Last name is required.",
      email: /\S+@\S+\.\S+/.test(formData.email)
        ? ""
        : "Enter a valid email address.",
      message: formData.message ? "" : "Message cannot be empty.",
    };
    setErrors(newErrors);
    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Form submitted successfully:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Container>
        <Text variant="h3">A simple contact form</Text>
        <Link
          target="_blank"
          href="https://github.com/bajramidamir/tempest-ui/blob/main/src/templates/ContactForm.tsx"
        >
          <Button variant="text" color="primary">
            Source code
          </Button>
        </Link>
      </Container>

      <Container layout="centered">
        <Text variant="h1">
          <span style={{ color: "var(--color-primary)" }}>Interested</span> in
          what you see? Contact us!
        </Text>
        <Text>A small message goes a long way!</Text>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <Text color="danger">{errors.firstName}</Text>}

          <Input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <Text color="danger">{errors.lastName}</Text>}

          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <Text color="danger">{errors.email}</Text>}

          <Textarea
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <Text color="danger">{errors.message}</Text>}

          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ContactForm;

import React from 'react';
import { TextInput, TextArea, Button } from '@carbon/react';
import { CheckmarkFilled } from '@carbon/icons-react';

export default function ContactFormComponent() {
  return (
    <form name="contact" method="POST" data-netlify="true" className="space-y-4 mt-6">
      <input type="hidden" name="form-name" value="contact" />

      <TextInput
        id="name"
        name="name"
        labelText="Full Name"
        required
        className="mb-3"
      />

      <TextInput
        id="email"
        name="email"
        type="email"
        labelText="Email Address"
        required
        className="mb-3"
      />

      <TextArea
        id="message"
        name="message"
        labelText="Your Message"
        rows={4}
        required
        className="mb-4"
      />

      <Button type="submit" kind="primary" renderIcon={CheckmarkFilled}>
        Send Message
      </Button>
    </form>
  );
}

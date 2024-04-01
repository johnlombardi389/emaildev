import { useState } from "react";
import axios from "axios";
// Style
import styled from "styled-components";

// 22a49e5c8b13eb7dc8e5a4d21a526ee3

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://formsubmit.co/ajax/22a49e5c8b13eb7dc8e5a4d21a526ee3",
        formData
      );
      if (response.status === 200) {
        setMessageSent(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setMessageSent(false);
  };

  return (
    <StyledContact id="contact">
      <h2>Contact Me</h2>
      <FormWrapper onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextareaField
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">
          {isSubmitting ? "Sending..." : "Send Message"}
        </SubmitButton>
        {messageSent && (
          <SuccessMessage>Message sent successfully!</SuccessMessage>
        )}
      </FormWrapper>
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.section`
  background-color: #f9f9f9;
  padding: 5rem 2rem;
  text-align: center;
  h2 {
    font-family: "Signika", sans-serif;
    font-weight: 700;
    letter-spacing: 0.075rem;
    margin-bottom: 2rem;
    color: #333;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

const InputField = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #274555;
  }
`;

const TextareaField = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #274555;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1rem;
  background-color: #274555;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-family: "Signika", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #172932;
    color: #f9a11b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.p`
  margin-top: 1rem;
  color: #008000;
  font-weight: bold;
`;

import React, { FC, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './MessageForm.scss';

type MessageFormProps = {
  onMessageSend: (message: string) => void;
};

export const MessageForm: FC<MessageFormProps> = ({ onMessageSend }) => {
  const [text, setText] = useState<string>('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    onMessageSend(text);
    setText('');
  };

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Row className="p-3">
      <Col md="8">
        <Form.Control
          name="text"
          value={text}
          placeholder="Enter message"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </Col>

      <Col md="4">
        <Button
          className="w-100"
          variant="warning"
          onClick={handleSubmit}
          disabled={!text.length}
        >
          Send
        </Button>
      </Col>
    </Row>
  );
};

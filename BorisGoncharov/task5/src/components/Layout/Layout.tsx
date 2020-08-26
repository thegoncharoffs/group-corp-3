import React, { FC, useState } from 'react';
import './Layout.scss';
import { Header } from '../Header';
import { ChatList, Chat } from '../ChatList';
import { Messenger } from '../Messenger';
import { AuthUser } from '../../context/AuthUser';
import { Col, Container, Row } from 'react-bootstrap';
import { Message } from '../Message';
import { generate } from 'shortid';

export const Layout: FC<{}> = () => {
  const [chats, setChats] = useState<Chat[]>([
    { title: 'Chat 1', id: generate(), messages: [] },
    { title: 'Chat 2', id: generate(), messages: [] },
    { title: 'Chat 3', id: generate(), messages: [] },
    { title: 'Chat 4', id: generate(), messages: [] },
  ]);
  const [activeChat, setActiveChat] = useState<Chat>(chats[0]);

  const handleChatSelect = (id: string) => () => {
    const activeChat = chats.find((chat) => chat.id === id);
    if (activeChat) {
      setActiveChat(activeChat);
    }
  };

  const handleMessagesChange = (messages: Message[]): void => {
    setChats(
      chats.map((chat) => {
        if (chat.id === activeChat.id) {
          chat.messages = messages;
        }
        return chat;
      })
    );
    handleChatSelect(activeChat.id);
  };

  return (
    <AuthUser.Provider value="User">
      <Container>
        <Col className="p-0 shadow-lg">
          <Header title="Chat v.0.0.5" />

          <Row noGutters>
            <Col md="3" className="bg-secondary">
              <ChatList
                chats={chats}
                onChatSelect={handleChatSelect}
                activeChatId={activeChat.id}
              />
            </Col>

            <Col md="9">
              <Messenger
                messages={activeChat.messages}
                onMessagesChange={handleMessagesChange}
              />
            </Col>
          </Row>
        </Col>
      </Container>
    </AuthUser.Provider>
  );
};

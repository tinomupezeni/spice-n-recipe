import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API = "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";

const Ai = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Max your chef, how can i help",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  const processMessageToChatGPT = async (chatMessages) => {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content:
        "Provide me with delicious recipes and detailed spice information",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      );

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: data.choices[0].message.content,
          sender: "ChatGPT",
          direction: "incoming",
        },
      ]);

      setTyping(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ height: "400px", overflowY: "scroll" }}>
      <MainContainer style={{ border: "none" }}>
        <ChatContainer>
          <MessageList
            style={{ maxHeight: "100%", overflowY: "auto", border: "none" }}
            typingIndicator={
              typing ? <TypingIndicator content="Max is typing" /> : null
            }
          >
            {messages.map((message, i) => (
              <Message key={i} model={message} />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Enter ingredient or recipe"
            onSend={handleSend}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Ai;

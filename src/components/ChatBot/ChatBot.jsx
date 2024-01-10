import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: 'Bot: Welcome! How can I assist you with your gym needs today?', user: 'bot' },
  ]);
  const [options, setOptions] = useState(['Join the gym','Prices', 'Our Fitness philosophy', 'Personal training']);

  const handleOptionClick = (option) => {
    
    const userMessage = { text: `${option}`, user: 'user' };

    let reply;

    switch (option) {
      case 'Join the gym':
        reply = 'Bot: Awesome choice! We would love to have you as a member. Please go to the contact us section for more details';
        break;
        case 'Prices':
            reply = 'Bot: Monthly fee = 40€  Annual fee = 360€ ';
            break;
      case 'Our Fitness philosophy':
        reply = "Bot:  We focus on educating clients in ways that can support their goals and exercise adherence.\n We meet them where they are each day and never push them harder than necessary to help them feel successful.\n We use inclusive language that supports a positive self-image and the unique identity of the client.";
        break;
      case 'Personal training':
        reply = 'Bot: Interested in personal training? Our certified trainers can help you achieve your fitness goals. Please inquire at the front desk for more information.';
        break;
      default:
        reply = 'Bot: I did not understand that option.';
        break;
    }

    
    const botReply = { text: reply, user: 'bot' };

    
    setMessages([...messages, userMessage, botReply]);
  };

  const renderOptions = () => {
    return options.map((option, index) => (
      <button key={index} onClick={() => handleOptionClick(option)}>
        {option}
      </button>
    ));
  };

  return (
    <div className="chat-bot">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="options">{renderOptions()}</div>
    </div>
  );
};

export default ChatBot;

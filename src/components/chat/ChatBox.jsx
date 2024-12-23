import React, { useState } from 'react';
import './Chatbox.css';
import { Send, Close } from '@mui/icons-material';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const messageInput = document.getElementById('chat-input');
    const message = messageInput.value.trim();

    if (message) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      messageInput.value = '';
    }
  };

  return (
    <div className="chatbox-container">
      {/* Minimized Chat Icon */}
      {!isOpen && (
        <button className="chatbox-toggle" onClick={toggleChatbox}>
          💬 
        </button>
      )}

      {/* Expanded Chatbox */}
      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            <h4>Chat with Us</h4>
            <button className="close-button" onClick={toggleChatbox}>
              <Close />
            </button>
          </div>
          <div className="chatbox-messages">
            {messages.length === 0 ? (
              <p className="no-messages">No messages yet. Say hi!</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))
            )}
          </div>
          <form className="chatbox-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              id="chat-input"
              placeholder="Type your message..."
              autoComplete="off"
            />
            <button type="submit" className="send-button">
              <Send />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
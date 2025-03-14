import React, { useState } from 'react';
import axios from 'axios';
import './index.scss';

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post(
        API_URL,
        {
          contents: [{ parts: [{ text: input }] }],
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const aiReply =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        'AI 未返回内容';
      setMessages([...newMessages, { role: 'assistant', content: aiReply }]);
    } catch (error) {
      console.error('请求失败:', error);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: '请求失败，请稍后再试。' },
      ]);
    }
  };

  return (
    <div className="ai-chatbot">
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        🤖
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="输入消息..."
            />
            <button onClick={sendMessage}>发送</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatBot;

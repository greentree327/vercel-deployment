import React, { useState, useEffect, useRef } from 'react';
import './ChatbotButton.css';

const ChatbotButton = () => {
  const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://vercel-deployment-server-plum.vercel.app/api/chat'
    : 'http://localhost:3001/api/chat';

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Keep all answers short, accurate, and helpful. You are an AI assistant for AdVantage AI, an innovative team based in Hong Kong, founded by graduates and researchers from The University of Hong Kong. Our team specializes, but not limited to AI-powered marketing automation, including automated messaging, task-specific chatbots, Meta ad deployment, and unified analytics dashboards. Explain our solutions, background, values (innovation, client success, technical excellence, ethical AI), and trusted collaborators (like HK Science Park, The University of Hong Kong, Nomura, Google, Datality Lab) clearly and concisely. Use simple, easy-to-read language and break down complex ideas. If asked about topics outside AdVantage AI, politely say you only answer questions about the team and its work. Encourage users to request demos or contact us at information@advantageai.site for more info. "
    },
    { 
      role: 'assistant',
      content: "Hi there! 👋 Ready to discover how AI can boost your business? Ask me anything or let me know how I can help!",
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const currentTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      // Add user message to messages state
      setMessages(currentMessages => [
        ...currentMessages,
        { role: 'user', content: inputMessage, timestamp: currentTime }
      ]);
      setInputMessage(''); // Clear input field
      setIsLoading(true);


      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [...messages, { role: 'user', content: inputMessage }],
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const { messages: newMessages } = await response.json();
        setMessages(currentMessages => [...currentMessages, 
          ...newMessages.map(msg => ({
            ...msg,
            timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
          }))
        ]);

      } catch (error) {
        console.error('Chat error:', error);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting. Please try again.",
          timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
        }]);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll when messages update
    // Keywords that trigger the demo buttonorganized by category
  const demoTriggers = [
    // Company information related triggers
    'company', 'about', 'who', 'background', 'team',
    // Product related triggers
    'product', 'service', 'solution', 'feature',
    // Interest/Contact related triggers
    'demo', 'try', 'learn more', 'interested', 'contact', 'price', 'cost',
    // Automation related triggers
    'chatbot', 'marketing', 'automation', 'analytics'
  ];
  // Demo button visibility is handled directly in the JSX using demoTriggers

  return (
    <>
      {/* Chat Window */}      {isChatOpen && (
        <div className="chat-window">          {/* Chat Header */}          <div style={{            backgroundColor: '#6B46FE',
            padding: '2px 16px',  // Reduced top/bottom padding from 8px to 4px
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '14px',
              flex: 1,
              justifyContent: 'center'
            }}>
              <img 
                src="/images/chatbot-icon.png" 
                alt="" 
                style={{
                  width: '38px',
                  height: '28px',
                  padding: '2px'
                }}
              />
              <span style={{ fontSize: '24px', fontWeight: '500' }}>Chat with us</span>
            </div>
            <button 
              onClick={toggleChat}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '20px'
              }}
            >
              ×
            </button>
          </div>          {/* Chat Messages Area */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto'
          }}>            {messages
            .filter(message => message.role !== 'system')
            .map((message, index, messagesArray) => (
              <React.Fragment key={index}>
                <div style={{ marginBottom: '24px' }}>
                  <div
                    style={{
                      backgroundColor: message.role === 'user' ? 'transparent' : '#f0f0f0',
                      color: message.role === 'user' ? '#333' : '#333',
                      padding: '16px',
                      borderRadius: '16px',
                      width: 'auto',
                      minWidth: '200px',
                      maxWidth: '350px',
                      marginLeft: message.role === 'user' ? 'auto' : '0',
                      fontSize: '20px',
                      lineHeight: '1.5',
                      border: message.role === 'user' ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
                      wordWrap: 'break-word',
                      whiteSpace: 'pre-wrap',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    {typeof message.content === 'string'
                      ? <div>{message.content}</div>
                      : message.content
                          .filter(part => part.type === 'text')
                          .map((part, partIndex) => (
                            <div key={partIndex}>{part.text}</div>
                      ))}
                  </div>
                  {message.timestamp && (
                    <div style={{
                      fontSize: '12px',
                      color: '#666',
                      marginTop: '4px',
                      textAlign: message.role === 'user' ? 'right' : 'left'
                    }}>
                      {message.timestamp}
                    </div>
                  )}
                </div>                {message.role === 'assistant' && 
                 messagesArray[index-1] && 
                 messagesArray[index-1].role === 'user' && 
                 demoTriggers.some(trigger => 
                   messagesArray[index-1].content.toLowerCase().includes(trigger)) && (
                  <div className="demo-button-container" style={{ marginBottom: '24px' }}>
                    <div style={{
                      backgroundColor: '#f8f9fa',
                      padding: '16px',
                      borderRadius: '16px',
                      width: 'auto',
                      minWidth: '200px',
                      maxWidth: '350px',
                      marginLeft: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      alignItems: 'center'
                    }}>
                      <p style={{
                        margin: '0 0 10px 0',
                        fontSize: '14px',
                        color: '#4B5563'
                      }}>
                        Would you like to schedule a personalized demo?
                      </p>
                      <button
                        className="demo-button"
                        onClick={() => window.location.href = '/contact'}
                        aria-label="Book a Demo"
                      >
                        Book a Demo →
                      </button>
                    </div>
                    {message.timestamp && (
                      <div style={{
                        fontSize: '12px',
                        color: '#666',
                        marginTop: '4px',
                        textAlign: 'left'
                      }}>
                        {message.timestamp}
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
            {isLoading && (
              <div style={{
                backgroundColor: '#f0f0f0',
                padding: '15px',
                borderRadius: '10px',
                maxWidth: '80%',
                marginBottom: '10px'
              }}>
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Scroll anchor */}
          </div>          {/* Chat Input */}
          <div style={{
            borderTop: '1px solid #eee',
            padding: '15px 15px 8px 15px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              flex: '0 1 auto',
              minWidth: '100px',
              maxWidth: '80%',
              background: 'white',
              borderRadius: '8px',
              display: 'flex'
            }}>              <textarea 
                value={inputMessage}
                onChange={(e) => {
                  setInputMessage(e.target.value);
                  // Auto-resize height only
                  e.target.style.height = 'auto';
                  e.target.style.height = Math.min(e.target.scrollHeight, 150) + 'px';
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type here to chat"                style={{
                  // Fixed width for the input box - adjust this value to change the box width
                  width: '300px',
                  padding: '8px 16px',
                  border: '1px solid rgba(107, 70, 254, 0.2)',
                  borderRadius: '8px',
                  fontSize: '20px',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  transition: 'border-color 0.2s ease',
                  resize: 'none',
                  overflow: 'hidden',
                  minHeight: '20px',
                  maxHeight: '150px',
                  fontFamily: 'inherit',
                  fontWeight: '400',
                  color: '#333'
                }}
              />
            </div>
            <button 
              onClick={handleSendMessage}
              style={{
                backgroundColor: '#6B46FE',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: '500',
                transition: 'background-color 0.2s ease',
                flexShrink: 0
              }}
            >
              Send
            </button>
          </div>          {/* Powered by text */}
          <div style={{
            textAlign: 'center',
            padding: '4px 0 8px 0',
            fontSize: '12px',
            color: '#666'
          }}>
            Powered by AdVantage AI
          </div>
        </div>
      )}

      {/* Chat Button */}
      <div 
        onClick={toggleChat}
        style={{          position: 'fixed',
          bottom: '40px',
          right: '60px',
          zIndex: 999, // Decreased to be below the chat window
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
        <div style={{
          backgroundColor: '#6B46FE',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)'
        }}>
          <img 
            src="/images/chatbot-icon.png" 
            alt="Chat with us"
            style={{
              width: '66px',     // Increased from 30px
              height: '56px',    // Increased from 30px
              padding: '12px'     // Added small padding to prevent touching the border
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ChatbotButton;
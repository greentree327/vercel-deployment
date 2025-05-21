import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Automated Messaging & Task-Specific Chatbots",
    description: "Leverage AI to automate sending messages and deploy chatbots tailored to specific tasks."
  },
  {
    title: "Meta Ad Deployment",
    description: "Automatically place and manage advertisements on Meta platforms, streamlining campaign execution and maximizing reach."
  },
  {
    title: "Unified Analytics Dashboard",
    description: "Use AI to generate effective advertisements automatically, saving time and ensuring high-quality content."
  },
];

function Features() {
  return (
    <section id="features" style={{ 
      position: "relative",
      width: "100vw",
      margin: 0,
      padding: "80px 0",
      background: "#f8f8f8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "hidden"
    }}>
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: "4rem",
        fontSize: "2.5rem",
        color: "#333",
        padding: "0 20px"
      }}>
        Proven AI Solutions in Action
      </h2>
      <div style={{
        position: "relative",
        width: "100vw",
        display: "flex",
        justifyContent: "flex-start",
        gap: "3rem",
        flexWrap: "nowrap",
        overflowX: "auto",
        padding: "1rem calc((100vw - 1400px) / 2)",
        margin: 0,
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            flex: "0 0 380px",
            minWidth: "380px",
            height: "400px",
            padding: "3rem 2rem",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            marginLeft: index === 0 ? "20px" : "0",
            marginRight: index === features.length - 1 ? "20px" : "0"
          }}>
            <h3 style={{ 
                fontSize: "1.75rem",
                color: "#333",
                marginBottom: "1.5rem",
                wordWrap: "break-word",
                hyphens: "auto"
              }}>{feature.title}</h3>
            <p style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "1.1rem",
              flex: 1,
              wordWrap: "break-word",
              overflow: "hidden"
            }}>{feature.description}</p>
            <Link 
              to="/contact" 
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                marginTop: "auto"
              }}
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
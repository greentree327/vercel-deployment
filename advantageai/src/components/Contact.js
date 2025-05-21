import React, { useState } from 'react';

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://vercel-deployment-server-plum.vercel.app/api/send-email'
  : 'http://localhost:3001/api/send-email';

const contactHeader = {
  image: "/images/Contact_us.png",
  title: "Contact us"
};

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessType: '',
    websiteUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmailFromFrontend();
  };
  const sendEmailFromFrontend = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },        
        body: JSON.stringify({
          to: formData.email,
          fromName: 'AdVantage AI',
          fromEmail: 'jackson3b04@gmail.com',
          subject: 'Demo Request Confirmation - AdVantage AI',
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <p>Hi ${formData.firstName} ${formData.lastName},</p>

              <p>Thank you for your interest in AdVantage AI. We look forward to helping your ${formData.businessType} business.</p>

              <p>Our team will review your <a href="${formData.websiteUrl}" style="color: #0066cc; text-decoration: none;">website</a> and contact you soon with a tailored AI solution.</p>

              <p>Best regards,<br/>
              AdVantage AI Team</p>
            </div>
          `,
        }),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Failed to send email: ' + (data.error || data.message || 'Unknown error'));
        }
      } else {
        throw new Error('Received non-JSON response from server');
      }
    } catch (error) {
      console.error('Error details:', error);
      alert('Error sending email. Please try again later.');
    }
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <section style={{
        position: "relative",
        height: "50vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#000",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "100%",
          margin: 0,
          padding: 0,
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${contactHeader.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "80px",
          color: "white",
        }}>
          <div style={{
            maxWidth: "800px",
            width: "100%",
            padding: "0 8%",
          }}>
            <h1 style={{
              fontSize: "4.5rem",
              marginBottom: "1.5rem",
              textAlign: "left",
              lineHeight: "1.1",
              whiteSpace: "pre-line",
              fontWeight: "normal"
            }}>{contactHeader.title}</h1>
          </div>
        </div>
      </section>      <div style={{
        display: "flex",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 20px",
        gap: "120px",
        alignItems: "flex-start"
      }}>
        {/* Left Column - General Enquiries */}
        <div style={{
          flex: "1",
          paddingTop: "40px"
        }}>
          <h2 style={{
            fontSize: "2rem",
            marginBottom: "20px",
            color: "#333"
          }}>General enquiries</h2>
          <a 
            href="mailto:evoncapitalorg@gmail.com"
            style={{
              color: "#333",
              textDecoration: "none",
              fontSize: "1.2rem",
              display: "block"
            }}
          >
            evoncapitalorg@gmail.com
          </a>
        </div>

        {/* Right Column - Book a Demo Form */}
        <div style={{
          flex: "2",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "40px"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#333"
          }}>Book a demo</h2>
          <p style={{
            fontSize: "1.2rem",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "40px"
          }}>
            See how our AI-powered messaging bots and automated ad campaigns can grow your business. 
            Get a personalized demo and start automating in minutes.
          </p>

          <form onSubmit={handleSubmit} style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px"
          }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{
                marginBottom: "8px",
                fontSize: "1rem",
                color: "#333"
              }}>First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                style={{
                  padding: "12px",
                  fontSize: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  width: "100%"
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{
                marginBottom: "8px",
                fontSize: "1rem",
                color: "#333"
              }}>Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                style={{
                  padding: "12px",
                  fontSize: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  width: "100%"
                }}
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{
                marginBottom: "8px",
                fontSize: "1rem",
                color: "#333",
                display: "block"
              }}>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  padding: "12px",
                  fontSize: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  width: "100%"
                }}
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{
                marginBottom: "8px",
                fontSize: "1rem",
                color: "#333",
                display: "block"
              }}>Business Type*</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                required
                style={{
                  padding: "12px",
                  fontSize: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  width: "100%",
                  backgroundColor: "#fff"
                }}
              >
                <option value="">Select your business type</option>
                <option value="startup">Startup</option>
                <option value="e-commerce">E-commerce</option>
                <option value="enterprise">Enterprise</option>
                <option value="non-profit organization">Non-profit organization</option>
                <option value="freelancer/consultant">Freelancer/Consultant</option>
                <option value="other">Others</option>
              </select>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{
                marginBottom: "8px",
                fontSize: "1rem",
                color: "#333",
                display: "block"
              }}>Brand/Agency Website URL*</label>
              <input
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                placeholder="yourcompany.com"
                required
                style={{
                  padding: "12px",
                  fontSize: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  width: "100%"
                }}
              />
            </div>

            <div style={{ 
              gridColumn: "1 / -1",
              marginTop: "20px"
            }}>
              <button
                type="submit"
                style={{
                  padding: "16px 32px",
                  fontSize: "1.1rem",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "100%",
                  fontWeight: "500"
                }}
              >
                Book a Demo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
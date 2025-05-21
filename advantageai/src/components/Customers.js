import React from 'react';

const Customers = () => {
  const customerBoxStyle = {
    flex: '0 0 250px',
    margin: '0',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const containerStyle = {
    position: 'relative',
    width: '100vw',
    margin: 0,
    padding: '4rem 0',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  };

  const wrapperStyle = {
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const boxesContainerStyle = {
    display: 'flex',
    alignItems: 'stretch',
    gap: '4rem',
    padding: '0.5rem 20px',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    WebkitOverflowScrolling: 'touch',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };

  const mainHeadingStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    padding: '0 20px',
  };

  const logoStyle = {
    width: '150px',
    height: '150px',
    margin: '0 auto 1rem',
    objectFit: 'contain',
  };

  return (
    <section style={containerStyle}>
      <div style={wrapperStyle}>
        <h2 style={mainHeadingStyle}>Trusted by our Partners</h2>
        <div style={boxesContainerStyle}>
          <div style={customerBoxStyle}>
            <img
              src="/images/hkstp-logo.png"
              alt="Hong Kong Science Park Logo"
              style={logoStyle}
            />
            <h3>Hong Kong Science Park</h3>
          </div>
          <div style={customerBoxStyle}>
            <img
              src="/images/hku-logo.png"
              alt="The University of Hong Kong Logo"
              style={logoStyle}
            />
            <h3>The University of Hong Kong</h3>
          </div>
          <div style={customerBoxStyle}>
            <img
              src="/images/cuhk-logo.png"
              alt="The Chinese University of Hong Kong Logo"
              style={logoStyle}
            />
            <h3>The Chinese University of Hong Kong</h3>
          </div>
          <div style={customerBoxStyle}>
            <img src="/images/nomura_logo.jpg" alt="Nomura Logo" style={logoStyle} />
            <h3>Nomura</h3>
          </div>
          <div style={customerBoxStyle}>
            <img src="/images/google_logo.png" alt="Google Logo" style={logoStyle} />
            <h3>Google</h3>
          </div>
          <div
            style={{
              ...customerBoxStyle,
              marginRight: '20px',
            }}
          >
            <img
              src="/images/Datality_Lab_Logo.png"
              alt="Datality Lab Logo"
              style={logoStyle}
            />
            <h3>Datality Lab</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
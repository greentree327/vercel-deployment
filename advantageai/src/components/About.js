import React from 'react';

const aboutSlide = {
  image: "/images/who_we_are.jpg",
  title: "Who we are"
};

function About() {
  return (
    <div>
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
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${aboutSlide.image})`,
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
            }}>{aboutSlide.title}</h1>
          </div>
        </div>
      </section>

      {/* About content sections */}
      <section style={{
        background: "transparent",
        color: "#000",
        padding: "80px 0"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 3%",
          padding: "0 5%"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            marginBottom: "2rem"
          }}>
            About Us
          </h2>          <div style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            maxWidth: "800px"
          }}>
            <p style={{ marginBottom: "1.5rem" }}>
              AdVantage AI is a dynamic team of AI innovators from The University of Hong Kong, bringing the latest research and creative thinking to businesses seeking a competitive edge through artificial intelligence.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              Founded by final-year and recent graduates in Computer Science and Engineering, our team combines deep technical expertise with a fresh, adaptable perspective. Guided by leading academics and industry mentors, we specialize in designing and implementing custom AI solutions tailored to each client's unique needs—whether it's automating workflows, extracting insights from data, or enhancing customer experiences.
            </p>            <p style={{ marginBottom: "2rem" }}>
              Our journey began with a shared vision: make advanced AI accessible and impactful for organizations of all sizes. Since then, we have:
            </p>
            <div style={{ marginBottom: "2rem", marginLeft: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#333",
                  marginRight: "1rem"
                }}></div>
                <p>Collaborated on pilot projects with local startups and SMEs.</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#333",
                  marginRight: "1rem"
                }}></div>
                <p>Developed proprietary tools for process automation and predictive analytics.</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#333",
                  marginRight: "1rem"
                }}></div>
                <p>Presented our work at university innovation showcases.</p>
              </div>
            </div>
            <p>
              As part of a globally recognized institution, we stay at the forefront of AI trends and best practices. Our commitment is to deliver measurable results and long-term value for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* What we value section */}
      <section style={{
        background: "transparent",
        padding: "80px 0"
      }}>
        <div style={{
          maxWidth: "1600px",
          margin: "0 3%",
          padding: "0 5%"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            marginBottom: "3rem",
            color: "#000"
          }}>
            What we value
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            color: "#000"
          }}>
            <div>
              <h3 style={{
                fontSize: "2.8rem",
                marginBottom: "1rem",
                fontWeight: "normal"
              }}>Innovation First</h3>
              <p style={{ fontSize: "1.2rem" }}>By pioneering AI solutions that transform how businesses operate and compete in the digital age</p>
            </div>
            <div>
              <h3 style={{
                fontSize: "2.8rem",
                marginBottom: "1rem",
                fontWeight: "normal"
              }}>Client Success</h3>
              <p style={{ fontSize: "1.2rem" }}>By delivering measurable results and ensuring our solutions create real business value</p>
            </div>
            <div>
              <h3 style={{
                fontSize: "2.8rem",
                marginBottom: "1rem",
                fontWeight: "normal"
              }}>Technical Excellence</h3>
              <p style={{ fontSize: "1.2rem" }}>By maintaining the highest standards in AI development and implementation</p>
            </div>
            <div>
              <h3 style={{
                fontSize: "2.8rem",
                marginBottom: "1rem",
                fontWeight: "normal"
              }}>Ethical AI</h3>
              <p style={{ fontSize: "1.2rem" }}>By ensuring responsible AI development that prioritizes transparency and fairness</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
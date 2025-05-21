import React, { useState } from 'react';

const testimonials = [
    {
        name: "Oscar Lew",
        position: "Technology Analyst",
        company: "Nomura",
        quote: "AdVantage AI transformed the way we approach automation. Their AI-driven messaging and task-specific chatbot solutions made our processes seamless from day one. Their expertise in automating advertising campaigns on platforms like Meta was exactly what we needed to scale our business efficiently.",
        image: "/images/Oscar.jpg"
    },
    {
        name: "Roger Ng",
        position: "Software Engineer",
        company: "Google",
        quote: "AdVantage AI has truly revolutionized our workflow with its innovative solutions, their Unified Analytics Dashboard ties everything together, providing actionable insights that drive smarter decisions. It's a comprehensive platform that delivers tangible results for businesses looking to grow efficiently!",
        image: "/images/Roger.jpg"
    },
    // Add more testimonials here
];

function UserExperience() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const previousTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section style={{ 
            position: "relative",
            width: "100vw",
            margin: 0,
            padding: "80px 0",
            background: "#ffffff",
            overflow: "hidden"
        }}>
            <div style={{
                maxWidth: "1600px",
                margin: "0 auto",
                padding: "0 40px"
            }}>
                <h2 style={{
                    fontSize: "clamp(36px, 5vw, 48px)",
                    fontWeight: "bold",
                    marginBottom: "clamp(40px, 5vw, 60px)",
                    textAlign: "center"
                }}>
                    Real happy clients who<br />use our product
                </h2>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(60px, 8vw, 120px)",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                    <div style={{
                        width: "clamp(300px, 35vw, 450px)",
                        height: "clamp(300px, 35vw, 450px)",
                        overflow: "hidden",
                        borderRadius: "4px",
                        flex: "0 0 auto"
                    }}>
                        <img 
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </div>

                    <div style={{
                        flex: "1 1 600px",
                        position: "relative",
                        minWidth: "400px",
                        maxWidth: "800px",
                        paddingRight: "40px"
                    }}>
                        <div style={{
                            backgroundColor: "#FFE600",
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "24px"
                        }}>
                            "
                        </div>
                        
                        <p style={{
                            fontSize: "clamp(18px, 2.5vw, 24px)",
                            marginBottom: "40px",
                            color: "#666",
                            lineHeight: 1.6,
                            maxWidth: "800px"
                        }}>
                            {testimonials[currentIndex].quote}
                        </p>

                        <h3 style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginBottom: "8px"
                        }}>
                            {testimonials[currentIndex].name}
                        </h3>
                        
                        <p style={{
                            color: "#666"
                        }}>
                            {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                        </p>

                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "32px",
                            marginTop: "32px"
                        }}>
                            <div style={{
                                display: "flex",
                                gap: "8px"
                            }}>
                                {testimonials.map((_, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            width: "32px",
                                            height: "4px",
                                            backgroundColor: index === currentIndex ? "#000" : "#ddd",
                                            transition: "background-color 0.3s ease"
                                        }}
                                    />
                                ))}
                            </div>
                            
                            <div style={{
                                display: "flex",
                                gap: "16px"
                            }}>
                                <button 
                                    onClick={previousTestimonial}
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "50%",
                                        border: "1px solid #000",
                                        background: "#000",
                                        color: "#fff",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                    aria-label="Previous testimonial"
                                >
                                    ←
                                </button>
                                <button 
                                    onClick={nextTestimonial}
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "50%",
                                        border: "1px solid #000",
                                        background: "#000",
                                        color: "#fff",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                    aria-label="Next testimonial"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserExperience;
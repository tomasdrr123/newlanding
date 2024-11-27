import './App.css';
import { useState } from 'react';

function App() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showDebugLines, setShowDebugLines] = useState(false);

  const features = [
    {
      title: "Track your route",
      description: "Plan your sailing journey with AI-powered routing that considers weather conditions, vessel characteristics, and safety parameters.",
      image: "/route-screen.png"
    },
    {
      title: "Weather Safety Score",
      description: "Get real-time safety scores based on weather conditions, wave height, and wind patterns to make informed decisions.",
      image: "/weather-screen.png"
    },
    {
      title: "Smart Notifications",
      description: "Receive timely alerts about weather changes, potential hazards, and optimal sailing conditions for your planned route.",
      image: "/notifications-screen.png"
    }
  ];

  return (
    <div className={`App ${showDebugLines ? 'debug-mode' : ''}`}>
      <nav className="navbar">
        <div className="logo">
          <strong>KapitonAI</strong>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            setShowDebugLines(!showDebugLines);
          }}>About</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-buttons">
          <button className="btn-download">Download</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="ratings">
            <span className="stars">★★★★★</span>
            <span>Over 10,000 Captains 5-star ratings</span>
          </div>
          <h1>Sailing AI assistant</h1>
          <p>Reduce sailing stress checking weather safety score, smart notifications, AI routing and more.</p>
          <div className="app-buttons">
            <a 
              href="https://apps.apple.com/your-app" 
              className="store-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/app-store.svg" alt="Download on App Store" />
            </a>
            <a 
              href="https://play.google.com/store/apps/your-app" 
              className="store-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/google-play.svg" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/app-screenshot.png" 
            alt="KapitonAI Route Screen"
            style={{ 
              display: 'block', 
              width: '85%', 
              height: 'auto'
            }}
          />
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h2>What can you do with KapitonAI?</h2>
          
          <div className="features-content">
            <div className="features-app-preview">
              <img 
                src={features[activeFeature].image} 
                alt="App Feature Preview"
                className="feature-screen"
              />
            </div>

            <div className="features-tabs">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`feature-tab ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>KapitonAI</h4>
              <p>Making sailing safer and more enjoyable with AI-powered tools and real-time insights.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#download">Download</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#support">Support</a></li>
                <li><a href="#privacy">Privacy</a></li>
                <li><a href="#terms">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 KapitonAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

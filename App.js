import './App.css';
import { useState } from 'react';

function App() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showDebugLines, setShowDebugLines] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    {
      title: "Intelligent routes",
      description: "Discover your sailing destinations and most comfortable routes with our AI-powered insights. In a few clicks get your entire journey planned and see what’s ahead with AI forecast analysis. Navigate smarter and avoid hazards with ease.",
      image: "/intelligent-routes.png"
    },
    {
      title: "Personalised guidance and assistance",
      description: "Whether you’re a beginner mastering the basics or an experienced sailor navigating local marine rules and laws, our app has you covered. Get tailored advice for every skill level, from docking techniques to understanding regional hazards and regulations, ensuring smooth sailing wherever you go.",
      image: "/intelligent-routes copy.png"
    },
    {
      title: "Comprehensive real-time data",
      description: "Get all the critical information at your fingertips—live weather updates, wind speed, boat speed, ETA, tide schedules, and more. With built-in gyroscope technology, monitor your boat’s movements and stability for a safer, more comfortable sailing experience.",
      image: "/intelligent-routes copy 2.png"
    },
    {
      title: "Community and Crew management",
      description: "Connect with fellow sailors, share routes, and exchange advice within a vibrant sailing community. Manage your crew effectively with in-app tools for sharing information, assigning tasks, coordinating schedules, and ensuring smooth teamwork on every voyage.",
      image: "/intelligent-routes copy 3.png"
    },
    {
      title: "Experience tracking and gamification",
      description: "Turn your journeys into achievements with our built-in sailing log. Automatically track your miles, routes, and time on the water while earning badges and rewards for your accomplishments. Make every trip count and watch your sailing story unfold!",
      image: "/intelligent-routes copy 4.png"
    }
  ];

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    setShowModal(false);
    alert('Thank you! We will notify you when the app launches.');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  return (
    <div className={`App ${showDebugLines ? 'debug-mode' : ''}`}>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h2>Coming Soon!</h2>
            <p>Leave your email to be notified when we launch.</p>
            <form onSubmit={handleSubmitEmail}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Notify Me</button>
            </form>
          </div>
        </div>
      )}

      <nav className="navbar">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
          <img src="/logo firstmate.png" alt="YourFirstMate" />
        </div>
        
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-links desktop-menu">
          <a href="#features" onClick={(e) => {
            e.preventDefault();
            document.getElementById('features').scrollIntoView({
              behavior: 'smooth'
            });
          }}>Features</a>
          <a href="#features" onClick={(e) => {
            e.preventDefault();
            document.getElementById('features').scrollIntoView({
              behavior: 'smooth'
            });
          }}>About</a>
          <a href="#features" onClick={(e) => {
            e.preventDefault();
            document.getElementById('features').scrollIntoView({
              behavior: 'smooth'
            });
          }}>FAQ</a>
        </div>
        <div className="nav-buttons desktop-menu">
          <button className="btn-download" onClick={handleDownloadClick}>Download</button>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a href="#features" onClick={(e) => {
              e.preventDefault();
              document.getElementById('features').scrollIntoView({
                behavior: 'smooth'
              });
              toggleMobileMenu();
            }}>Features</a>
            <a href="#features" onClick={(e) => {
              e.preventDefault();
              document.getElementById('features').scrollIntoView({
                behavior: 'smooth'
              });
              toggleMobileMenu();
            }}>About</a>
            <a href="#features" onClick={(e) => {
              e.preventDefault();
              document.getElementById('features').scrollIntoView({
                behavior: 'smooth'
              });
              toggleMobileMenu();
            }}>FAQ</a>
          </div>
          <div className="nav-buttons">
            <button className="btn-download" onClick={(e) => {
              handleDownloadClick(e);
              toggleMobileMenu();
            }}>Download</button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="ratings">
            <span className="stars">★★★★★</span>
            <span>Over 10,000 Captains 5-star ratings</span>
          </div>
          <h1>Your First Mate AI</h1>
          <p>Embark on stress-free and confident sailing with YourFirstMate, the AI-powered assistant tailored according to your experience and vessel, gathers all the weather, location, maritime information and provides real-time actionable alerts to simplify the complexities of sailing so you can focus on the adventure with the maximum comfort.</p>
          <div className="app-buttons">
            <a 
              href="#" 
              className="store-button"
              onClick={handleDownloadClick}
            >
              <img src="/app-store.svg" alt="Download on App Store" />
            </a>
            <a 
              href="#" 
              className="store-button"
              onClick={handleDownloadClick}
            >
              <img src="/google-play.svg" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/intelligent-routes.png" 
            alt="KapitonAI Route Screen"
            style={{ 
              display: 'block', 
              width: '85%', 
              height: 'auto'
            }}
          />
        </div>
      </section>

      <section className="features" id="features">
        <div className="features-container">
          <h2>What can you do with YourFirstMate AI?</h2>
          
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
              <h4 onClick={(e) => {
                e.preventDefault();
                setShowDebugLines(!showDebugLines);
              }} style={{ cursor: 'pointer' }}>YourFirstMate</h4>
              <p>Making sailing safer and more enjoyable with YourFirstMate-powered tools and real-time insights.</p>
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
            <p>&copy; 2024 YourFirstMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

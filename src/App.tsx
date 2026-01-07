import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import PasswordReset from './components/PasswordReset';
import ResetPassword from './components/ResetPassword';
import VerifyEmail from './components/VerifyEmail';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import Loader from './components/Loader';
import StaggeredMenu from './components/StaggeredMenu';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';

// Pages
import AboutPage from './pages/AboutPage';
import AgendaPage from './components/AgendaPage';
import EventsPage from './pages/EventsPage';
import SpeakersPage from './pages/SpeakersPage';
import SponsorsPage from './pages/SponsorsPage';
import PassesPage from './pages/PassesPage';
import AccommodationPage from './pages/AccommodationPage';
import AnnouncementsPage from './pages/AnnouncementsPage';

import './index.css';

// Menu items configuration
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to Home', link: '/' },
  { label: 'About', ariaLabel: 'Go to About', link: '/about' },
  { label: 'Events', ariaLabel: 'Go to Events', link: '/events' },
  { label: 'Agenda', ariaLabel: 'Go to Agenda', link: '/agenda' },
  { label: 'Speakers', ariaLabel: 'Go to Speakers', link: '/speakers' },
  { label: 'Sponsors', ariaLabel: 'Go to Sponsors', link: '/sponsors' },
  { label: 'Passes', ariaLabel: 'Go to Passes', link: '/passes' },
  { label: 'Stay', ariaLabel: 'Go to Accommodation', link: '/accommodation' },
  { label: 'Updates', ariaLabel: 'Go to Announcements', link: '/announcements' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/global-innovators-conclave-01a1903a5' },
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'Instagram', link: 'https://instagram.com' },
];

// Handle scroll to top and GSAP animations on route change
const PageAnimations = () => {
  const { pathname } = useLocation();

  // Use GSAP hook for scroll animations
  useGSAPAnimations();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Loader />}
      {!loading && (
        <div className="animate-fade-up">
          <PageAnimations />
          <BackgroundEffects />
          
          {/* Staggered Menu Navigation */}
          <StaggeredMenu
            items={menuItems}
            socialItems={socialItems}
            logoUrl="/logo.png"
            colors={['#EAEAEA', '#6B5B95']}
            accentColor="#6B5B95"
            menuButtonColor="#070707"
            openMenuButtonColor="#070707"
            isFixed={true}
            displaySocials={true}
            displayItemNumbering={true}
          />
          
          <div className="main-container flex flex-col min-h-screen">
            <div className="flex-1 pt-20">
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/agenda" element={<AgendaPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/speakers" element={<SpeakersPage />} />
                <Route path="/sponsors" element={<SponsorsPage />} />
                <Route path="/passes" element={<PassesPage />} />
                <Route path="/accommodation" element={<AccommodationPage />} />
                <Route path="/announcements" element={<AnnouncementsPage />} />
                
                {/* Auth Pages */}
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/forgot-password" element={<PasswordReset />} />
                <Route path="/reset-password" element={<ResetPassword />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FaHeadphones, FaMusic, FaStar, FaUsers, FaChartLine, FaBroadcastTower } from 'react-icons/fa';
import MusicCircle from './Images/MusicCircle.png';
import AppStoreButton from '../Components/AppStoreButton'; // ✅ Import Reusable Component

// 🔹 Main Page Container
const JourneyContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #333;
  position: relative;
  overflow-x: hidden;
`;

// 🔹 Fixed Background Image (ALWAYS VISIBLE)
const BackgroundImage = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1500px;
  height: auto;
  z-index: 1;
  opacity: 1;
  
  @media (max-width: 768px) {
    width: 500px;
  }
`;

// 🔹 Hero Section (100vh)
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  padding: 2rem;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 10;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

const Punchline = styled.h2`
  font-size: calc(1rem + 1.2vw);
  font-weight: lighter;
  color: #ddd;
  max-width: 800px;
  margin-bottom: 20px;
`;

// 🔹 Scroll Arrow Animation
const ScrollArrow = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  .chevron-icon {
    font-size: 24px;
    color: #fff;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`;

// 🔹 Section Containers (Keeps Content Readable & Organized)
const SectionContainer = styled.div`
  padding: 4rem 2rem;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
`;

// 🔹 Scrollable Row for Cards
const ScrollView = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 3rem 0;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

// 🔹 Individual Feature Card
const FeatureCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #333;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  color: #222;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  color: #666;
  text-align: center;
  font-size: 1rem;
`;

// 🔹 Main Component
const UserJourney = () => {
  return (
    <JourneyContainer>

      {/* 🔥 Fixed Background Image (Always Visible) */}
      <BackgroundImage src={MusicCircle} alt="MusicCircle Logo" />

      {/* 🎵 Hero Section (100vh) */}
      <HeroSection>
        <Title>WaveForum</Title>
        <Punchline>Discover, create, and grow as an artist with WaveForm's powerful music ecosystem.</Punchline>
        <AppStoreButton href="https://apps.apple.com/no/app/mapr/id6450910273" />
        <ScrollArrow>
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </ScrollArrow>
      </HeroSection>

      {/* 🌟 Discover Music Section */}
      <SectionContainer>
        <SectionTitle>Explore & Discover</SectionTitle>
        <ScrollView>
          <FeatureCard whileHover={{ scale: 1.1 }}>
            <FeatureIcon><FaHeadphones /></FeatureIcon>
            <FeatureTitle>Personalized Playlists</FeatureTitle>
            <FeatureDescription>
              Get AI-powered playlists tailored to your taste.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard whileHover={{ scale: 1.1 }}>
            <FeatureIcon><FaMusic /></FeatureIcon>
            <FeatureTitle>Exclusive Releases</FeatureTitle>
            <FeatureDescription>
              Be the first to hear new songs from your favorite artists.
            </FeatureDescription>
          </FeatureCard>
        </ScrollView>
      </SectionContainer>

    </JourneyContainer>
  );
};

export default UserJourney;
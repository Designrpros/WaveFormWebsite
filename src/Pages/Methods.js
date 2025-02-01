import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FaLightbulb, FaClipboardList, FaPencilRuler, FaCheckCircle, FaSync } from 'react-icons/fa';
import VR from './Images/VR.png';

// Main container
const JourneyContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #4B6079;
`;

// Animated Logo
const AnimatedLogo = styled(motion.img)`
  width: 800px;
  height: auto;

  @media (max-width: 768px) {
    width: 150px; /* Smaller size on mobile devices */
  }
`;

// Full-screen introduction section
const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: #4B6079;
  padding: 2rem;
  color: #fff;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
  text-align: center;
  color: #fff;
`;

const Punchline = styled.h2`
  font-size: calc(1rem + 1vw);
  text-align: center;
  margin-top: 10px;
`;

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 20px;
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

// Section Container
const SectionContainer = styled.div`
  padding: 3rem 2rem;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
`;

// Scrollable row for cards
const ScrollView = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 3.5rem 0;

  /* Add some padding for smooth scrolling */
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Individual Step Card
const StepCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  transition: all 0.3s ease;
  flex-shrink: 0; /* Prevent shrinking on scroll */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

// Icon for steps
const StepIcon = styled.div`
  font-size: 3rem;
  color: #333;
  margin-bottom: 15px;
`;

// Step title
const StepTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

// Step description
const StepDescription = styled.p`
  color: #666;
  text-align: center;
  font-size: 1rem;
`;

// Main Component
const Methods = () => {
  return (
    <JourneyContainer>
      <FullScreenIntro>
        <Title>PRIMA Metoder</Title>
        <Punchline>Metoder for å forbedre eldreomsorg med VR-teknologi</Punchline>
        <AnimatedLogo src={VR} alt="VR Logo" />
        <ScrollArrow>
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </ScrollArrow>
      </FullScreenIntro>

      <SectionContainer>
        <SectionTitle>Relevante Metoder</SectionTitle>
        <ScrollView>

          {/* Metode: Design Thinking */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaLightbulb />
            </StepIcon>
            <StepTitle>Design Thinking</StepTitle>
            <StepDescription>
              En brukerorientert metode for å utvikle innovative løsninger.
            </StepDescription>
          </StepCard>

          {/* Metode: Brukerundersøkelser */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaClipboardList />
            </StepIcon>
            <StepTitle>Brukerundersøkelser</StepTitle>
            <StepDescription>
              Samler data og innsikt fra brukere for å forstå deres behov.
            </StepDescription>
          </StepCard>

          {/* Metode: Prototyping */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaPencilRuler />
            </StepIcon>
            <StepTitle>Prototyping</StepTitle>
            <StepDescription>
              Utvikling av tidlige versjoner av VR-løsninger for testing.
            </StepDescription>
          </StepCard>

          {/* Metode: Brukertesting */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaCheckCircle />
            </StepIcon>
            <StepTitle>Brukertesting</StepTitle>
            <StepDescription>
              Evaluering av VR-opplevelser gjennom tilbakemeldinger fra brukere.
            </StepDescription>
          </StepCard>

          {/* Metode: Iterativ utvikling */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaSync />
            </StepIcon>
            <StepTitle>Iterativ utvikling</StepTitle>
            <StepDescription>
              Kontinuerlig forbedring av løsninger basert på tilbakemeldinger og data.
            </StepDescription>
          </StepCard>

        </ScrollView>
      </SectionContainer>
    </JourneyContainer>
  );
};

export default Methods;
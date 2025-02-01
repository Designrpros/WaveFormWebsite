import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MusicCircle from "./Images/MusicCircle.png"; // Ensure this image exists
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Styled Components
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #333;
`;

// Full-screen introduction section
const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: #333;
  padding: 2rem;
  position: relative;
  z-index: 0;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
  text-align: center;
  color: #fff;
`;

const Punchline = styled.h2`
  font-size: calc(1rem + 1vw);
  text-align: center;
  color: #fff;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: calc(1rem + 1.5vw);
  }
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
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const AnimatedLogo = styled(motion.img)`
  width: 1500px;
  height: auto;
  z-index: -1;
  position: absolute; /* Change from fixed to absolute */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Journey Section for services
const JourneySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem;
  background-color: #f4f4f4; /* Solid background color to cover MusicCircle */
  color: #333;
  position: relative; /* Ensure it's on top */
  z-index: 2; /* Higher than Hero Section so it covers the logo */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;

  h2 {
    font-size: 2rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #555;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ServiceItem = styled.li`
  background-color: #fff;
  color: #444;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Services = () => {
  return (
    <>
      <Helmet>
        <title>About WaveForm</title>
        <meta name="description" content="Discover the services we offer with WaveForm." />
      </Helmet>

      <PageWrapper>
        {/* Hero Section */}
        <FullScreenIntro>
          <AnimatedLogo src={MusicCircle} alt="MusicCircle Logo" />
          <Title>About WaveForm</Title>
          <Punchline>
            Stream Radio from around the world, with an intuitive interface and algorithm.
          </Punchline>
          <ScrollArrow>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </ScrollArrow>
        </FullScreenIntro>

        {/* Journey Section */}
        <JourneySection>
          {/* Text Block for Overview */}
          <TextBlock>
            <h2>Our Services</h2>
            <p>
              WaveForm provides curated radio stations from across the world, ensuring a seamless
              listening experience with personalized recommendations.
            </p>
          </TextBlock>

          {/* Service List Block */}
          <ServicesList>
            <ServiceItem>
              <strong>Personalized Stations:</strong> AI-driven recommendations based on your music taste.
            </ServiceItem>
            <ServiceItem>
              <strong>Global Content:</strong> Access radio stations from different countries.
            </ServiceItem>
            <ServiceItem>
              <strong>Favorites & Playlists:</strong> Save and organize your most-loved stations.
            </ServiceItem>
            <ServiceItem>
              <strong>Cross-Device Sync:</strong> Listen on any device seamlessly.
            </ServiceItem>
            <ServiceItem>
              <strong>Community & Sharing:</strong> Discover music with friends and share playlists.
            </ServiceItem>
          </ServicesList>
        </JourneySection>
      </PageWrapper>
    </>
  );
};

export default Services;
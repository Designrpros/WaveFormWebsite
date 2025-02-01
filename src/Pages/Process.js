import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import MusicCircle from './Images/MusicCircle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #333;
`;

const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: #333;
  padding: 2rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
  text-align: center;
  color: #fff;
`;

const Punchline = styled.h2`
  font-size: calc(1rem + 1.2vw);
  font-weight: lighter;
  color: #ddd;
  max-width: 800px;
  margin-bottom: 20px;
  text-align: center;

    @media (max-width: 768px) {
    font-size: calc(1rem + 1.5vw);
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

const AnimatedLogo = styled(motion.img)`
  width: 1500px;
  height: auto;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const JourneySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem;
  background-color: #f4f4f4;
  color: #333;
  position: relative;
  z-index: 2;

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
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #555;
  }
`;

const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ServiceItem = styled.li`
  background-color: #fff;
  color: #444;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
        <meta name="description" content="Read about how we protect your privacy and data." />
      </Helmet>

      <PageWrapper>
        <FullScreenIntro>
          <AnimatedLogo src={MusicCircle} alt="MusicCircle Logo" />
          <Title>Privacy Policy</Title>
          <Punchline>Understanding how we handle your data</Punchline>
          <ScrollArrow>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </ScrollArrow>
        </FullScreenIntro>

        <JourneySection>
  <TextBlock>
    <h2>1. Information We Collect</h2>
    <p>Mapr operates locally, meaning all your data is stored on your device and synced via iCloud. We do not collect personal data.</p>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Local Data Storage:</strong> Your data is securely stored on your device.
    </ServiceItem>
    <ServiceItem>
      <strong>iCloud Sync:</strong> Ensures seamless access across your devices.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>2. CoreData and iCloud</h2>
    <p>Your data is private and only accessible by you through iCloud settings.</p>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Privacy Control:</strong> Manage iCloud settings to enable or disable syncing.
    </ServiceItem>
    <ServiceItem>
      <strong>Data Security:</strong> Your data is protected by Apple's encryption standards.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>3. Analytics</h2>
    <p>We collect anonymous analytics to improve app performance. No personal data is stored.</p>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Anonymous Insights:</strong> Helps us enhance user experience.
    </ServiceItem>
    <ServiceItem>
      <strong>Opt-Out Option:</strong> Disable analytics via device settings.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>4. Data Security</h2>
    <p>We implement robust security measures to ensure your data remains safe.</p>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Apple Encryption:</strong> Protects your data with industry-leading security.
    </ServiceItem>
    <ServiceItem>
      <strong>Secure Cloud:</strong> iCloud uses advanced protection protocols.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>5. Changes to This Privacy Policy</h2>
    <p>We update our privacy policy periodically. Any changes will be posted here.</p>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Transparency:</strong> Stay informed about updates and revisions.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>6. Contact Us</h2>
    <p>Have questions about your data privacy? Reach out to us.</p>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Support Channels:</strong> Contact us through email or live chat.
    </ServiceItem>
    <ServiceItem>
      <strong>Community Forum:</strong> Engage with other users and get assistance.
    </ServiceItem>
  </ServicesList>
</JourneySection>

      </PageWrapper>
    </>
  );
};

export default PrivacyPolicy;

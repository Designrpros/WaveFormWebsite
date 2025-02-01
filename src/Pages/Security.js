import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import MusicCircle from './Images/MusicCircle.png';
import MusicCircleLight from './Images/MusicCircleLight.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Styled components
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
  font-size: calc(1rem + 1vw);
  text-align: center;
  color: #fff;
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

// Security Page Component
const Security = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode support

  return (
    <>
      <Helmet>
        <title>Waveform - Security</title>
        <meta name="description" content="Learn how we protect your data and ensure security." />
      </Helmet>

      <PageWrapper>
        {/* Hero Section */}
        <FullScreenIntro>
          <AnimatedLogo 
            src={isDarkMode ? MusicCircle : MusicCircleLight} 
            alt="MusicCircle Logo" 
          />
          <Title>Security</Title>
          <Punchline>Protecting your data with industry-leading security</Punchline>
          <ScrollArrow>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </ScrollArrow>
        </FullScreenIntro>

        {/* Security Information with Cards */}
        <JourneySection>
          <TextBlock>
            <h2>1. Acceptance of Terms</h2>
            <p>By using the Mapr app, you agree to these terms. If you do not accept them, discontinue use immediately.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Agreement Required:</strong> Using the app implies full acceptance of these terms.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Mapr app, you agree to comply with these Terms of Service and our Privacy Policy.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Agreement Required:</strong> If you do not agree to these terms, you must not use the app.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>2. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Any changes will be posted in this section.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Review Regularly:</strong> Terms may change, and it is your responsibility to stay updated.
            </ServiceItem>
            <ServiceItem>
              <strong>Continued Use:</strong> By continuing to use the app after updates, you accept the revised terms.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>3. User Responsibilities</h2>
            <p>Users must adhere to laws, respect intellectual property, and avoid harmful activities.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Legal Compliance:</strong> Users must not violate any applicable laws or regulations.
            </ServiceItem>
            <ServiceItem>
              <strong>Intellectual Property:</strong> Unauthorized use of copyrighted content is prohibited.
            </ServiceItem>
            <ServiceItem>
              <strong>Service Integrity:</strong> Avoid activities that could harm the app’s functionality.
            </ServiceItem>
            <ServiceItem>
              <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>4. Privacy and Data Usage</h2>
            <p>Your privacy is important to us. For more details, refer to our Privacy Policy.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Data Collection:</strong> We collect minimal, anonymized analytics to improve the app.
            </ServiceItem>
            <ServiceItem>
              <strong>Data Security:</strong> All personal data is stored securely and managed according to our Privacy Policy.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>5. Intellectual Property</h2>
            <p>The content, design, and features of Mapr are protected by intellectual property laws.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Limited License:</strong> Users are granted a non-transferable, non-exclusive right to use the app.
            </ServiceItem>
            <ServiceItem>
              <strong>Prohibited Use:</strong> Unauthorized distribution or modification of the app's content is strictly prohibited.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Mapr is not liable for any damages resulting from the app’s use.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>No Warranty:</strong> The app is provided “as is” without guarantees of uninterrupted service.
            </ServiceItem>
            <ServiceItem>
              <strong>Limited Liability:</strong> Mapr is not responsible for data loss, service interruptions, or security breaches.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>7. Termination</h2>
            <p>We may suspend or terminate your access to the Mapr app if you violate these terms.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Immediate Termination:</strong> Your account may be terminated without prior notice for misconduct.
            </ServiceItem>
            <ServiceItem>
              <strong>Harmful Behavior:</strong> Any harmful or disruptive behavior will lead to account suspension.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>8. Disclaimer of Warranties</h2>
            <p>The Mapr app is provided without warranties of any kind, either express or implied.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Use at Your Own Risk:</strong> We do not guarantee that the app will always function without errors.
            </ServiceItem>
            <ServiceItem>
              <strong>Limited Support:</strong> While we strive to maintain service availability, we do not warrant uninterrupted access.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>9. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of your jurisdiction.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Legal Jurisdiction:</strong> Any legal actions related to these terms must be filed in the appropriate courts.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>10. Contact Us</h2>
            <p>If you have any questions regarding these terms, reach out to us at support@mapr.com.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Support:</strong> Our team is available to assist you with any concerns.
            </ServiceItem>
            <ServiceItem>
              <strong>Privacy Queries:</strong> If you have privacy-related questions, refer to our Privacy Policy or contact us.
            </ServiceItem>
          </ServicesList>
        </JourneySection>
      </PageWrapper>
    </>
  );
};

export default Security;
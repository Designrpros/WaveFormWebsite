import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import MusicCircle from './Images/MusicCircle.png';
import MusicCircleLight from './Images/MusicCircleLight.png';
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

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service</title>
        <meta name="description" content="Read the terms and conditions for using Mapr." />
      </Helmet>

      <PageWrapper>
        <FullScreenIntro>
          <AnimatedLogo src={MusicCircle} alt="MusicCircle Logo" />
          <Title>Terms of Service</Title>
          <Punchline>Understanding your rights and responsibilities</Punchline>
          <ScrollArrow>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </ScrollArrow>
        </FullScreenIntro>

        <JourneySection>
          <TextBlock>
            <h2>1. Acceptance of Terms</h2>
            <p>By using Mapr, you agree to these terms. If you do not accept them, discontinue use immediately.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Agreement Required:</strong> Using the app implies full acceptance of these terms.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>2. Changes to Terms</h2>
            <p>We may update these terms periodically. Continued use of Mapr signifies acceptance of changes.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Review Regularly:</strong> Terms may change, and it is your responsibility to stay updated.
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
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>4. Privacy and Data Usage</h2>
            <p>Your data is managed as outlined in our Privacy Policy. By using Mapr, you consent to these practices.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Privacy Policy:</strong> Data handling is explained in our separate privacy document.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>5. Intellectual Property</h2>
            <p>All content and features within Mapr are protected by intellectual property laws.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Limited License:</strong> Users are granted a non-transferable, non-exclusive right to use the app.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>6. Limitation of Liability</h2>
            <p>Mapr is not liable for damages resulting from the use of the app.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>No Warranty:</strong> The app is provided "as is" without guarantees.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>7. Termination</h2>
            <p>We reserve the right to terminate accounts that violate these terms.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Account Suspension:</strong> Accounts may be terminated without notice.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>8. Governing Law</h2>
            <p>These terms are governed by the laws of your jurisdiction.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Legal Compliance:</strong> Disputes must be resolved in the appropriate legal venue.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>9. Contact Us</h2>
            <p>For any questions regarding these terms, contact us at support@mapr.com.</p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Support:</strong> Reach out to our team for clarifications or concerns.
            </ServiceItem>
          </ServicesList>
        </JourneySection>
      </PageWrapper>
    </>
  );
};

export default TermsOfService;
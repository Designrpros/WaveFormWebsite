import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import MusicCircleDark from "./Images/MusicCircle.png"; // Dark mode image
import MusicCircleLight from "./Images/MusicCircleLight.png"; // Light mode image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlay, faPause, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import RadioSlider from "../Components/RadioSlider";
import radioStations from "../Components/radioStations";


// Themes for dark and light mode
const darkTheme = {
  background: "#333",
  textColor: "#fff",
  cardBackground: "#555",
  childCardBackground: "#666",
  waveformColor: "#fff",
  logo: MusicCircleDark,
};

const lightTheme = {
  background: "#f4f4f4",
  textColor: "#000",
  cardBackground: "#ddd",
  childCardBackground: "#ccc",
  waveformColor: "#000",
  logo: MusicCircleLight,
};

// Styled Components
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: ${({ theme }) => theme.textColor};
`;

const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: ${({ theme }) => theme.background};
  padding: 2rem;
  position: relative;
`;

const AnimatedLogo = styled(motion.img)`
  width: 1500px;
  height: auto;
  z-index: 0;
  position: fixed;
  transform: translate(-50%, -50%);
`;

const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
  margin-bottom: 1rem;
  z-index: 2;
`;

const WaveformContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 60px;
  margin: 1rem 0;
`;

const Bar = styled(motion.div)`
  width: 10px;
  background-color: ${({ theme }) => theme.waveformColor};
  border-radius: 2px;
`;

const MusicControls = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  z-index: 2;
`;

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 2;

  .chevron-icon {
    font-size: 24px;
    color: ${({ theme }) => theme.textColor};
    animation: bounce 2s infinite;
  }
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 0;
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const ChildCard = styled.div`
  background: ${({ theme }) => theme.childCardBackground};
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  text-align: left;
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.textColor};
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.background};
  }
`;

const Home = () => {
  const [samples, setSamples] = useState(new Array(8).fill(0.5)); // 8 bars for the waveform
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStation, setCurrentStation] = useState(null);
  const [stationIndex, setStationIndex] = useState(0); // Track the current station index
  const audioRef = useRef(new Audio());
  const [theme, setTheme] = useState(darkTheme); // Manage theme state

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  // Update waveform animation
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setSamples(samples.map(() => Math.random() * 2 + 0.5));
      }, 200);
    } else {
      clearInterval(interval);
      setSamples(new Array(8).fill(0.5)); // Reset to default
    }
    return () => clearInterval(interval);
  }, [isPlaying, samples]);

  // Play the current or random station
  const handleGlobalPlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!currentStation) {
        const randomStation = radioStations[Math.floor(Math.random() * radioStations.length)];
        setStationIndex(radioStations.indexOf(randomStation));
        setCurrentStation(randomStation);
        audioRef.current.src = randomStation.streamURL;
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Play the previous station
  const handlePrevious = () => {
    const previousIndex = stationIndex === 0 ? radioStations.length - 1 : stationIndex - 1;
    setStationIndex(previousIndex);
    const previousStation = radioStations[previousIndex];
    setCurrentStation(previousStation);
    audioRef.current.src = previousStation.streamURL;
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Play the next station
  const handleNext = () => {
    const nextIndex = (stationIndex + 1) % radioStations.length;
    setStationIndex(nextIndex);
    const nextStation = radioStations[nextIndex];
    setCurrentStation(nextStation);
    audioRef.current.src = nextStation.streamURL;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>WaveForm</title>
        <meta name="description" content="WaveForm, Radio TikTok" />
      </Helmet>

      <PageWrapper>
        {/* Fullscreen Intro */}
        <FullScreenIntro>
          <AnimatedLogo
            src={theme.logo}
            alt="MusicCircle Logo"
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ repeat: isPlaying ? Infinity : 0, duration: 60, ease: "linear" }}
          />
          <IntroContent>
            <Title>WaveForm</Title>
            
            {/* Radio Station Slider */}
            <RadioSlider
              stations={radioStations}
              currentStation={currentStation}
              setCurrentStation={setCurrentStation}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
            />

            {/* Waveform Animation */}
            <WaveformContainer>
              {samples.map((height, index) => (
                <Bar
                  key={index}
                  initial={{ height: "20%" }}
                  animate={{ height: `${height * 20}px` }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              ))}
            </WaveformContainer>

            {/* Music Controls */}
            <MusicControls>
              <FontAwesomeIcon icon={faStepBackward} size="2x" onClick={handlePrevious} />
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                size="2x"
                onClick={handleGlobalPlayPause}
              />
              <FontAwesomeIcon icon={faStepForward} size="2x" onClick={handleNext} />
            </MusicControls>
          </IntroContent>
          <ScrollArrow>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </ScrollArrow>
        </FullScreenIntro>

        {/* Services Section */}
        <ServicesContainer>
          <ServiceCard>
            <Heading>Discover New Stations</Heading>
            <Paragraph>Find curated radio stations from around the world.</Paragraph>
            <ChildCard>
              <Paragraph><strong>Station Discovery:</strong> Effortlessly explore curated stations.</Paragraph>
            </ChildCard>
            <ChildCard>
              <Paragraph><strong>AI Recommendations:</strong> Get suggestions based on your taste.</Paragraph>
            </ChildCard>
          </ServiceCard>

          <ServiceCard>
            <Heading>Personalize Your Experience</Heading>
            <Paragraph>Save favorites and create playlists easily.</Paragraph>
            <ChildCard>
              <Paragraph><strong>Favorites & Playlists:</strong> Save and organize stations.</Paragraph>
            </ChildCard>
            <ChildCard>
              <Paragraph><strong>Sync Across Devices:</strong> Access your stations anywhere.</Paragraph>
            </ChildCard>
          </ServiceCard>

          <ServiceCard>
            <Heading>Smart Search</Heading>
            <Paragraph>Find stations by genre, language, or mood.</Paragraph>
            <ChildCard>
              <Paragraph><strong>Advanced Filtering:</strong> Search stations easily.</Paragraph>
            </ChildCard>
            <ChildCard>
              <Paragraph><strong>Swipe-to-Discover:</strong> Explore new content with gestures.</Paragraph>
            </ChildCard>
          </ServiceCard>

          <ServiceCard>
            <Heading>Cross-Device Sync</Heading>
            <Paragraph>Access your stations seamlessly across all devices.</Paragraph>
            <ChildCard>
              <Paragraph><strong>Cloud Integration:</strong> Sync your favorite stations in real-time.</Paragraph>
            </ChildCard>
            <ChildCard>
              <Paragraph><strong>Listen Anywhere:</strong> Access your playlists on multiple platforms.</Paragraph>
            </ChildCard>
          </ServiceCard>

          <ServiceCard>
            <Heading>Community & Sharing</Heading>
            <Paragraph>Connect with others and share your favorite stations.</Paragraph>
            <ChildCard>
              <Paragraph><strong>Share with Friends:</strong> Send and receive station recommendations.</Paragraph>
            </ChildCard>
            <ChildCard>
              <Paragraph><strong>Discover Together:</strong> Join a community of music lovers.</Paragraph>
            </ChildCard>
          </ServiceCard>

          <ServiceCard>
            <Heading>Ready to Start?</Heading>
            <Paragraph>Join the community and enjoy your favorite music!</Paragraph>
            <ChildCard>
              <Paragraph><strong>Advanced Filtering:</strong> Search stations easily.</Paragraph>
            </ChildCard>
            <ChildCard>
              <Paragraph><strong>Swipe-to-Discover:</strong> Explore new content with gestures.</Paragraph>
            </ChildCard>
          </ServiceCard>
        </ServicesContainer>
      </PageWrapper>

      {/* Audio Element */}
      <audio ref={audioRef} />
    </ThemeProvider>
  );
};

export default Home;
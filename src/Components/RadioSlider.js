import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

// Styled Components
const SliderContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  width: 100%;
  max-width: 1000px;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RadioCard = styled.div`
  flex: 0 0 auto;
  width: 120px;
  height: 120px;
  background: #444;
  color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  scroll-snap-align: start;
  text-align: center;
  padding: 1rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const RadioSlider = ({ stations, currentStation, setCurrentStation, isPlaying, setIsPlaying, audioRef }) => {
  const handleStationClick = (station) => {
    if (currentStation?.id === station.id && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = station.streamURL;
      audioRef.current.play();
      setCurrentStation(station);
      setIsPlaying(true);
    }
  };

  return (
    <SliderContainer>
      {stations.map((station) => (
        <RadioCard key={station.id} onClick={() => handleStationClick(station)}>
          <br></br>
          <strong>{station.title}</strong>
          <br></br>
          <small>{station.genre}</small>
          <br></br>
          <FontAwesomeIcon icon={currentStation?.id === station.id && isPlaying ? faPause : faPlay} size="1x" />
        </RadioCard>
      ))}
    </SliderContainer>
  );
};

export default RadioSlider;
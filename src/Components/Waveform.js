import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: absolute;
  top: -40px;
  left: -40px;
  width: 400px;
  height: 400px;
  z-index: 0;
`;

const useSimulatedOutwardWaveform = (canvasRef) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const POLAROID_SIZE = 320; // Polaroid size to avoid drawing inside this area
    const CORNER_SAFE_ZONE = 50; // Define how far from the corners the bars should stop

    const drawOutwardWaveform = () => {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      context.strokeStyle = '#000000'; // Black color for waveform
      context.lineWidth = 3; // Adjusted line width for a thinner look

      const step = 10; // Distance between waveform lines

      // Top and bottom bars extending outwards
      for (let i = 0; i < WIDTH / step; i++) {
        const barHeight = Math.random() * 20 + 5; // Reduced bar height for smaller lines

        // Skip the corner areas
        if (i * step < CORNER_SAFE_ZONE || i * step > WIDTH - CORNER_SAFE_ZONE) continue;

        // Top side (waveform extending outwards from Polaroid)
        context.beginPath();
        context.moveTo(i * step, HEIGHT / 2 - POLAROID_SIZE / 2);
        context.lineTo(i * step, HEIGHT / 2 - POLAROID_SIZE / 2 - barHeight); // Bars moving upwards
        context.stroke();

        // Bottom side (waveform extending outwards from Polaroid)
        context.beginPath();
        context.moveTo(i * step, HEIGHT / 2 + POLAROID_SIZE / 2);
        context.lineTo(i * step, HEIGHT / 2 + POLAROID_SIZE / 2 + barHeight); // Bars moving downwards
        context.stroke();
      }

      // Left and right bars extending outwards
      for (let j = 0; j < HEIGHT / step; j++) {
        const barWidth = Math.random() * 20 + 5; // Reduced bar width for smaller lines

        // Skip the corner areas
        if (j * step < CORNER_SAFE_ZONE || j * step > HEIGHT - CORNER_SAFE_ZONE) continue;

        // Left side (waveform extending outwards from Polaroid)
        context.beginPath();
        context.moveTo(WIDTH / 2 - POLAROID_SIZE / 2, j * step);
        context.lineTo(WIDTH / 2 - POLAROID_SIZE / 2 - barWidth, j * step); // Bars moving left
        context.stroke();

        // Right side (waveform extending outwards from Polaroid)
        context.beginPath();
        context.moveTo(WIDTH / 2 + POLAROID_SIZE / 2, j * step);
        context.lineTo(WIDTH / 2 + POLAROID_SIZE / 2 + barWidth, j * step); // Bars moving right
        context.stroke();
      }
    };

    const animate = () => {
      setTimeout(() => {
        drawOutwardWaveform();
        requestAnimationFrame(animate);
      }, 300); // Adjusted for smoother animation
    };

    animate();
  }, [canvasRef]);
};

const Waveform = () => {
  const canvasRef = useRef(null);
  useSimulatedOutwardWaveform(canvasRef);

  return <Canvas ref={canvasRef} />;
};

export default Waveform;
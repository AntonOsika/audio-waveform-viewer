import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Box } from '@chakra-ui/react';

const Waveform = ({ file }) => {
  const waveformRef = useRef(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const audioData = event.target.result;
        const wavesurfer = WaveSurfer.create({
          container: waveformRef.current,
          waveColor: '#ddd',
          progressColor: '#4A90E2',
          responsive: true,
        });
        wavesurfer.loadBlob(new Blob([audioData]));
      };
      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  return <Box ref={waveformRef} width="100%" height="200px" />;
};

export default Waveform;
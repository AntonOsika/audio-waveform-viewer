import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';
import Waveform from '../components/Waveform';

const Index = () => {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAudioFile(file);
  };

  return (
    <Box p={4} textAlign="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Upload Audio and See Waveform</Text>
        <Input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          display="none"
          id="audio-upload"
        />
        <Button as="label" htmlFor="audio-upload" leftIcon={<FaUpload />} colorScheme="teal">
          Upload Audio
        </Button>
        {audioFile && <Waveform file={audioFile} />}
      </VStack>
    </Box>
  );
};

export default Index;